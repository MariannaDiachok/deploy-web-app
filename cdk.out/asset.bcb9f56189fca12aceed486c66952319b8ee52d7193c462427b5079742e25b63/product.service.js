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
            code: lambda.Code.fromAsset(path.join(__dirname, './')),
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
                }
            ],
            proxy: true,
        });
        const productsListResource = api.root.addResource("products");
        productsListResource.addMethod('GET', getProductsList, {
            methodResponses: [{ statusCode: '200' }]
        });
        productsListResource.addCorsPreflight({
            allowOrigins: ['https://dz48wttf1vpfs.cloudfront.net/'],
            allowMethods: ['GET'],
        });
        const getProductById = new apigateway.LambdaIntegration(lambdaFunction, {});
        const productResource = productsListResource.addResource('{id}');
        productResource.addMethod('GET', getProductById, {
            methodResponses: [{ statusCode: '200' }]
        });
    }
}
exports.ProductStack = ProductStack;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicHJvZHVjdC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLGlEQUFpRDtBQUNqRCxtQ0FBbUM7QUFDbkMsNkJBQTZCO0FBRTdCLHlEQUF5RDtBQUV6RCxNQUFhLFlBQWEsU0FBUSxHQUFHLENBQUMsS0FBSztJQUN6QyxZQUFZLEtBQWdCLEVBQUUsRUFBVSxFQUFFLEtBQXNCO1FBQzlELEtBQUssQ0FBQyxLQUFLLEVBQUUsRUFBRSxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBRXhCLE1BQU0sY0FBYyxHQUFHLElBQUksTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsaUJBQWlCLEVBQUU7WUFDaEUsT0FBTyxFQUFFLE1BQU0sQ0FBQyxPQUFPLENBQUMsV0FBVztZQUNuQyxVQUFVLEVBQUUsSUFBSTtZQUNoQixPQUFPLEVBQUUsR0FBRyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO1lBQ2hDLE9BQU8sRUFBRSxjQUFjO1lBQ3ZCLElBQUksRUFBRSxNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsQ0FBQztTQUN4RCxDQUFDLENBQUM7UUFFSCxNQUFNLEdBQUcsR0FBRyxJQUFJLFVBQVUsQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLGFBQWEsRUFBRTtZQUN0RCxXQUFXLEVBQUUsc0JBQXNCO1lBQ25DLFdBQVcsRUFBRSx1Q0FBdUM7U0FDckQsQ0FBQyxDQUFDO1FBRUgsTUFBTSxlQUFlLEdBQUcsSUFBSSxVQUFVLENBQUMsaUJBQWlCLENBQUMsY0FBYyxFQUFFO1lBQ3ZFLGdCQUFnQixFQUFFO2dCQUNkLGtCQUFrQixFQUNoQiwyQ0FBMkM7YUFDOUM7WUFDSCxvQkFBb0IsRUFBRTtnQkFDdEI7b0JBQ0UsVUFBVSxFQUFFLEtBQUs7aUJBQ2xCO2FBQ0Y7WUFDQyxLQUFLLEVBQUUsSUFBSTtTQUNaLENBQUMsQ0FBQztRQUNILE1BQU0sb0JBQW9CLEdBQUcsR0FBRyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDOUQsb0JBQW9CLENBQUMsU0FBUyxDQUFDLEtBQUssRUFBRSxlQUFlLEVBQUU7WUFDckQsZUFBZSxFQUFFLENBQUMsRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLENBQUM7U0FDekMsQ0FBQyxDQUFDO1FBQ0gsb0JBQW9CLENBQUMsZ0JBQWdCLENBQUM7WUFDcEMsWUFBWSxFQUFFLENBQUMsdUNBQXVDLENBQUM7WUFDdkQsWUFBWSxFQUFFLENBQUMsS0FBSyxDQUFDO1NBQ3RCLENBQUMsQ0FBQztRQUVILE1BQU0sY0FBYyxHQUFHLElBQUksVUFBVSxDQUFDLGlCQUFpQixDQUFDLGNBQWMsRUFBRSxFQUFFLENBQUMsQ0FBQztRQUM1RSxNQUFNLGVBQWUsR0FBRyxvQkFBb0IsQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLENBQUE7UUFDaEUsZUFBZSxDQUFDLFNBQVMsQ0FBQyxLQUFLLEVBQUUsY0FBYyxFQUFFO1lBQy9DLGVBQWUsRUFBRSxDQUFDLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRSxDQUFDO1NBQ3pDLENBQUMsQ0FBQTtJQUNOLENBQUM7Q0FDRjtBQTVDRCxvQ0E0Q0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBsYW1iZGEgZnJvbSAnYXdzLWNkay1saWIvYXdzLWxhbWJkYSc7XG5pbXBvcnQgKiBhcyBjZGsgZnJvbSAnYXdzLWNkay1saWInO1xuaW1wb3J0ICogYXMgcGF0aCBmcm9tICdwYXRoJztcbmltcG9ydCB7IENvbnN0cnVjdCB9IGZyb20gJ2NvbnN0cnVjdHMnO1xuaW1wb3J0ICogYXMgYXBpZ2F0ZXdheSBmcm9tIFwiYXdzLWNkay1saWIvYXdzLWFwaWdhdGV3YXlcIjtcblxuZXhwb3J0IGNsYXNzIFByb2R1Y3RTdGFjayBleHRlbmRzIGNkay5TdGFjayB7XG4gIGNvbnN0cnVjdG9yKHNjb3BlOiBDb25zdHJ1Y3QsIGlkOiBzdHJpbmcsIHByb3BzPzogY2RrLlN0YWNrUHJvcHMpIHtcbiAgICBzdXBlcihzY29wZSwgaWQsIHByb3BzKTtcblxuICAgIGNvbnN0IGxhbWJkYUZ1bmN0aW9uID0gbmV3IGxhbWJkYS5GdW5jdGlvbih0aGlzLCAnbGFtYmRhLWZ1bmN0aW9uJywge1xuICAgICAgICBydW50aW1lOiBsYW1iZGEuUnVudGltZS5OT0RFSlNfMjBfWCxcbiAgICAgICAgbWVtb3J5U2l6ZTogMTAyNCxcbiAgICAgICAgdGltZW91dDogY2RrLkR1cmF0aW9uLnNlY29uZHMoNSksXG4gICAgICAgIGhhbmRsZXI6ICdoYW5kbGVyLm1haW4nLFxuICAgICAgICBjb2RlOiBsYW1iZGEuQ29kZS5mcm9tQXNzZXQocGF0aC5qb2luKF9fZGlybmFtZSwgJy4vJykpLFxuICAgICAgfSk7XG5cbiAgICAgIGNvbnN0IGFwaSA9IG5ldyBhcGlnYXRld2F5LlJlc3RBcGkodGhpcywgXCJwcm9kdWN0LWFwaVwiLCB7XG4gICAgICAgIHJlc3RBcGlOYW1lOiBcIlByb2R1Y3RzIEFQSSBHYXRld2F5XCIsXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIlRoaXMgQVBJIHNlcnZlcyB0aGUgTGFtYmRhIGZ1bmN0aW9ucy5cIlxuICAgICAgfSk7XG5cbiAgICAgIGNvbnN0IGdldFByb2R1Y3RzTGlzdCA9IG5ldyBhcGlnYXRld2F5LkxhbWJkYUludGVncmF0aW9uKGxhbWJkYUZ1bmN0aW9uLCB7XG4gICAgICAgIHJlcXVlc3RUZW1wbGF0ZXM6IHtcbiAgICAgICAgICAgIFwiYXBwbGljYXRpb24vanNvblwiOlxuICAgICAgICAgICAgICBgeyBcIm1lc3NhZ2VcIjogXCIkaW5wdXQucGFyYW1zKCdtZXNzYWdlJylcIiB9YFxuICAgICAgICAgIH0sXG4gICAgICAgIGludGVncmF0aW9uUmVzcG9uc2VzOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBzdGF0dXNDb2RlOiAnMjAwJyxcbiAgICAgICAgfVxuICAgICAgXSxcbiAgICAgICAgcHJveHk6IHRydWUsXG4gICAgICB9KTtcbiAgICAgIGNvbnN0IHByb2R1Y3RzTGlzdFJlc291cmNlID0gYXBpLnJvb3QuYWRkUmVzb3VyY2UoXCJwcm9kdWN0c1wiKTtcbiAgICAgIHByb2R1Y3RzTGlzdFJlc291cmNlLmFkZE1ldGhvZCgnR0VUJywgZ2V0UHJvZHVjdHNMaXN0LCB7XG4gICAgICAgIG1ldGhvZFJlc3BvbnNlczogW3sgc3RhdHVzQ29kZTogJzIwMCcgfV1cbiAgICAgIH0pO1xuICAgICAgcHJvZHVjdHNMaXN0UmVzb3VyY2UuYWRkQ29yc1ByZWZsaWdodCh7XG4gICAgICAgIGFsbG93T3JpZ2luczogWydodHRwczovL2R6NDh3dHRmMXZwZnMuY2xvdWRmcm9udC5uZXQvJ10sXG4gICAgICAgIGFsbG93TWV0aG9kczogWydHRVQnXSxcbiAgICAgIH0pO1xuXG4gICAgICBjb25zdCBnZXRQcm9kdWN0QnlJZCA9IG5ldyBhcGlnYXRld2F5LkxhbWJkYUludGVncmF0aW9uKGxhbWJkYUZ1bmN0aW9uLCB7fSk7XG4gICAgICBjb25zdCBwcm9kdWN0UmVzb3VyY2UgPSBwcm9kdWN0c0xpc3RSZXNvdXJjZS5hZGRSZXNvdXJjZSgne2lkfScpXG4gICAgICBwcm9kdWN0UmVzb3VyY2UuYWRkTWV0aG9kKCdHRVQnLCBnZXRQcm9kdWN0QnlJZCwge1xuICAgICAgICBtZXRob2RSZXNwb25zZXM6IFt7IHN0YXR1c0NvZGU6ICcyMDAnIH1dXG4gICAgICB9KVxuICB9XG59XG4iXX0=