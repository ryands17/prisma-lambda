#!/usr/bin/env node
import 'source-map-support/register'
import * as cdk from '@aws-cdk/core'
import { PrismaLambdaStack } from '../lib/prisma-lambda-stack'

const app = new cdk.App()
new PrismaLambdaStack(app, 'PrismaLambdaStack', {
  env: { region: app.node.tryGetContext('region') },
})
