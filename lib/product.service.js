"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductStack = void 0;
const aws_cdk_lib_1 = require("aws-cdk-lib");
const aws_apigateway_1 = require("aws-cdk-lib/aws-apigateway");
const aws_lambda_nodejs_1 = require("aws-cdk-lib/aws-lambda-nodejs");
const path = require("path");
const lambda = require("aws-cdk-lib/aws-lambda");
class ProductStack extends aws_cdk_lib_1.Stack {
    constructor(scope, id, props) {
        super(scope, id, props);
        const lambdaProductsList = new aws_lambda_nodejs_1.NodejsFunction(this, 'lambda-product-list', {
            functionName: 'getProductList',
            entry: path.resolve(__dirname, '../src/products/products.ts'),
            runtime: lambda.Runtime.NODEJS_18_X,
            memorySize: 1024,
            timeout: aws_cdk_lib_1.Duration.seconds(5),
            handler: 'getProductList',
            bundling: {
                target: 'esnext'
            }
        });
        const lambdaProductsById = new aws_lambda_nodejs_1.NodejsFunction(this, 'lambda-product-by-id', {
            functionName: 'getProductById',
            entry: path.resolve(__dirname, '../src/products/products.ts'),
            runtime: lambda.Runtime.NODEJS_18_X,
            memorySize: 1024,
            timeout: aws_cdk_lib_1.Duration.seconds(5),
            handler: 'getProductById',
            bundling: {
                target: 'esnext'
            }
        });
        const productsApi = new aws_apigateway_1.RestApi(this, "products-api", {
            restApiName: "Products API Gateway",
            description: "This Products-API serves the Lambda functions."
        });
        const productsFromLambdaIntegration = new aws_apigateway_1.LambdaIntegration(lambdaProductsList, {
            integrationResponses: [
                {
                    statusCode: '200',
                    responseParameters: {
                        'method.response.header.Access-Control-Allow-Headers': "'Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token,X-Amz-User-Agent'",
                        'method.response.header.Access-Control-Allow-Origin': "'https://dz48wttf1vpfs.cloudfront.net'",
                        'method.response.header.Access-Control-Allow-Credentials': "'true'",
                        'method.response.header.Access-Control-Allow-Methods': "'OPTIONS,GET,PUT,POST,DELETE'",
                    },
                    responseTemplates: {
                        'application/json': "$util.parseJson($input.json('$.body'))"
                    }
                }
            ],
            proxy: false,
        });
        const productsResource = productsApi.root.addResource("products");
        productsResource.addMethod('GET', productsFromLambdaIntegration, {
            methodResponses: [{
                    statusCode: '200',
                    responseParameters: {
                        'method.response.header.Access-Control-Allow-Headers': true,
                        'method.response.header.Access-Control-Allow-Origin': true,
                        'method.response.header.Access-Control-Allow-Credentials': true,
                        'method.response.header.Access-Control-Allow-Methods': true,
                    }
                }],
        });
        productsResource.addCorsPreflight({
            allowOrigins: ['https://dz48wttf1vpfs.cloudfront.net'],
            allowMethods: ['GET', 'OPTIONS'],
            allowHeaders: ['Content-Type']
        });
        const productsByIdFromLambdaIntegration = new aws_apigateway_1.LambdaIntegration(lambdaProductsById, {
            integrationResponses: [
                {
                    statusCode: '200',
                    responseParameters: {
                        'method.response.header.Access-Control-Allow-Headers': "'Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token,X-Amz-User-Agent'",
                        'method.response.header.Access-Control-Allow-Origin': "'https://dz48wttf1vpfs.cloudfront.net'",
                        'method.response.header.Access-Control-Allow-Credentials': "'true'",
                        'method.response.header.Access-Control-Allow-Methods': "'OPTIONS,GET,PUT,POST,DELETE'",
                    },
                    responseTemplates: {
                        'application/json': "$util.parseJson($input.json('$.body'))"
                    }
                }
            ],
            proxy: false,
        });
        const productByIdResource = productsResource.addResource('{product_id}');
        productByIdResource.addMethod('GET', productsByIdFromLambdaIntegration, {
            methodResponses: [{
                    statusCode: '200',
                    responseParameters: {
                        'method.response.header.Access-Control-Allow-Headers': true,
                        'method.response.header.Access-Control-Allow-Origin': true,
                        'method.response.header.Access-Control-Allow-Credentials': true,
                        'method.response.header.Access-Control-Allow-Methods': true
                    }
                }]
        });
        productByIdResource.addCorsPreflight({
            allowOrigins: ['https://dz48wttf1vpfs.cloudfront.net'],
            allowMethods: ['GET', 'OPTIONS'],
            allowHeaders: ['Content-Type']
        });
    }
}
exports.ProductStack = ProductStack;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicHJvZHVjdC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLDZDQUEwRDtBQUMxRCwrREFBd0U7QUFDeEUscUVBQStEO0FBRS9ELDZCQUE2QjtBQUM3QixpREFBaUQ7QUFFakQsTUFBYSxZQUFhLFNBQVEsbUJBQUs7SUFDckMsWUFBWSxLQUFnQixFQUFFLEVBQVUsRUFBRSxLQUFrQjtRQUMxRCxLQUFLLENBQUMsS0FBSyxFQUFFLEVBQUUsRUFBRSxLQUFLLENBQUMsQ0FBQztRQUV4QixNQUFNLGtCQUFrQixHQUFHLElBQUksa0NBQWMsQ0FBQyxJQUFJLEVBQUUscUJBQXFCLEVBQUU7WUFDekUsWUFBWSxFQUFFLGdCQUFnQjtZQUM5QixLQUFLLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLEVBQUUsNkJBQTZCLENBQUM7WUFDN0QsT0FBTyxFQUFFLE1BQU0sQ0FBQyxPQUFPLENBQUMsV0FBVztZQUNuQyxVQUFVLEVBQUUsSUFBSTtZQUNoQixPQUFPLEVBQUUsc0JBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO1lBQzVCLE9BQU8sRUFBRSxnQkFBZ0I7WUFDekIsUUFBUSxFQUFFO2dCQUNSLE1BQU0sRUFBRSxRQUFRO2FBQ2pCO1NBQ0YsQ0FBQyxDQUFDO1FBRUgsTUFBTSxrQkFBa0IsR0FBRyxJQUFJLGtDQUFjLENBQUMsSUFBSSxFQUFFLHNCQUFzQixFQUFFO1lBQzFFLFlBQVksRUFBRSxnQkFBZ0I7WUFDOUIsS0FBSyxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxFQUFFLDZCQUE2QixDQUFDO1lBQzdELE9BQU8sRUFBRSxNQUFNLENBQUMsT0FBTyxDQUFDLFdBQVc7WUFDbkMsVUFBVSxFQUFFLElBQUk7WUFDaEIsT0FBTyxFQUFFLHNCQUFRLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztZQUM1QixPQUFPLEVBQUUsZ0JBQWdC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YWNrLCBEdXJhdGlvbiB9IGZyb20gJ2F3cy1jZGstbGliJztcbmltcG9ydCB7IExhbWJkYUludGVncmF0aW9uLCBSZXN0QXBpIH0gZnJvbSAnYXdzLWNkay1saWIvYXdzLWFwaWdhdGV3YXknO1xuaW1wb3J0IHsgTm9kZWpzRnVuY3Rpb24gfSBmcm9tICdhd3MtY2RrLWxpYi9hd3MtbGFtYmRhLW5vZGVqcyc7XG5pbXBvcnQgeyBDb25zdHJ1Y3QgfSBmcm9tICdjb25zdHJ1Y3RzJztcbmltcG9ydCAqIGFzIHBhdGggZnJvbSAncGF0aCc7XG5pbXBvcnQgKiBhcyBsYW1iZGEgZnJvbSAnYXdzLWNkay1saWIvYXdzLWxhbWJkYSc7XG5cbmV4cG9ydCBjbGFzcyBQcm9kdWN0U3RhY2sgZXh0ZW5kcyBTdGFjayB7XG4gIGNvbnN0cnVjdG9yKHNjb3BlOiBDb25zdHJ1Y3QsIGlkOiBzdHJpbmcsIHByb3BzPzogU3RhY2tQcm9wcykge1xuICAgIHN1cGVyKHNjb3BlLCBpZCwgcHJvcHMpO1xuXG4gICAgY29uc3QgbGFtYmRhUHJvZHVjdHNMaXN0ID0gbmV3IE5vZGVqc0Z1bmN0aW9uKHRoaXMsICdsYW1iZGEtcHJvZHVjdC1saXN0Jywge1xuICAgICAgZnVuY3Rpb25OYW1lOiAnZ2V0UHJvZHVjdExpc3QnLFxuICAgICAgZW50cnk6IHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsICcuLi9zcmMvcHJvZHVjdHMvcHJvZHVjdHMudHMnKSxcbiAgICAgIHJ1bnRpbWU6IGxhbWJkYS5SdW50aW1lLk5PREVKU18xOF9YLFxuICAgICAgbWVtb3J5U2l6ZTogMTAyNCxcbiAgICAgIHRpbWVvdXQ6IER1cmF0aW9uLnNlY29uZHMoNSksXG4gICAgICBoYW5kbGVyOiAnZ2V0UHJvZHVjdExpc3QnLFxuICAgICAgYnVuZGxpbmc6IHtcbiAgICAgICAgdGFyZ2V0OiAnZXNuZXh0J1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgY29uc3QgbGFtYmRhUHJvZHVjdHNCeUlkID0gbmV3IE5vZGVqc0Z1bmN0aW9uKHRoaXMsICdsYW1iZGEtcHJvZHVjdC1ieS1pZCcsIHtcbiAgICAgIGZ1bmN0aW9uTmFtZTogJ2dldFByb2R1Y3RCeUlkJyxcbiAgICAgIGVudHJ5OiBwYXRoLnJlc29sdmUoX19kaXJuYW1lLCAnLi4vc3JjL3Byb2R1Y3RzL3Byb2R1Y3RzLnRzJyksXG4gICAgICBydW50aW1lOiBsYW1iZGEuUnVudGltZS5OT0RFSlNfMThfWCxcbiAgICAgIG1lbW9yeVNpemU6IDEwMjQsXG4gICAgICB0aW1lb3V0OiBEdXJhdGlvbi5zZWNvbmRzKDUpLFxuICAgICAgaGFuZGxlcjogJ2dldFByb2R1Y3RCeUlkJyxcbiAgICAgIGJ1bmRsaW5nOiB7XG4gICAgICAgIHRhcmdldDogJ2VzbmV4dCdcbiAgICAgIH1cbiAgICB9KTtcblxuXG4gICAgY29uc3QgcHJvZHVjdHNBcGkgPSBuZXcgUmVzdEFwaSh0aGlzLCBcInByb2R1Y3RzLWFwaVwiLCB7XG4gICAgICByZXN0QXBpTmFtZTogXCJQcm9kdWN0cyBBUEkgR2F0ZXdheVwiLFxuICAgICAgZGVzY3JpcHRpb246IFwiVGhpcyBQcm9kdWN0cy1BUEkgc2VydmVzIHRoZSBMYW1iZGEgZnVuY3Rpb25zLlwiXG4gICAgfSk7XG5cbiAgICBjb25zdCBwcm9kdWN0c0Zyb21MYW1iZGFJbnRlZ3JhdGlvbiA9IG5ldyBMYW1iZGFJbnRlZ3JhdGlvbihsYW1iZGFQcm9kdWN0c0xpc3QsIHtcblxuICAgICAgaW50ZWdyYXRpb25SZXNwb25zZXM6IFtcbiAgICAgICAge1xuICAgICAgICAgIHN0YXR1c0NvZGU6ICcyMDAnLFxuICAgICAgICAgIHJlc3BvbnNlUGFyYW1ldGVyczoge1xuICAgICAgICAgICAgJ21ldGhvZC5yZXNwb25zZS5oZWFkZXIuQWNjZXNzLUNvbnRyb2wtQWxsb3ctSGVhZGVycyc6IFwiJ0NvbnRlbnQtVHlwZSxYLUFtei1EYXRlLEF1dGhvcml6YXRpb24sWC1BcGktS2V5LFgtQW16LVNlY3VyaXR5LVRva2VuLFgtQW16LVVzZXItQWdlbnQnXCIsXG4gICAgICAgICAgICAnbWV0aG9kLnJlc3BvbnNlLmhlYWRlci5BY2Nlc3MtQ29udHJvbC1BbGxvdy1PcmlnaW4nOiBcIidodHRwczovL2R6NDh3dHRmMXZwZnMuY2xvdWRmcm9udC5uZXQnXCIsXG4gICAgICAgICAgICAnbWV0aG9kLnJlc3BvbnNlLmhlYWRlci5BY2Nlc3MtQ29udHJvbC1BbGxvdy1DcmVkZW50aWFscyc6IFwiJ3RydWUnXCIsXG4gICAgICAgICAgICAnbWV0aG9kLnJlc3BvbnNlLmhlYWRlci5BY2Nlc3MtQ29udHJvbC1BbGxvdy1NZXRob2RzJzogXCInT1BUSU9OUyxHRVQsUFVULFBPU1QsREVMRVRFJ1wiLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgcmVzcG9uc2VUZW1wbGF0ZXM6IHtcbiAgICAgICAgICAgICdhcHBsaWNhdGlvbi9qc29uJzogXCIkdXRpbC5wYXJzZUpzb24oJGlucHV0Lmpzb24oJyQuYm9keScpKVwiXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICBdLFxuICAgICAgcHJveHk6IGZhbHNlLFxuICAgIH0pO1xuXG4gICAgY29uc3QgcHJvZHVjdHNSZXNvdXJjZSA9IHByb2R1Y3RzQXBpLnJvb3QuYWRkUmVzb3VyY2UoXCJwcm9kdWN0c1wiKTtcblxuICAgIHByb2R1Y3RzUmVzb3VyY2UuYWRkTWV0aG9kKCdHRVQnLCBwcm9kdWN0c0Zyb21MYW1iZGFJbnRlZ3JhdGlvbiwge1xuICAgICAgbWV0aG9kUmVzcG9uc2VzOiBbe1xuICAgICAgICBzdGF0dXNDb2RlOiAnMjAwJyxcbiAgICAgICAgcmVzcG9uc2VQYXJhbWV0ZXJzOiB7XG4gICAgICAgICAgJ21ldGhvZC5yZXNwb25zZS5oZWFkZXIuQWNjZXNzLUNvbnRyb2wtQWxsb3ctSGVhZGVycyc6IHRydWUsXG4gICAgICAgICAgJ21ldGhvZC5yZXNwb25zZS5oZWFkZXIuQWNjZXNzLUNvbnRyb2wtQWxsb3ctT3JpZ2luJzogdHJ1ZSxcbiAgICAgICAgICAnbWV0aG9kLnJlc3BvbnNlLmhlYWRlci5BY2Nlc3MtQ29udHJvbC1BbGxvdy1DcmVkZW50aWFscyc6IHRydWUsXG4gICAgICAgICAgJ21ldGhvZC5yZXNwb25zZS5oZWFkZXIuQWNjZXNzLUNvbnRyb2wtQWxsb3ctTWV0aG9kcyc6IHRydWUsXG4gICAgICAgIH1cbiAgICAgIH1dLFxuICAgIH0pO1xuXG4gICAgcHJvZHVjdHNSZXNvdXJjZS5hZGRDb3JzUHJlZmxpZ2h0KHtcbiAgICAgIGFsbG93T3JpZ2luczogWydodHRwczovL2R6NDh3dHRmMXZwZnMuY2xvdWRmcm9udC5uZXQnXSxcbiAgICAgIGFsbG93TWV0aG9kczogWydHRVQnLCAnT1BUSU9OUyddLFxuICAgICAgYWxsb3dIZWFkZXJzOiBbJ0NvbnRlbnQtVHlwZSddXG4gICAgfSk7XG5cbiAgICBjb25zdCBwcm9kdWN0c0J5SWRGcm9tTGFtYmRhSW50ZWdyYXRpb24gPSBuZXcgTGFtYmRhSW50ZWdyYXRpb24obGFtYmRhUHJvZHVjdHNCeUlkLCB7XG4gICAgICBpbnRlZ3JhdGlvblJlc3BvbnNlczogW1xuICAgICAgICB7XG4gICAgICAgICAgc3RhdHVzQ29kZTogJzIwMCcsXG4gICAgICAgICAgcmVzcG9uc2VQYXJhbWV0ZXJzOiB7XG4gICAgICAgICAgICAnbWV0aG9kLnJlc3BvbnNlLmhlYWRlci5BY2Nlc3MtQ29udHJvbC1BbGxvdy1IZWFkZXJzJzogXCInQ29udGVudC1UeXBlLFgtQW16LURhdGUsQXV0aG9yaXphdGlvbixYLUFwaS1LZXksWC1BbXotU2VjdXJpdHktVG9rZW4sWC1BbXotVXNlci1BZ2VudCdcIixcbiAgICAgICAgICAgICdtZXRob2QucmVzcG9uc2UuaGVhZGVyLkFjY2Vzcy1Db250cm9sLUFsbG93LU9yaWdpbic6IFwiJ2h0dHBzOi8vZHo0OHd0dGYxdnBmcy5jbG91ZGZyb250Lm5ldCdcIixcbiAgICAgICAgICAgICdtZXRob2QucmVzcG9uc2UuaGVhZGVyLkFjY2Vzcy1Db250cm9sLUFsbG93LUNyZWRlbnRpYWxzJzogXCIndHJ1ZSdcIixcbiAgICAgICAgICAgICdtZXRob2QucmVzcG9uc2UuaGVhZGVyLkFjY2Vzcy1Db250cm9sLUFsbG93LU1ldGhvZHMnOiBcIidPUFRJT05TLEdFVCxQVVQsUE9TVCxERUxFVEUnXCIsXG4gICAgICAgICAgfSxcbiAgICAgICAgICByZXNwb25zZVRlbXBsYXRlczoge1xuICAgICAgICAgICAgJ2FwcGxpY2F0aW9uL2pzb24nOiBcIiR1dGlsLnBhcnNlSnNvbigkaW5wdXQuanNvbignJC5ib2R5JykpXCJcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIF0sXG4gICAgICBwcm94eTogZmFsc2UsXG4gICAgfSk7XG5cbiAgICBjb25zdCBwcm9kdWN0QnlJZFJlc291cmNlID0gcHJvZHVjdHNSZXNvdXJjZS5hZGRSZXNvdXJjZSgne3Byb2R1Y3RfaWR9JylcbiAgICBwcm9kdWN0QnlJZFJlc291cmNlLmFkZE1ldGhvZCgnR0VUJywgcHJvZHVjdHNCeUlkRnJvbUxhbWJkYUludGVncmF0aW9uLCB7XG4gICAgICBtZXRob2RSZXNwb25zZXM6IFt7XG4gICAgICAgIHN0YXR1c0NvZGU6ICcyMDAnLFxuICAgICAgICByZXNwb25zZVBhcmFtZXRlcnM6IHtcbiAgICAgICAgICAnbWV0aG9kLnJlc3BvbnNlLmhlYWRlci5BY2Nlc3MtQ29udHJvbC1BbGxvdy1IZWFkZXJzJzogdHJ1ZSxcbiAgICAgICAgICAnbWV0aG9kLnJlc3BvbnNlLmhlYWRlci5BY2Nlc3MtQ29udHJvbC1BbGxvdy1PcmlnaW4nOiB0cnVlLFxuICAgICAgICAgICdtZXRob2QucmVzcG9uc2UuaGVhZGVyLkFjY2Vzcy1Db250cm9sLUFsbG93LUNyZWRlbnRpYWxzJzogdHJ1ZSxcbiAgICAgICAgICAnbWV0aG9kLnJlc3BvbnNlLmhlYWRlci5BY2Nlc3MtQ29udHJvbC1BbGxvdy1NZXRob2RzJzogdHJ1ZVxuICAgICAgICB9XG4gICAgICB9XVxuICAgIH0pXG5cbiAgICBwcm9kdWN0QnlJZFJlc291cmNlLmFkZENvcnNQcmVmbGlnaHQoe1xuICAgICAgYWxsb3dPcmlnaW5zOiBbJ2h0dHBzOi8vZHo0OHd0dGYxdnBmcy5jbG91ZGZyb250Lm5ldCddLFxuICAgICAgYWxsb3dNZXRob2RzOiBbJ0dFVCcsICdPUFRJT05TJ10sXG4gICAgICBhbGxvd0hlYWRlcnM6IFsnQ29udGVudC1UeXBlJ11cbiAgICB9KTtcbiAgfVxufVxuIl19