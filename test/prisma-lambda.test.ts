import { expect as expectCDK, haveResourceLike } from '@aws-cdk/assert'
import * as cdk from '@aws-cdk/core'
import * as PrismaLambda from '../lib/prisma-lambda-stack'

test('Snapshot matches correctly', () => {
  const stack = createStack({ outdir: 'cdk.out', stackTraces: false })

  expectCDK(stack).to(
    haveResourceLike('AWS::Lambda::Function', {
      Code: {
        S3Bucket: {},
        S3Key: {},
      },
      Role: {},
      Environment: {
        Variables: {},
      },
      Handler: 'index.handler',
      Runtime: 'nodejs14.x',
      Timeout: 10,
    })
  )
})

function createStack(props?: cdk.AppProps) {
  const app = new cdk.App(props)
  return new PrismaLambda.PrismaLambdaStack(app, 'MyTestStack')
}
