# CDK + Prisma

This is integrating Prisma with `aws-lambda-nodejs` to run Prisma on Lambda. A REST API is also exposed that uses API Gateway with a Lambda Proxy integration.

The `cdk.json` file tells the CDK Toolkit how to execute your app.

## Prerequisites

- Replace `region` in `cdk.context.json` to the one of your choice (default is `us-east-2`).

- Rename `.example.env` to `.env` and replace the placeholder values with the actual values from Secrets Manager after the stack has been deployed.

## Useful commands

- `yarn build` compile typescript to js
- `yarn watch` watch for changes and compile
- `yarn test` perform the jest unit tests
- `yarn cdk deploy` deploy this stack to your default AWS account/region
- `yarn cdk diff` compare deployed stack with current state
- `yarn cdk synth` emits the synthesized CloudFormation template
