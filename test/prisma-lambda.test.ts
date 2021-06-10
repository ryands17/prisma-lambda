import { expect as expectCDK, haveResourceLike } from '@aws-cdk/assert'
import * as cdk from '@aws-cdk/core'
import * as PrismaLambda from '../lib/prisma-lambda-stack'
import { Code, CodeConfig } from '@aws-cdk/aws-lambda'

let fromAssetMock: jest.SpyInstance

beforeAll(() => {
  fromAssetMock = jest.spyOn(Code, 'fromAsset').mockReturnValue({
    isInline: false,
    bind: (): CodeConfig => {
      return {
        s3Location: {
          bucketName: 'my-bucket',
          objectKey: 'my-key',
        },
      }
    },
    bindToResource: () => {
      return
    },
  } as any)
})

test('Lambda function is created with the correct params', () => {
  const stack = createStack({ outdir: 'cdk.out', stackTraces: false })

  expectCDK(stack).to(
    haveResourceLike('AWS::Lambda::Function', {
      Code: {},
      Role: {},
      Environment: {
        Variables: {},
      },
      Handler: 'index.handler',
      Runtime: 'nodejs14.x',
      Timeout: 10,
      MemorySize: 1024,
    })
  )
})

function createStack(props?: cdk.AppProps) {
  const app = new cdk.App(props)
  return new PrismaLambda.PrismaLambdaStack(app, 'MyTestStack')
}

afterAll(() => {
  fromAssetMock?.mockRestore()
})
