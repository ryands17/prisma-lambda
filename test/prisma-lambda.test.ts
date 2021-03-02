import { SynthUtils } from '@aws-cdk/assert'
import * as cdk from '@aws-cdk/core'
import * as PrismaLambda from '../lib/prisma-lambda-stack'

test('Snapshot matches correctly', () => {
  const stack = createStack({ outdir: 'cdk.out', stackTraces: false })
  const snapshot = SynthUtils.synthesize(stack)
  expect(snapshot).toMatchSnapshot()
})

function createStack(props?: cdk.AppProps) {
  const app = new cdk.App(props)
  return new PrismaLambda.PrismaLambdaStack(app, 'MyTestStack')
}
