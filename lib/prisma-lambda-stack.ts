import { join } from 'path'
import * as cdk from '@aws-cdk/core'
import * as ln from '@aws-cdk/aws-lambda-nodejs'
import * as lambda from '@aws-cdk/aws-lambda'

const lambdaFn = join(__dirname, '..', 'functions', 'index.ts')

export class PrismaLambdaStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props)

    // The code that defines your stack goes here
    new ln.NodejsFunction(this, 'prisma', {
      runtime: lambda.Runtime.NODEJS_14_X,
      handler: 'handler',
      entry: lambdaFn,
      timeout: cdk.Duration.seconds(10),
      memorySize: 1024,
      environment: {
        DB_URL: process.env.DB_URL || '',
      },
      bundling: {
        nodeModules: ['@prisma/client', 'prisma'],
        commandHooks: {
          beforeBundling(inputDir: string, outputDir: string): string[] {
            return []
          },
          beforeInstall(inputDir: string, outputDir: string) {
            return [`cp -R ../prisma ${outputDir}/`]
          },
          afterBundling(inputDir: string, outputDir: string): string[] {
            return [
              `cd ${outputDir}`,
              `yarn prisma generate`,
              `rm -rf node_modules/@prisma/engines`,
              `rm -rf node_modules/@prisma/client/node_modules node_modules/.bin node_modules/prisma`,
            ]
          },
        },
      },
    })
  }
}
