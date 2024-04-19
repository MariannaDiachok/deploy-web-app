import * as lambda from 'aws-cdk-lib/aws-lambda';
import * as cdk from 'aws-cdk-lib';
import * as path from 'path';
import { Construct } from 'constructs';
import { LambdaIntegration, RestApi } from 'aws-cdk-lib/aws-apigateway';
import { NodejsFunction } from 'aws-cdk-lib/aws-lambda-nodejs';

export class ProductStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const lambdaProductList = new NodejsFunction(this, 'lambda-product-list', {
        functionName: 'getProductList',
        runtime: lambda.Runtime.NODEJS_18_X,
        memorySize: 1024,
        timeout: cdk.Duration.seconds(5),
        handler: 'handler.getProductList',
        entry: path.resolve(__dirname, './lambda/handler.ts'),
      });

    const lambdaProductById = new NodejsFunction(this, 'lambda-product-by-id', {
      functionName: 'getProductById',
      runtime: lambda.Runtime.NODEJS_18_X,
      memorySize: 1024,
      timeout: cdk.Duration.seconds(5),
      handler: 'handler.getProductById',
      entry: path.resolve(__dirname, './lambda/handler.ts'),
    });

    const productApi = new RestApi(this, "product-api", {
      restApiName: "Products API Gateway",
      description: "This API serves the Lambda functions."
    });

    const getProductListIntegration = new LambdaIntegration(lambdaProductList, {
      integrationResponses: [
        {
          statusCode: '200',
          responseParameters: {
            'method.response.header.Access-Control-Allow-Headers': "'Content-Type'",
            'method.response.header.Access-Control-Allow-Origin': "'https://dz48wttf1vpfs.cloudfront.net'",
            'method.response.header.Access-Control-Allow-Credentials': "'false'",
            'method.response.header.Access-Control-Allow-Methods': "'OPTIONS,GET,PUT,POST,DELETE'",
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
        'method.response.header.Access-Control-Allow-Methods': true,
        },
      }],
    });
    productListResource.addCorsPreflight({
      allowOrigins: ['https://dz48wttf1vpfs.cloudfront.net'],
      allowMethods: ['GET', 'OPTIONS'],
      allowHeaders: ['Content-Type'],
    });

    const getProductByIdIntegration = new LambdaIntegration(lambdaProductById, {
      integrationResponses: [
        {
          statusCode: '200',
          responseParameters: {
            'method.response.header.Access-Control-Allow-Headers': "'Content-Type'",
            'method.response.header.Access-Control-Allow-Origin': "'https://dz48wttf1vpfs.cloudfront.net'",
            'method.response.header.Access-Control-Allow-Methods': "'OPTIONS,GET,PUT,POST,DELETE'",
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
          'method.response.header.Access-Control-Allow-Methods': true
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
