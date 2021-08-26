import './hooks'
import { expect as expectCDK, haveResourceLike } from '@aws-cdk/assert'
import * as cdk from '@aws-cdk/core'
import * as PrismaLambda from '../lib/prisma-lambda-stack'

test('VPC and Subnets are created', () => {
  const stack = createStack({ outdir: 'cdk.test.out', stackTraces: false })

  expectCDK(stack).to(
    haveResourceLike('AWS::EC2::VPC', {
      CidrBlock: '10.0.0.0/20',
      EnableDnsHostnames: true,
      EnableDnsSupport: true,
      InstanceTenancy: 'default',
    })
  )

  for (let range of [0, 4, 8, 12])
    expectCDK(stack).to(
      haveResourceLike('AWS::EC2::Subnet', {
        CidrBlock: `10.0.${range}.0/22`,
      })
    )
})

test('RDS Database is created with the correct values', () => {
  const stack = createStack({ outdir: 'cdk.test.out', stackTraces: false })

  expectCDK(stack).to(
    haveResourceLike('AWS::RDS::DBSubnetGroup', {
      DBSubnetGroupDescription: 'Subnet group for RDS Postgres',
      DBSubnetGroupName: 'rds-subnet-group',
    })
  )

  expectCDK(stack).to(
    haveResourceLike('AWS::RDS::DBInstance', {
      DBInstanceClass: 'db.t2.micro',
      AllocatedStorage: '20',
      AutoMinorVersionUpgrade: false,
      CopyTagsToSnapshot: true,
      DBName: 'prisma',
      Engine: 'postgres',
      EngineVersion: '12.7',
      PubliclyAccessible: true,
      StorageType: 'gp2',
    })
  )
})

test('Lambda function is created with the correct params', () => {
  const stack = createStack({ outdir: 'cdk.test.out', stackTraces: false })

  expectCDK(stack).to(
    haveResourceLike('AWS::Lambda::Function', {
      Code: {},
      Role: {},
      Environment: {
        Variables: {},
      },
      Handler: 'index.handler',
      Runtime: 'nodejs14.x',
      Timeout: 5,
      MemorySize: 512,
    })
  )
})

function createStack(props?: cdk.AppProps) {
  const app = new cdk.App(props)
  return new PrismaLambda.PrismaLambdaStack(app, 'PrismaLambdaStack')
}
