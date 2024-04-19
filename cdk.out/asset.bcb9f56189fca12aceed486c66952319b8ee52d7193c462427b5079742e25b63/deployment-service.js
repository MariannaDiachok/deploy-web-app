"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeploymentService = void 0;
const aws_cdk_lib_1 = require("aws-cdk-lib");
const aws_s3_1 = require("aws-cdk-lib/aws-s3");
const aws_cloudfront_origins_1 = require("aws-cdk-lib/aws-cloudfront-origins");
const path = './resources/build/';
class DeploymentService extends aws_cdk_lib_1.Stack {
    constructor(scope, id, props) {
        super(scope, id, props);
        const hostingBucket = new aws_cdk_lib_1.aws_s3.Bucket(this, 'FrontendBucket', {
            blockPublicAccess: aws_s3_1.BlockPublicAccess.BLOCK_ALL,
        });
        const distribution = new aws_cdk_lib_1.aws_cloudfront.Distribution(this, 'CloudfrontDistribution', {
            defaultBehavior: {
                origin: new aws_cloudfront_origins_1.S3Origin(hostingBucket),
                viewerProtocolPolicy: aws_cdk_lib_1.aws_cloudfront.ViewerProtocolPolicy.REDIRECT_TO_HTTPS,
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
        new aws_cdk_lib_1.aws_s3_deployment.BucketDeployment(this, 'BucketDeployment', {
            sources: [aws_cdk_lib_1.aws_s3_deployment.Source.asset(path)],
            destinationBucket: hostingBucket,
            distribution,
            distributionPaths: ['/*'],
        });
        new aws_cdk_lib_1.CfnOutput(this, 'CloudFrontURL', {
            value: distribution.domainName,
            description: 'The distribution URL',
            exportName: 'CloudfrontURL',
        });
        new aws_cdk_lib_1.CfnOutput(this, 'BucketName', {
            value: hostingBucket.bucketName,
            description: 'The name of the S3 bucket',
            exportName: 'BucketName',
        });
    }
}
exports.DeploymentService = DeploymentService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVwbG95bWVudC1zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZGVwbG95bWVudC1zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUVBLDZDQUE2SDtBQUM3SCwrQ0FBdUQ7QUFDdkQsK0VBQThEO0FBRzlELE1BQU0sSUFBSSxHQUFHLG9CQUFvQixDQUFDO0FBR2xDLE1BQWEsaUJBQWtCLFNBQVEsbUJBQUs7SUFDMUMsWUFBWSxLQUFnQixFQUFFLEVBQVUsRUFBRSxLQUFzQjtRQUM5RCxLQUFLLENBQUMsS0FBSyxFQUFFLEVBQUUsRUFBRSxLQUFLLENBQUMsQ0FBQztRQUV4QixNQUFNLGFBQWEsR0FBRyxJQUFJLG9CQUFFLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxnQkFBZ0IsRUFBRTtZQUMxRCxpQkFBaUIsRUFBRSwwQkFBaUIsQ0FBQyxTQUFTO1NBQy9DLENBQUMsQ0FBQztRQUVILE1BQU0sWUFBWSxHQUFHLElBQUksNEJBQVUsQ0FBQyxZQUFZLENBQUMsSUFBSSxFQUFFLHdCQUF3QixFQUFFO1lBQy9FLGVBQWUsRUFBRTtnQkFDYixNQUFNLEVBQUUsSUFBSSxpQ0FBUSxDQUFDLGFBQWEsQ0FBQztnQkFDbkMsb0JBQW9CLEVBQUUsNEJBQVUsQ0FBQyxvQkFBb0IsQ0FBQyxpQkFBaUI7YUFDMUU7WUFDRCxpQkFBaUIsRUFBRSxZQUFZO1lBQy9CLGNBQWMsRUFBRTtnQkFDWjtvQkFDSSxVQUFVLEVBQUUsR0FBRztvQkFDZixrQkFBa0IsRUFBRSxHQUFHO29CQUN2QixnQkFBZ0IsRUFBRSxhQUFhO2lCQUNsQzthQUNKO1NBQ0osQ0FBQyxDQUFDO1FBRUgsSUFBSSwrQkFBaUIsQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLEVBQUUsa0JBQWtCLEVBQUU7WUFDL0QsT0FBTyxFQUFFLENBQUMsK0JBQWlCLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUMvQyxpQkFBaUIsRUFBRSxhQUFhO1lBQ2hDLFlBQVk7WUFDWixpQkFBaUIsRUFBRSxDQUFDLElBQUksQ0FBQztTQUM1QixDQUFDLENBQUM7UUFFSCxJQUFJLHVCQUFTLENBQUMsSUFBSSxFQUFFLGVBQWUsRUFBRTtZQUNuQyxLQUFLLEVBQUUsWUFBWSxDQUFDLFVBQVU7WUFDOUIsV0FBVyxFQUFFLHNCQUFzQjtZQUNuQyxVQUFVLEVBQUUsZUFBZTtTQUM1QixDQUFDLENBQUM7UUFFSCxJQUFJLHVCQUFTLENBQUMsSUFBSSxFQUFFLFlBQVksRUFBRTtZQUNoQyxLQUFLLEVBQUUsYUFBYSxDQUFDLFVBQVU7WUFDL0IsV0FBVyxFQUFFLDJCQUEyQjtZQUN4QyxVQUFVLEVBQUUsWUFBWTtTQUN6QixDQUFDLENBQUM7SUFDRCxDQUFDO0NBQ0Y7QUExQ0QsOENBMENDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29uc3RydWN0IH0gZnJvbSAnY29uc3RydWN0cyc7XG5pbXBvcnQgKiBhcyBjZGsgZnJvbSAnYXdzLWNkay1saWInO1xuaW1wb3J0IHsgYXdzX3MzIGFzIHMzLCBTdGFjaywgYXdzX3MzX2RlcGxveW1lbnQsIENmbk91dHB1dCwgYXdzX2Nsb3VkZnJvbnQgYXMgY2xvdWRGcm9udCwgUmVtb3ZhbFBvbGljeSB9IGZyb20gJ2F3cy1jZGstbGliJztcbmltcG9ydCB7IEJsb2NrUHVibGljQWNjZXNzIH0gZnJvbSAnYXdzLWNkay1saWIvYXdzLXMzJztcbmltcG9ydCB7IFMzT3JpZ2luIH0gZnJvbSAnYXdzLWNkay1saWIvYXdzLWNsb3VkZnJvbnQtb3JpZ2lucyc7XG5cblxuY29uc3QgcGF0aCA9ICcuL3Jlc291cmNlcy9idWlsZC8nO1xuXG5cbmV4cG9ydCBjbGFzcyBEZXBsb3ltZW50U2VydmljZSBleHRlbmRzIFN0YWNrIHtcbiAgY29uc3RydWN0b3Ioc2NvcGU6IENvbnN0cnVjdCwgaWQ6IHN0cmluZywgcHJvcHM/OiBjZGsuU3RhY2tQcm9wcykge1xuICAgIHN1cGVyKHNjb3BlLCBpZCwgcHJvcHMpO1xuXG4gICAgY29uc3QgaG9zdGluZ0J1Y2tldCA9IG5ldyBzMy5CdWNrZXQodGhpcywgJ0Zyb250ZW5kQnVja2V0Jywge1xuICAgICAgYmxvY2tQdWJsaWNBY2Nlc3M6IEJsb2NrUHVibGljQWNjZXNzLkJMT0NLX0FMTCxcbiAgICB9KTtcblxuICAgIGNvbnN0IGRpc3RyaWJ1dGlvbiA9IG5ldyBjbG91ZEZyb250LkRpc3RyaWJ1dGlvbih0aGlzLCAnQ2xvdWRmcm9udERpc3RyaWJ1dGlvbicsIHtcbiAgICAgIGRlZmF1bHRCZWhhdmlvcjoge1xuICAgICAgICAgIG9yaWdpbjogbmV3IFMzT3JpZ2luKGhvc3RpbmdCdWNrZXQpLFxuICAgICAgICAgIHZpZXdlclByb3RvY29sUG9saWN5OiBjbG91ZEZyb250LlZpZXdlclByb3RvY29sUG9saWN5LlJFRElSRUNUX1RPX0hUVFBTLFxuICAgICAgfSxcbiAgICAgIGRlZmF1bHRSb290T2JqZWN0OiAnaW5kZXguaHRtbCcsXG4gICAgICBlcnJvclJlc3BvbnNlczogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgICAgaHR0cFN0YXR1czogNDA0LFxuICAgICAgICAgICAgICByZXNwb25zZUh0dHBTdGF0dXM6IDIwMCxcbiAgICAgICAgICAgICAgcmVzcG9uc2VQYWdlUGF0aDogJy9pbmRleC5odG1sJyxcbiAgICAgICAgICB9LFxuICAgICAgXSxcbiAgfSk7XG5cbiAgbmV3IGF3c19zM19kZXBsb3ltZW50LkJ1Y2tldERlcGxveW1lbnQodGhpcywgJ0J1Y2tldERlcGxveW1lbnQnLCB7XG4gICAgc291cmNlczogW2F3c19zM19kZXBsb3ltZW50LlNvdXJjZS5hc3NldChwYXRoKV0sXG4gICAgZGVzdGluYXRpb25CdWNrZXQ6IGhvc3RpbmdCdWNrZXQsXG4gICAgZGlzdHJpYnV0aW9uLFxuICAgIGRpc3RyaWJ1dGlvblBhdGhzOiBbJy8qJ10sXG59KTtcblxubmV3IENmbk91dHB1dCh0aGlzLCAnQ2xvdWRGcm9udFVSTCcsIHtcbiAgdmFsdWU6IGRpc3RyaWJ1dGlvbi5kb21haW5OYW1lLFxuICBkZXNjcmlwdGlvbjogJ1RoZSBkaXN0cmlidXRpb24gVVJMJyxcbiAgZXhwb3J0TmFtZTogJ0Nsb3VkZnJvbnRVUkwnLFxufSk7XG5cbm5ldyBDZm5PdXRwdXQodGhpcywgJ0J1Y2tldE5hbWUnLCB7XG4gIHZhbHVlOiBob3N0aW5nQnVja2V0LmJ1Y2tldE5hbWUsXG4gIGRlc2NyaXB0aW9uOiAnVGhlIG5hbWUgb2YgdGhlIFMzIGJ1Y2tldCcsXG4gIGV4cG9ydE5hbWU6ICdCdWNrZXROYW1lJyxcbn0pO1xuICB9XG59XG4iXX0=