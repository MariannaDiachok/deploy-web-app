import * as lambda from 'aws-cdk-lib/aws-lambda';
import * as cdk from 'aws-cdk-lib';
import * as path from 'path';
import { Construct } from 'constructs';
import * as apigateway from "aws-cdk-lib/aws-apigateway";

export class ProductStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
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
            "application/json":
              `{ "message": "$input.params('message')" }`
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
      const productResource = productsListResource.addResource('{id}')
      productResource.addMethod('GET', getProductById, {
        methodResponses: [{ statusCode: '200' }]
      })
  }
}
