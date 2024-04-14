import { Construct } from 'constructs';
import * as cdk from 'aws-cdk-lib';
import { aws_s3 as s3, Stack, aws_s3_deployment, CfnOutput, aws_cloudfront as cloudFront, RemovalPolicy } from 'aws-cdk-lib';
import { BlockPublicAccess } from 'aws-cdk-lib/aws-s3';
import { S3Origin } from 'aws-cdk-lib/aws-cloudfront-origins';


const path = './resources/build/';


export class DeploymentService extends Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const hostingBucket = new s3.Bucket(this, 'FrontendBucket', {
      blockPublicAccess: BlockPublicAccess.BLOCK_ALL,
    });

    const distribution = new cloudFront.Distribution(this, 'CloudfrontDistribution', {
      defaultBehavior: {
          origin: new S3Origin(hostingBucket),
          viewerProtocolPolicy: cloudFront.ViewerProtocolPolicy.REDIRECT_TO_HTTPS,
      },
      defaultRootObject: 'index.html',
      errorResponses: [
          {
              httpStatus: 404,
              responseHttpStatus: 200,
              responsePagePath: '/index.html',
          },
      ],
  });

  new aws_s3_deployment.BucketDeployment(this, 'BucketDeployment', {
    sources: [aws_s3_deployment.Source.asset(path)],
    destinationBucket: hostingBucket,
    distribution,
    distributionPaths: ['/*'],
});

new CfnOutput(this, 'CloudFrontURL', {
  value: distribution.domainName,
  description: 'The distribution URL',
  exportName: 'CloudfrontURL',
});

new CfnOutput(this, 'BucketName', {
  value: hostingBucket.bucketName,
  description: 'The name of the S3 bucket',
  exportName: 'BucketName',
});
  }
}
