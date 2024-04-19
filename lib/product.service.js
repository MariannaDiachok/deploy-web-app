"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductStack = void 0;
const lambda = require("aws-cdk-lib/aws-lambda");
const cdk = require("aws-cdk-lib");
const path = require("path");
const apigateway = require("aws-cdk-lib/aws-apigateway");
class ProductStack extends cdk.Stack {
    constructor(scope, id, props) {
        super(scope, id, props);
        const lambdaFunction = new lambda.Function(this, 'lambda-function', {
            runtime: lambda.Runtime.NODEJS_20_X,
            memorySize: 1024,
            timeout: cdk.Duration.seconds(5),
            handler: 'handler.main',
            code: lambda.Code.fromAsset(path.join(__dirname, './lambda')),
        });
        const api = new apigateway.RestApi(this, "product-api", {
            restApiName: "Products API Gateway",
            description: "This API serves the Lambda functions."
        });
        const getProductsList = new apigateway.LambdaIntegration(lambdaFunction, {
            requestTemplates: {
                "application/json": `{ "message": "$input.params('message')" }`
            },
            integrationResponses: [
                {
                    statusCode: '200',
                    responseParameters: {
                        'method.response.header.Access-Control-Allow-Headers': "'Content-Type'",
                        'method.response.header.Access-Control-Allow-Origin': "'https://dz48wttf1vpfs.cloudfront.net'",
                    },
                    responseTemplates: {
                        'application/json': "$util.parseJson($input.json('$.body'))"
                    }
                }
            ],
            proxy: false,
        });
        const productsListResource = api.root.addResource("products");
        productsListResource.addMethod('GET', getProductsList, {
            methodResponses: [{ statusCode: '200' }]
        });
        productsListResource.addCorsPreflight({
            allowOrigins: ['https://dz48wttf1vpfs.cloudfront.net'],
            allowMethods: ['GET', 'OPTIONS'],
            allowHeaders: ['Content-Type'],
        });
        const getProductById = new apigateway.LambdaIntegration(lambdaFunction, {
            integrationResponses: [
                {
                    statusCode: '200',
                    responseParameters: {
                        'method.response.header.Access-Control-Allow-Headers': "'Content-Type'",
                        'method.response.header.Access-Control-Allow-Origin': "'https://dz48wttf1vpfs.cloudfront.net'",
                    },
                    responseTemplates: {
                        'application/json': "$util.parseJson($input.json('$.body'))"
                    }
                }
            ],
            proxy: false,
        });
        const productResource = productsListResource.addResource('{id}');
        productResource.addMethod('GET', getProductById, {
            methodResponses: [{ statusCode: '200' }]
        });
    }
}
exports.ProductStack = ProductStack;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicHJvZHVjdC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLGlEQUFpRDtBQUNqRCxtQ0FBbUM7QUFDbkMsNkJBQTZCO0FBRTdCLHlEQUF5RDtBQUV6RCxNQUFhLFlBQWEsU0FBUSxHQUFHLENBQUMsS0FBSztJQUN6QyxZQUFZLEtBQWdCLEVBQUUsRUFBVSxFQUFFLEtBQXNCO1FBQzlELEtBQUssQ0FBQyxLQUFLLEVBQUUsRUFBRSxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBRXhCLE1BQU0sY0FBYyxHQUFHLElBQUksTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsaUJBQWlCLEVBQUU7WUFDaEUsT0FBTyxFQUFFLE1BQU0sQ0FBQyxPQUFPLENBQUMsV0FBVztZQUNuQyxVQUFVLEVBQUUsSUFBSTtZQUNoQixPQUFPLEVBQUUsR0FBRyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO1lBQ2hDLE9BQU8sRUFBRSxjQUFjO1lBQ3ZCLElBQUksRUFBRSxNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxVQUFVLENBQUMsQ0FBQztTQUM5RCxDQUFDLENBQUM7UUFFSCxNQUFNLEdBQUcsR0FBRyxJQUFJLFVBQVUsQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLGFBQWEsRUFBRTtZQUN0RCxXQUFXLEVBQUUsc0JBQXNCO1lBQ25DLFdBQVcsRUFBRSx1Q0FBdUM7U0FDckQsQ0FBQyxDQUFDO1FBRUgsTUFBTSxlQUFlLEdBQUcsSUFBSSxVQUFVLENBQUMsaUJBQWlCLENBQUMsY0FBYyxFQUFFO1lBQ3ZFLGdCQUFnQixFQUFFO2dCQUNkLGtCQUFrQixFQUNoQiwyQ0FBMkM7YUFDOUM7WUFDRCxvQkFBb0IsRUFBRTtnQkFDcEI7b0JBQ0UsVUFBVSxFQUFFLEtBQUs7b0JBQ2pCLGtCQUFrQixFQUFFO3dCQUNsQixxREFBcUQsRUFBRSxnQkFBZ0I7d0JBQ3ZFLG9EQUFvRCxFQUFFLHdDQUF3Qzt3QkFDOUYscURBQXFELEVBQUUsK0JBQStCO3FCQUN2RjtvQkFDRCxpQkFBaUIsRUFBRTt3QkFDakIsa0JBQWtCLEVBQUUsd0NBQXdDO3FCQUM3RDtpQkFDRjthQUNGO1lBQ0gsS0FBSyxFQUFFLEtBQUs7U0FDYixDQUFDLENBQUM7UUFDSCxNQUFNLG9CQUFvQixHQUFHLEdBQUcsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQzlELG9CQUFvQixDQUFDLFNBQVMsQ0FBQyxLQUFLLEVBQUUsZUFBZSxFQUFFO1lBQ3JELGVBQWUsRUFBRSxDQUFDLEVBQUMsVUFBVSxFQUFFLEtBQUssRUFBQyxDQUFDO1NBQ3ZDLENBQUMsQ0FBQztRQUNILG9CQUFvQixDQUFDLGdCQUFnQixDQUFDO1lBQ3BDLFlBQVksRUFBRSxDQUFDLHNDQUFzQyxDQUFDO1lBQ3RELFlBQVksRUFBRSxDQUFDLEtBQUssRUFBRSxTQUFTLENBQUM7WUFDaEMsWUFBWSxFQUFFLENBQUMsY0FBYyxDQUFDO1NBQy9CLENBQUMsQ0FBQztRQUVILE1BQU0sY0FBYyxHQUFHLElBQUksVUFBVSxDQUFDLGlCQUFpQixDQUFDLGNBQWMsRUFBRTtZQUN0RSxvQkFBb0IsRUFBRTtnQkFDcEI7b0JBQ0UsVUFBVSxFQUFFLEtBQUs7b0JBQ2pCLGtCQUFrQixFQUFFO3dCQUNsQixxREFBcUQsRUFBRSxnQkFBZ0I7d0JBQ3ZFLG9EQUFvRCxFQUFFLHdDQUF3Qzt3QkFDOUYscURBQXFELEVBQUUsK0JBQStCO3FCQUN2RjtvQkFDRCxpQkFBaUIsRUFBRTt3QkFDakIsa0JBQWtCLEVBQUUsd0NBQXdDO3FCQUM3RDtpQkFDRjthQUNGO1lBQ0gsS0FBSyxFQUFFLEtBQUs7U0FDWCxDQUFDLENBQUM7UUFDSCxNQUFNLGVBQWUsR0FBRyxvQkFBb0IsQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLENBQUM7UUFFakUsZUFBZSxDQUFDLFNBQVMsQ0FBQyxLQUFLLEVBQUUsY0FBYyxFQUFFO1lBQy9DLGVBQWUsRUFBRSxDQUFDLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRSxDQUFDO1NBQ3pDLENBQUMsQ0FBQTtJQUNOLENBQUM7Q0FDRjtBQXJFRCxvQ0FxRUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBsYW1iZGEgZnJvbSAnYXdzLWNkay1saWIvYXdzLWxhbWJkYSc7XG5pbXBvcnQgKiBhcyBjZGsgZnJvbSAnYXdzLWNkay1saWInO1xuaW1wb3J0ICogYXMgcGF0aCBmcm9tICdwYXRoJztcbmltcG9ydCB7IENvbnN0cnVjdCB9IGZyb20gJ2NvbnN0cnVjdHMnO1xuaW1wb3J0ICogYXMgYXBpZ2F0ZXdheSBmcm9tIFwiYXdzLWNkay1saWIvYXdzLWFwaWdhdGV3YXlcIjtcblxuZXhwb3J0IGNsYXNzIFByb2R1Y3RTdGFjayBleHRlbmRzIGNkay5TdGFjayB7XG4gIGNvbnN0cnVjdG9yKHNjb3BlOiBDb25zdHJ1Y3QsIGlkOiBzdHJpbmcsIHByb3BzPzogY2RrLlN0YWNrUHJvcHMpIHtcbiAgICBzdXBlcihzY29wZSwgaWQsIHByb3BzKTtcblxuICAgIGNvbnN0IGxhbWJkYUZ1bmN0aW9uID0gbmV3IGxhbWJkYS5GdW5jdGlvbih0aGlzLCAnbGFtYmRhLWZ1bmN0aW9uJywge1xuICAgICAgICBydW50aW1lOiBsYW1iZGEuUnVudGltZS5OT0RFSlNfMjBfWCxcbiAgICAgICAgbWVtb3J5U2l6ZTogMTAyNCxcbiAgICAgICAgdGltZW91dDogY2RrLkR1cmF0aW9uLnNlY29uZHMoNSksXG4gICAgICAgIGhhbmRsZXI6ICdoYW5kbGVyLm1haW4nLFxuICAgICAgICBjb2RlOiBsYW1iZGEuQ29kZS5mcm9tQXNzZXQocGF0aC5qb2luKF9fZGlybmFtZSwgJy4vbGFtYmRhJykpLFxuICAgICAgfSk7XG5cbiAgICAgIGNvbnN0IGFwaSA9IG5ldyBhcGlnYXRld2F5LlJlc3RBcGkodGhpcywgXCJwcm9kdWN0LWFwaVwiLCB7XG4gICAgICAgIHJlc3RBcGlOYW1lOiBcIlByb2R1Y3RzIEFQSSBHYXRld2F5XCIsXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIlRoaXMgQVBJIHNlcnZlcyB0aGUgTGFtYmRhIGZ1bmN0aW9ucy5cIlxuICAgICAgfSk7XG5cbiAgICAgIGNvbnN0IGdldFByb2R1Y3RzTGlzdCA9IG5ldyBhcGlnYXRld2F5LkxhbWJkYUludGVncmF0aW9uKGxhbWJkYUZ1bmN0aW9uLCB7XG4gICAgICAgIHJlcXVlc3RUZW1wbGF0ZXM6IHtcbiAgICAgICAgICAgIFwiYXBwbGljYXRpb24vanNvblwiOlxuICAgICAgICAgICAgICBgeyBcIm1lc3NhZ2VcIjogXCIkaW5wdXQucGFyYW1zKCdtZXNzYWdlJylcIiB9YFxuICAgICAgICAgIH0sXG4gICAgICAgICAgaW50ZWdyYXRpb25SZXNwb25zZXM6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgc3RhdHVzQ29kZTogJzIwMCcsXG4gICAgICAgICAgICAgIHJlc3BvbnNlUGFyYW1ldGVyczoge1xuICAgICAgICAgICAgICAgICdtZXRob2QucmVzcG9uc2UuaGVhZGVyLkFjY2Vzcy1Db250cm9sLUFsbG93LUhlYWRlcnMnOiBcIidDb250ZW50LVR5cGUnXCIsXG4gICAgICAgICAgICAgICAgJ21ldGhvZC5yZXNwb25zZS5oZWFkZXIuQWNjZXNzLUNvbnRyb2wtQWxsb3ctT3JpZ2luJzogXCInaHR0cHM6Ly9kejQ4d3R0ZjF2cGZzLmNsb3VkZnJvbnQubmV0J1wiLFxuICAgICAgICAgICAgICAgICdtZXRob2QucmVzcG9uc2UuaGVhZGVyLkFjY2Vzcy1Db250cm9sLUFsbG93LU1ldGhvZHMnOiBcIidPUFRJT05TLEdFVCxQVVQsUE9TVCxERUxFVEUnXCIsXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHJlc3BvbnNlVGVtcGxhdGVzOiB7XG4gICAgICAgICAgICAgICAgJ2FwcGxpY2F0aW9uL2pzb24nOiBcIiR1dGlsLnBhcnNlSnNvbigkaW5wdXQuanNvbignJC5ib2R5JykpXCJcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIF0sXG4gICAgICAgIHByb3h5OiBmYWxzZSxcbiAgICAgIH0pO1xuICAgICAgY29uc3QgcHJvZHVjdHNMaXN0UmVzb3VyY2UgPSBhcGkucm9vdC5hZGRSZXNvdXJjZShcInByb2R1Y3RzXCIpO1xuICAgICAgcHJvZHVjdHNMaXN0UmVzb3VyY2UuYWRkTWV0aG9kKCdHRVQnLCBnZXRQcm9kdWN0c0xpc3QsIHtcbiAgICAgICAgbWV0aG9kUmVzcG9uc2VzOiBbe3N0YXR1c0NvZGU6ICcyMDAnfV1cbiAgICAgIH0pO1xuICAgICAgcHJvZHVjdHNMaXN0UmVzb3VyY2UuYWRkQ29yc1ByZWZsaWdodCh7XG4gICAgICAgIGFsbG93T3JpZ2luczogWydodHRwczovL2R6NDh3dHRmMXZwZnMuY2xvdWRmcm9udC5uZXQnXSxcbiAgICAgICAgYWxsb3dNZXRob2RzOiBbJ0dFVCcsICdPUFRJT05TJ10sXG4gICAgICAgIGFsbG93SGVhZGVyczogWydDb250ZW50LVR5cGUnXSxcbiAgICAgIH0pO1xuXG4gICAgICBjb25zdCBnZXRQcm9kdWN0QnlJZCA9IG5ldyBhcGlnYXRld2F5LkxhbWJkYUludGVncmF0aW9uKGxhbWJkYUZ1bmN0aW9uLCB7XG4gICAgICAgIGludGVncmF0aW9uUmVzcG9uc2VzOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgc3RhdHVzQ29kZTogJzIwMCcsXG4gICAgICAgICAgICByZXNwb25zZVBhcmFtZXRlcnM6IHtcbiAgICAgICAgICAgICAgJ21ldGhvZC5yZXNwb25zZS5oZWFkZXIuQWNjZXNzLUNvbnRyb2wtQWxsb3ctSGVhZGVycyc6IFwiJ0NvbnRlbnQtVHlwZSdcIixcbiAgICAgICAgICAgICAgJ21ldGhvZC5yZXNwb25zZS5oZWFkZXIuQWNjZXNzLUNvbnRyb2wtQWxsb3ctT3JpZ2luJzogXCInaHR0cHM6Ly9kejQ4d3R0ZjF2cGZzLmNsb3VkZnJvbnQubmV0J1wiLFxuICAgICAgICAgICAgICAnbWV0aG9kLnJlc3BvbnNlLmhlYWRlci5BY2Nlc3MtQ29udHJvbC1BbGxvdy1NZXRob2RzJzogXCInT1BUSU9OUyxHRVQsUFVULFBPU1QsREVMRVRFJ1wiLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHJlc3BvbnNlVGVtcGxhdGVzOiB7XG4gICAgICAgICAgICAgICdhcHBsaWNhdGlvbi9qc29uJzogXCIkdXRpbC5wYXJzZUpzb24oJGlucHV0Lmpzb24oJyQuYm9keScpKVwiXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICBdLFxuICAgICAgcHJveHk6IGZhbHNlLFxuICAgICAgfSk7XG4gICAgICBjb25zdCBwcm9kdWN0UmVzb3VyY2UgPSBwcm9kdWN0c0xpc3RSZXNvdXJjZS5hZGRSZXNvdXJjZSgne2lkfScpO1xuXG4gICAgICBwcm9kdWN0UmVzb3VyY2UuYWRkTWV0aG9kKCdHRVQnLCBnZXRQcm9kdWN0QnlJZCwge1xuICAgICAgICBtZXRob2RSZXNwb25zZXM6IFt7IHN0YXR1c0NvZGU6ICcyMDAnIH1dXG4gICAgICB9KVxuICB9XG59XG4iXX0=