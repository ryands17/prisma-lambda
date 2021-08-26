import * as cdk from '@aws-cdk/core'
import * as ln from '@aws-cdk/aws-lambda-nodejs'
import * as api from '@aws-cdk/aws-apigateway'
import * as ec2 from '@aws-cdk/aws-ec2'
import * as rds from '@aws-cdk/aws-rds'
import { Runtime } from '@aws-cdk/aws-lambda'

export class PrismaLambdaStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props)

    this.createVpcAndRDS()

    // The Lambda function with Prisma bundled
    const handler = new ln.NodejsFunction(this, 'prisma', {
      runtime: Runtime.NODEJS_14_X,
      entry: 'functions/index.ts',
      timeout: cdk.Duration.seconds(5),
      memorySize: 512,
      environment: {
        DB_URL: process.env.DB_URL,
      },
      bundling: {
        nodeModules: ['@prisma/client', 'prisma'],
        commandHooks: {
          beforeBundling(_inputDir: string, _outputDir: string) {
            return []
          },
          beforeInstall(inputDir: string, outputDir: string) {
            return [`cp -R ${inputDir}/prisma ${outputDir}/`]
          },
          afterBundling(_inputDir: string, outputDir: string) {
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

    // REST API
    new api.LambdaRestApi(this, 'api', {
      handler,
    })
  }

  createVpcAndRDS() {
    const vpc = new ec2.Vpc(this, 'serverless-app', {
      cidr: '10.0.0.0/20',
      natGateways: 0,
      maxAzs: 2,
      enableDnsHostnames: true,
      enableDnsSupport: true,
      subnetConfiguration: [
        {
          cidrMask: 22,
          name: 'public',
          subnetType: ec2.SubnetType.PUBLIC,
        },
        {
          cidrMask: 22,
          name: 'private',
          subnetType: ec2.SubnetType.ISOLATED,
        },
      ],
    })

    // Allow Lambda access to RDS
    const publicSg = new ec2.SecurityGroup(this, 'public-sg', {
      vpc,
      securityGroupName: 'public-sg',
    })
    publicSg.addIngressRule(
      ec2.Peer.anyIpv4(),
      ec2.Port.tcp(5432),
      'Opening RDS to Lambda'
    )

    // RDS Postgres instance and its Subnet Group
    const subnetGroup = new rds.SubnetGroup(this, 'rds-subnet-group', {
      vpc,
      subnetGroupName: 'rds-subnet-group',
      vpcSubnets: { subnetType: ec2.SubnetType.PUBLIC },
      removalPolicy: cdk.RemovalPolicy.DESTROY,
      description: 'Subnet group for RDS Postgres',
    })

    new rds.DatabaseInstance(this, 'rds-instance', {
      vpc,
      subnetGroup,
      engine: rds.DatabaseInstanceEngine.postgres({
        version: rds.PostgresEngineVersion.VER_12_7,
      }),
      instanceType: ec2.InstanceType.of(
        ec2.InstanceClass.T2,
        ec2.InstanceSize.MICRO
      ),
      allocatedStorage: 20,
      securityGroups: [publicSg],
      databaseName: 'prisma',
      publiclyAccessible: true,
      removalPolicy: cdk.RemovalPolicy.DESTROY,
      autoMinorVersionUpgrade: false,
    })
  }
}
