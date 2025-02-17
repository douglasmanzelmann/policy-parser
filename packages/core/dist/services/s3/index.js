import { GetObjectCommand, HeadObjectCommand, S3Client } from "@aws-sdk/client-s3";
import { Config, Context, Effect, Layer } from "effect";
export class S3 extends Context.Tag('S3')() {
}
export const S3Live = Layer.effect(S3, Effect.gen(function* () {
    const region = yield* Config.string('AWS_REGION');
    const client = new S3Client({ region });
    return S3.of(client);
}));
export class S3Service extends Context.Tag('S3Service')() {
}
export const S3ServiceLive = Layer.effect(S3Service, Effect.gen(function* () {
    const s3Client = yield* S3;
    return S3Service.of({
        getObject: (input) => Effect.gen(function* () {
            return yield* Effect.tryPromise({
                try: async () => {
                    return await s3Client.send(new GetObjectCommand(input));
                },
                catch: () => { return new Error(); }
            });
        }),
        headObject: (input) => Effect.gen(function* () {
            return yield* Effect.tryPromise({
                try: async () => {
                    return await s3Client.send(new HeadObjectCommand(input));
                },
                catch: (error) => { return new Error(); }
            });
        })
    });
}));
