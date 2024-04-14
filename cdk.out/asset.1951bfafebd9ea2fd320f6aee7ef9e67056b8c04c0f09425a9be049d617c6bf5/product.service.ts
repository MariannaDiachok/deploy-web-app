import * as lambda from 'aws-cdk-lib/aws-lambda';
import * as cdk from 'aws-cdk-lib';
import * as path from 'path';
import { Construct } from 'constructs';
import * as apigateway from "aws-cdk-lib/aws-apigateway";

export async function main() {
    return [
        {
          "count": 4,
          "description": "Short Product Description1",
          "id": "7567ec4b-b10c-48c5-9345-fc73c48a80aa",
          "price": 2.4,
          "title": "ProductOne"
        },
        {
          "count": 6,
          "description": "Short Product Description3",
          "id": "7567ec4b-b10c-48c5-9345-fc73c48a80a0",
          "price": 10,
          "title": "ProductNew"
        },
        {
          "count": 7,
          "description": "Short Product Description2",
          "id": "7567ec4b-b10c-48c5-9345-fc73c48a80a2",
          "price": 23,
          "title": "ProductTop"
        },
        {
          "count": 12,
          "description": "Short Product Description7",
          "id": "7567ec4b-b10c-48c5-9345-fc73c48a80a1",
          "price": 15,
          "title": "ProductTitle"
        },
        {
          "count": 7,
          "description": "Short Product Description2",
          "id": "7567ec4b-b10c-48c5-9345-fc73c48a80a3",
          "price": 23,
          "title": "Product"
        },
        {
          "count": 8,
          "description": "Short Product Description4",
          "id": "7567ec4b-b10c-48c5-9345-fc73348a80a1",
          "price": 15,
          "title": "ProductTest"
        },
      ]
      ;
  }

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
  }
}
