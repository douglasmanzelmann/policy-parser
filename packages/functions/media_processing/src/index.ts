import { Context, S3Event } from 'aws-lambda';
import { Array, Effect, Console, Option } from 'effect';
import { } from '@policy-parser/core';

export async function handler(event: S3Event, ctx: Context) {

  console.log(`event ${JSON.stringify(event)}`);
  console.log(`ctx ${JSON.stringify(ctx)}`);
  const program = Effect.gen(function*() {
    const result = yield* Array.head(event.Records).pipe(
      Option.match({
        onSome: (e) => Console.log('some'),
        onNone: () => Console.log('none')
      })
    )
  });

  Effect.runPromise(program);

  return {
    statusCode: 200
  }
}
