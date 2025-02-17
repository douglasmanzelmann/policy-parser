import { GetObjectCommandInput, GetObjectCommandOutput, HeadObjectCommandInput, HeadObjectCommandOutput, S3Client } from "@aws-sdk/client-s3";
import { Context, Effect, Layer } from "effect";
declare const S3_base: Context.TagClass<S3, "S3", S3Client>;
export declare class S3 extends S3_base {
}
export declare const S3Live: Layer.Layer<S3, import("effect/ConfigError").ConfigError, never>;
declare const S3Service_base: Context.TagClass<S3Service, "S3Service", {
    readonly headObject: (input: HeadObjectCommandInput) => Effect.Effect<HeadObjectCommandOutput, Error>;
    readonly getObject: (input: GetObjectCommandInput) => Effect.Effect<GetObjectCommandOutput, Error>;
}>;
export declare class S3Service extends S3Service_base {
}
export declare const S3ServiceLive: Layer.Layer<S3Service, never, S3>;
export {};
