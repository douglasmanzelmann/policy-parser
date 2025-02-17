/// <reference path="./.sst/platform/config.d.ts" />

export default $config({
  app(input) {
    return {
      name: "policy-parser",
      removal: input?.stage === "production" ? "retain" : "remove",
      protect: ["production"].includes(input?.stage),
      home: "aws",
    };
  },
  async run() {
    // Bucket for storing policy documents with event notifications
    const documentsBucket = new sst.aws.Bucket("DocumentsBucket", {
      versioning: true,
      cors: {
        allowHeaders: ["*"],
        allowMethods: ["GET", "PUT", "POST"],
        allowOrigins: ["*"],
        maxAge: "1 hour"
      }
    });

    // Single-table design for document analysis results
    const table = new sst.aws.Dynamo("Table", {
      fields: {
        pk: "string",
        sk: "string",
        gsi1pk: "string",
        gsi1sk: "string",
        gsi2pk: "string",
        gsi2sk: "string",
      },
      primaryIndex: { hashKey: "pk", rangeKey: "sk" },
      globalIndexes: {
        byDate: { hashKey: "gsi1pk", rangeKey: "gsi1sk" },
        byAnnotation: { hashKey: "gsi2pk", rangeKey: "gsi2sk" },
      },
    });

    // Create processing function and link to existing resources
    const processingFunction = new sst.aws.Function("MediaProcessingFunction", {
      handler: "packages/functions/media_processing/src/index.handler",
      timeout: '900 seconds',
      runtime: "nodejs22.x",
      architecture: "arm64",
      environment: {
        ANTHROPIC_API_KEY: process.env.ANTHROPIC_API_KEY!,
      },
      link: [documentsBucket, table]
    });

    documentsBucket.notify({
      notifications: [
        {
          name: "MediaProcessing",
          function: processingFunction.arn,
          events: ["s3:ObjectCreated:*"]
        }
      ]
    });

    return {
      documentsBucket: documentsBucket.name,
    };
  },
});
