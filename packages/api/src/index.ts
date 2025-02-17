import { Hono } from 'hono'
import { handle, LambdaEvent } from 'hono/aws-lambda'

type Bindings = {
  event: LambdaEvent
}

const app = new Hono<{ Bindings: Bindings }>()

app.get('/', (c) => {
  console.log("Hello there");
  return c.text(`Hello World`);
})

export const handler = async (event: LambdaEvent) => {
  // Check if this is an S3 event        
  return {
    statusCode: 200
  }

  // If not an S3 event, handle as HTTP request
  return handle(app);
}
