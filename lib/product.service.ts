import { StackProps, Stack, Duration } from 'aws-cdk-lib';
import { LambdaIntegration, RestApi } from 'aws-cdk-lib/aws-apigateway';
import { NodejsFunction } from 'aws-cdk-lib/aws-lambda-nodejs';
import { Construct } from 'constructs';
import * as path from 'path';
import * as lambda from 'aws-cdk-lib/aws-lambda';

export class ProductStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    const lambdaProductsList = new NodejsFunction(this, 'lambda-product-list', {
      functionName: 'getProductList',
      entry: path.resolve(__dirname, '../src/products/products.ts'),
      runtime: lambda.Runtime.NODEJS_18_X,
      memorySize: 1024,
      timeout: Duration.seconds(5),
      handler: 'getProductList',
      bundling: {
        target: 'esnext'
      }
    });

    const lambdaProductsById = new NodejsFunction(this, 'lambda-product-by-id', {
      functionName: 'getProductById',
      entry: path.resolve(__dirname, '../src/products/products.ts'),
      runtime: lambda.Runtime.NODEJS_18_X,
      memorySize: 1024,
      timeout: Duration.seconds(5),
      handler: 'getProductById',
      bundling: {
        target: 'esnext'
      }
    });


    const productsApi = new RestApi(this, "products-api", {
      restApiName: "Products API Gateway",
      description: "This Products-API serves the Lambda functions."
    });

    const productsFromLambdaIntegration = new LambdaIntegration(lambdaProductsList, {

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

    const productsByIdFromLambdaIntegration = new LambdaIntegration(lambdaProductsById, {
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

    const productByIdResource = productsResource.addResource('{product_id}')
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
    })

    productByIdResource.addCorsPreflight({
      allowOrigins: ['https://dz48wttf1vpfs.cloudfront.net'],
      allowMethods: ['GET', 'OPTIONS'],
      allowHeaders: ['Content-Type']
    });
  }
}
