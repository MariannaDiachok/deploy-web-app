"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductStack = void 0;
const lambda = require("aws-cdk-lib/aws-lambda");
const cdk = require("aws-cdk-lib");
const path = require("path");
const aws_apigateway_1 = require("aws-cdk-lib/aws-apigateway");
const aws_lambda_nodejs_1 = require("aws-cdk-lib/aws-lambda-nodejs");
class ProductStack extends cdk.Stack {
    constructor(scope, id, props) {
        super(scope, id, props);
        const lambdaProductList = new aws_lambda_nodejs_1.NodejsFunction(this, 'lambda-product-list', {
            functionName: 'getProductList',
            runtime: lambda.Runtime.NODEJS_18_X,
            memorySize: 1024,
            timeout: cdk.Duration.seconds(5),
            handler: 'handler.getProductList',
            entry: path.resolve(__dirname, './lambda/handler.ts'),
        });
        const lambdaProductById = new aws_lambda_nodejs_1.NodejsFunction(this, 'lambda-product-by-id', {
            functionName: 'getProductById',
            runtime: lambda.Runtime.NODEJS_18_X,
            memorySize: 1024,
            timeout: cdk.Duration.seconds(5),
            handler: 'handler.getProductById',
            entry: path.resolve(__dirname, './lambda/handler.ts'),
        });
        const productApi = new aws_apigateway_1.RestApi(this, "product-api", {
            restApiName: "Products API Gateway",
            description: "This API serves the Lambda functions."
        });
        const getProductListIntegration = new aws_apigateway_1.LambdaIntegration(lambdaProductList, {
            integrationResponses: [
                {
                    statusCode: '200',
                    responseParameters: {
                        'method.response.header.Access-Control-Allow-Headers': "'Content-Type'",
                        'method.response.header.Access-Control-Allow-Origin': "'*'",
                        'method.response.header.Access-Control-Allow-Credentials': "'false'",
                    },
                }
            ],
            proxy: false,
        });
        const productListResource = productApi.root.addResource("products");
        productListResource.addMethod('GET', getProductListIntegration, {
            methodResponses: [{
                    statusCode: '200',
                    responseParameters: {
                        'method.response.header.Access-Control-Allow-Headers': true,
                        'method.response.header.Access-Control-Allow-Origin': true,
                    },
                }],
        });
        productListResource.addCorsPreflight({
            allowOrigins: ['https://dz48wttf1vpfs.cloudfront.net'],
            allowMethods: ['GET', 'OPTIONS'],
            allowHeaders: ['Content-Type'],
        });
        const getProductByIdIntegration = new aws_apigateway_1.LambdaIntegration(lambdaProductById, {
            integrationResponses: [
                {
                    statusCode: '200',
                    responseParameters: {
                        'method.response.header.Access-Control-Allow-Headers': "'Content-Type'",
                        'method.response.header.Access-Control-Allow-Origin': "'*'",
                    },
                    responseTemplates: {
                        'application/json': "$util.parseJson($input.json('$.body'))"
                    }
                }
            ],
            proxy: false,
        });
        const productByIdResource = productListResource.addResource('{id}');
        productByIdResource.addMethod('GET', getProductByIdIntegration, {
            methodResponses: [{
                    statusCode: '200',
                    responseParameters: {
                        'method.response.header.Access-Control-Allow-Headers': true,
                        'method.response.header.Access-Control-Allow-Origin': true,
                    },
                }],
        });
        productByIdResource.addCorsPreflight({
            allowOrigins: ['https://dz48wttf1vpfs.cloudfront.net'],
            allowMethods: ['GET', 'OPTIONS'],
            allowHeaders: ['Content-Type'],
        });
    }
}
exports.ProductStack = ProductStack;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC1zdGFjay5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInByb2R1Y3Qtc3RhY2sudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsaURBQWlEO0FBQ2pELG1DQUFtQztBQUNuQyw2QkFBNkI7QUFFN0IsK0RBQXdFO0FBQ3hFLHFFQUErRDtBQUUvRCxNQUFhLFlBQWEsU0FBUSxHQUFHLENBQUMsS0FBSztJQUN6QyxZQUFZLEtBQWdCLEVBQUUsRUFBVSxFQUFFLEtBQXNCO1FBQzlELEtBQUssQ0FBQyxLQUFLLEVBQUUsRUFBRSxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBRXhCLE1BQU0saUJBQWlCLEdBQUcsSUFBSSxrQ0FBYyxDQUFDLElBQUksRUFBRSxxQkFBcUIsRUFBRTtZQUN0RSxZQUFZLEVBQUUsZ0JBQWdCO1lBQzlCLE9BQU8sRUFBRSxNQUFNLENBQUMsT0FBTyxDQUFDLFdBQVc7WUFDbkMsVUFBVSxFQUFFLElBQUk7WUFDaEIsT0FBTyxFQUFFLEdBQUcsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztZQUNoQyxPQUFPLEVBQUUsd0JBQXdCO1lBQ2pDLEtBQUssRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsRUFBRSxxQkFBcUIsQ0FBQztTQUN0RCxDQUFDLENBQUM7UUFFTCxNQUFNLGlCQUFpQixHQUFHLElBQUksa0NBQWMsQ0FBQyxJQUFJLEVBQUUsc0JBQXNCLEVBQUU7WUFDekUsWUFBWSxFQUFFLGdCQUFnQjtZQUM5QixPQUFPLEVBQUUsTUFBTSxDQUFDLE9BQU8sQ0FBQyxXQUFXO1lBQ25DLFVBQVUsRUFBRSxJQUFJO1lBQ2hCLE9BQU8sRUFBRSxHQUFHLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7WUFDaEMsT0FBTyxFQUFFLHdCQUF3QjtZQUNqQyxLQUFLLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLEVBQUUscUJBQXFCLENBQUM7U0FDdEQsQ0FBQyxDQUFDO1FBRUgsTUFBTSxVQUFVLEdBQUcsSUFBSSx3QkFBTyxDQUFDLElBQUksRUFBRSxhQUFhLEVBQUU7WUFDbEQsV0FBVyxFQUFFLHNCQUFzQjtZQUNuQyxXQUFXLEVBQUUsdUNBQXVDO1NBQ3JELENBQUMsQ0FBQztRQUVILE1BQU0seUJBQXlCLEdBQUcsSUFBSSxrQ0FBaUIsQ0FBQyxpQkFBaUIsRUFBRTtZQUN6RSxvQkFBb0IsRUFBRTtnQkFDcEI7b0JBQ0UsVUFBVSxFQUFFLEtBQUs7b0JBQ2pCLGtCQUFrQixFQUFFO3dCQUNsQixxREFBcUQsRUFBRSxnQkFBZ0I7d0JBQ3ZFLG9EQUFvRCxFQUFFLEtBQUs7d0JBQzNELHlEQUF5RCxFQUFFLFNBQVM7cUJBQ3JFO2lCQUNGO2FBQ0Y7WUFDRCxLQUFLLEVBQUUsS0FBSztTQUNiLENBQUMsQ0FBQztRQUVILE1BQU0sbUJBQW1CLEdBQUcsVUFBVSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUFDLENBQUM7UUFFcEUsbUJBQW1CLENBQUMsU0FBUyxDQUFDLEtBQUssRUFBRSx5QkFBeUIsRUFBRTtZQUM5RCxlQUFlLEVBQUUsQ0FBQztvQkFDaEIsVUFBVSxFQUFFLEtBQUs7b0JBQ2pCLGtCQUFrQixFQUFFO3dCQUNwQixxREFBcUQsRUFBRSxJQUFJO3dCQUMzRCxvREFBb0QsRUFBRSxJQUFJO3FCQUN6RDtpQkFDRixDQUFDO1NBQ0gsQ0FBQyxDQUFDO1FBQ0gsbUJBQW1CLENBQUMsZ0JBQWdCLENBQUM7WUFDbkMsWUFBWSxFQUFFLENBQUMsc0NBQXNDLENBQUM7WUFDdEQsWUFBWSxFQUFFLENBQUMsS0FBSyxFQUFFLFNBQVMsQ0FBQztZQUNoQyxZQUFZLEVBQUUsQ0FBQyxjQUFjLENBQUM7U0FDL0IsQ0FBQyxDQUFDO1FBRUgsTUFBTSx5QkFBeUIsR0FBRyxJQUFJLGtDQUFpQixDQUFDLGlCQUFpQixFQUFFO1lBQ3pFLG9CQUFvQixFQUFFO2dCQUNwQjtvQkFDRSxVQUFVLEVBQUUsS0FBSztvQkFDakIsa0JBQWtCLEVBQUU7d0JBQ2xCLHFEQUFxRCxFQUFFLGdCQUFnQjt3QkFDdkUsb0RBQW9ELEVBQUUsS0FBSztxQkFDNUQ7b0JBQ0QsaUJBQWlCLEVBQUU7d0JBQ2pCLGtCQUFrQixFQUFFLHdDQUF3QztxQkFDN0Q7aUJBQ0Y7YUFDRjtZQUNELEtBQUssRUFBRSxLQUFLO1NBQ2IsQ0FBQyxDQUFDO1FBQ0gsTUFBTSxtQkFBbUIsR0FBRyxtQkFBbUIsQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLENBQUM7UUFFcEUsbUJBQW1CLENBQUMsU0FBUyxDQUFDLEtBQUssRUFBRSx5QkFBeUIsRUFBRTtZQUM5RCxlQUFlLEVBQUUsQ0FBQztvQkFDaEIsVUFBVSxFQUFFLEtBQUs7b0JBQ2pCLGtCQUFrQixFQUFFO3dCQUNsQixxREFBcUQsRUFBRSxJQUFJO3dCQUMzRCxvREFBb0QsRUFBRSxJQUFJO3FCQUMzRDtpQkFDRixDQUFDO1NBQ0gsQ0FBQyxDQUFDO1FBQ0gsbUJBQW1CLENBQUMsZ0JBQWdCLENBQUM7WUFDbkMsWUFBWSxFQUFFLENBQUMsc0NBQXNDLENBQUM7WUFDdEQsWUFBWSxFQUFFLENBQUMsS0FBSyxFQUFFLFNBQVMsQ0FBQztZQUNoQyxZQUFZLEVBQUUsQ0FBQyxjQUFjLENBQUM7U0FDL0IsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztDQUNGO0FBMUZELG9DQTBGQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIGxhbWJkYSBmcm9tICdhd3MtY2RrLWxpYi9hd3MtbGFtYmRhJztcbmltcG9ydCAqIGFzIGNkayBmcm9tICdhd3MtY2RrLWxpYic7XG5pbXBvcnQgKiBhcyBwYXRoIGZyb20gJ3BhdGgnO1xuaW1wb3J0IHsgQ29uc3RydWN0IH0gZnJvbSAnY29uc3RydWN0cyc7XG5pbXBvcnQgeyBMYW1iZGFJbnRlZ3JhdGlvbiwgUmVzdEFwaSB9IGZyb20gJ2F3cy1jZGstbGliL2F3cy1hcGlnYXRld2F5JztcbmltcG9ydCB7IE5vZGVqc0Z1bmN0aW9uIH0gZnJvbSAnYXdzLWNkay1saWIvYXdzLWxhbWJkYS1ub2RlanMnO1xuXG5leHBvcnQgY2xhc3MgUHJvZHVjdFN0YWNrIGV4dGVuZHMgY2RrLlN0YWNrIHtcbiAgY29uc3RydWN0b3Ioc2NvcGU6IENvbnN0cnVjdCwgaWQ6IHN0cmluZywgcHJvcHM/OiBjZGsuU3RhY2tQcm9wcykge1xuICAgIHN1cGVyKHNjb3BlLCBpZCwgcHJvcHMpO1xuXG4gICAgY29uc3QgbGFtYmRhUHJvZHVjdExpc3QgPSBuZXcgTm9kZWpzRnVuY3Rpb24odGhpcywgJ2xhbWJkYS1wcm9kdWN0LWxpc3QnLCB7XG4gICAgICAgIGZ1bmN0aW9uTmFtZTogJ2dldFByb2R1Y3RMaXN0JyxcbiAgICAgICAgcnVudGltZTogbGFtYmRhLlJ1bnRpbWUuTk9ERUpTXzE4X1gsXG4gICAgICAgIG1lbW9yeVNpemU6IDEwMjQsXG4gICAgICAgIHRpbWVvdXQ6IGNkay5EdXJhdGlvbi5zZWNvbmRzKDUpLFxuICAgICAgICBoYW5kbGVyOiAnaGFuZGxlci5nZXRQcm9kdWN0TGlzdCcsXG4gICAgICAgIGVudHJ5OiBwYXRoLnJlc29sdmUoX19kaXJuYW1lLCAnLi9sYW1iZGEvaGFuZGxlci50cycpLFxuICAgICAgfSk7XG5cbiAgICBjb25zdCBsYW1iZGFQcm9kdWN0QnlJZCA9IG5ldyBOb2RlanNGdW5jdGlvbih0aGlzLCAnbGFtYmRhLXByb2R1Y3QtYnktaWQnLCB7XG4gICAgICBmdW5jdGlvbk5hbWU6ICdnZXRQcm9kdWN0QnlJZCcsXG4gICAgICBydW50aW1lOiBsYW1iZGEuUnVudGltZS5OT0RFSlNfMThfWCxcbiAgICAgIG1lbW9yeVNpemU6IDEwMjQsXG4gICAgICB0aW1lb3V0OiBjZGsuRHVyYXRpb24uc2Vjb25kcyg1KSxcbiAgICAgIGhhbmRsZXI6ICdoYW5kbGVyLmdldFByb2R1Y3RCeUlkJyxcbiAgICAgIGVudHJ5OiBwYXRoLnJlc29sdmUoX19kaXJuYW1lLCAnLi9sYW1iZGEvaGFuZGxlci50cycpLFxuICAgIH0pO1xuXG4gICAgY29uc3QgcHJvZHVjdEFwaSA9IG5ldyBSZXN0QXBpKHRoaXMsIFwicHJvZHVjdC1hcGlcIiwge1xuICAgICAgcmVzdEFwaU5hbWU6IFwiUHJvZHVjdHMgQVBJIEdhdGV3YXlcIixcbiAgICAgIGRlc2NyaXB0aW9uOiBcIlRoaXMgQVBJIHNlcnZlcyB0aGUgTGFtYmRhIGZ1bmN0aW9ucy5cIlxuICAgIH0pO1xuXG4gICAgY29uc3QgZ2V0UHJvZHVjdExpc3RJbnRlZ3JhdGlvbiA9IG5ldyBMYW1iZGFJbnRlZ3JhdGlvbihsYW1iZGFQcm9kdWN0TGlzdCwge1xuICAgICAgaW50ZWdyYXRpb25SZXNwb25zZXM6IFtcbiAgICAgICAge1xuICAgICAgICAgIHN0YXR1c0NvZGU6ICcyMDAnLFxuICAgICAgICAgIHJlc3BvbnNlUGFyYW1ldGVyczoge1xuICAgICAgICAgICAgJ21ldGhvZC5yZXNwb25zZS5oZWFkZXIuQWNjZXNzLUNvbnRyb2wtQWxsb3ctSGVhZGVycyc6IFwiJ0NvbnRlbnQtVHlwZSdcIixcbiAgICAgICAgICAgICdtZXRob2QucmVzcG9uc2UuaGVhZGVyLkFjY2Vzcy1Db250cm9sLUFsbG93LU9yaWdpbic6IFwiJyonXCIsXG4gICAgICAgICAgICAnbWV0aG9kLnJlc3BvbnNlLmhlYWRlci5BY2Nlc3MtQ29udHJvbC1BbGxvdy1DcmVkZW50aWFscyc6IFwiJ2ZhbHNlJ1wiLFxuICAgICAgICAgIH0sXG4gICAgICAgIH1cbiAgICAgIF0sXG4gICAgICBwcm94eTogZmFsc2UsXG4gICAgfSk7XG5cbiAgICBjb25zdCBwcm9kdWN0TGlzdFJlc291cmNlID0gcHJvZHVjdEFwaS5yb290LmFkZFJlc291cmNlKFwicHJvZHVjdHNcIik7XG5cbiAgICBwcm9kdWN0TGlzdFJlc291cmNlLmFkZE1ldGhvZCgnR0VUJywgZ2V0UHJvZHVjdExpc3RJbnRlZ3JhdGlvbiwge1xuICAgICAgbWV0aG9kUmVzcG9uc2VzOiBbe1xuICAgICAgICBzdGF0dXNDb2RlOiAnMjAwJyxcbiAgICAgICAgcmVzcG9uc2VQYXJhbWV0ZXJzOiB7XG4gICAgICAgICdtZXRob2QucmVzcG9uc2UuaGVhZGVyLkFjY2Vzcy1Db250cm9sLUFsbG93LUhlYWRlcnMnOiB0cnVlLFxuICAgICAgICAnbWV0aG9kLnJlc3BvbnNlLmhlYWRlci5BY2Nlc3MtQ29udHJvbC1BbGxvdy1PcmlnaW4nOiB0cnVlLFxuICAgICAgICB9LFxuICAgICAgfV0sXG4gICAgfSk7XG4gICAgcHJvZHVjdExpc3RSZXNvdXJjZS5hZGRDb3JzUHJlZmxpZ2h0KHtcbiAgICAgIGFsbG93T3JpZ2luczogWydodHRwczovL2R6NDh3dHRmMXZwZnMuY2xvdWRmcm9udC5uZXQnXSxcbiAgICAgIGFsbG93TWV0aG9kczogWydHRVQnLCAnT1BUSU9OUyddLFxuICAgICAgYWxsb3dIZWFkZXJzOiBbJ0NvbnRlbnQtVHlwZSddLFxuICAgIH0pO1xuXG4gICAgY29uc3QgZ2V0UHJvZHVjdEJ5SWRJbnRlZ3JhdGlvbiA9IG5ldyBMYW1iZGFJbnRlZ3JhdGlvbihsYW1iZGFQcm9kdWN0QnlJZCwge1xuICAgICAgaW50ZWdyYXRpb25SZXNwb25zZXM6IFtcbiAgICAgICAge1xuICAgICAgICAgIHN0YXR1c0NvZGU6ICcyMDAnLFxuICAgICAgICAgIHJlc3BvbnNlUGFyYW1ldGVyczoge1xuICAgICAgICAgICAgJ21ldGhvZC5yZXNwb25zZS5oZWFkZXIuQWNjZXNzLUNvbnRyb2wtQWxsb3ctSGVhZGVycyc6IFwiJ0NvbnRlbnQtVHlwZSdcIixcbiAgICAgICAgICAgICdtZXRob2QucmVzcG9uc2UuaGVhZGVyLkFjY2Vzcy1Db250cm9sLUFsbG93LU9yaWdpbic6IFwiJyonXCIsXG4gICAgICAgICAgfSxcbiAgICAgICAgICByZXNwb25zZVRlbXBsYXRlczoge1xuICAgICAgICAgICAgJ2FwcGxpY2F0aW9uL2pzb24nOiBcIiR1dGlsLnBhcnNlSnNvbigkaW5wdXQuanNvbignJC5ib2R5JykpXCJcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIF0sXG4gICAgICBwcm94eTogZmFsc2UsXG4gICAgfSk7XG4gICAgY29uc3QgcHJvZHVjdEJ5SWRSZXNvdXJjZSA9IHByb2R1Y3RMaXN0UmVzb3VyY2UuYWRkUmVzb3VyY2UoJ3tpZH0nKTtcblxuICAgIHByb2R1Y3RCeUlkUmVzb3VyY2UuYWRkTWV0aG9kKCdHRVQnLCBnZXRQcm9kdWN0QnlJZEludGVncmF0aW9uLCB7XG4gICAgICBtZXRob2RSZXNwb25zZXM6IFt7XG4gICAgICAgIHN0YXR1c0NvZGU6ICcyMDAnLFxuICAgICAgICByZXNwb25zZVBhcmFtZXRlcnM6IHtcbiAgICAgICAgICAnbWV0aG9kLnJlc3BvbnNlLmhlYWRlci5BY2Nlc3MtQ29udHJvbC1BbGxvdy1IZWFkZXJzJzogdHJ1ZSxcbiAgICAgICAgICAnbWV0aG9kLnJlc3BvbnNlLmhlYWRlci5BY2Nlc3MtQ29udHJvbC1BbGxvdy1PcmlnaW4nOiB0cnVlLFxuICAgICAgICB9LFxuICAgICAgfV0sXG4gICAgfSk7XG4gICAgcHJvZHVjdEJ5SWRSZXNvdXJjZS5hZGRDb3JzUHJlZmxpZ2h0KHtcbiAgICAgIGFsbG93T3JpZ2luczogWydodHRwczovL2R6NDh3dHRmMXZwZnMuY2xvdWRmcm9udC5uZXQnXSxcbiAgICAgIGFsbG93TWV0aG9kczogWydHRVQnLCAnT1BUSU9OUyddLFxuICAgICAgYWxsb3dIZWFkZXJzOiBbJ0NvbnRlbnQtVHlwZSddLFxuICAgIH0pO1xuICB9XG59XG4iXX0=