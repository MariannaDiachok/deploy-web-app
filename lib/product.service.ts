import { StackProps, Stack, Duration } from 'aws-cdk-lib';
import { LambdaIntegration, RestApi } from 'aws-cdk-lib/aws-apigateway';
import { NodejsFunction } from 'aws-cdk-lib/aws-lambda-nodejs';
import { Construct } from 'constructs';
import * as path from 'path';
import * as lambda from 'aws-cdk-lib/aws-lambda';
import * as AWS from 'aws-sdk';
import { v4 as uuidv4 } from 'uuid';
import { products } from './models/product.config';
import { stock } from './models/stock.config';
import * as dynamo from "aws-cdk-lib/aws-dynamodb";

export class ProductStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    // Serverless lambdas
    const lambdaProductsList = new NodejsFunction(this, 'lambda-product-list', {
      functionName: 'getProductList',
      entry: path.resolve(__dirname, '../src/products/products-serverless.handler.ts'),
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
      entry: path.resolve(__dirname, '../src/products/products-serverless.handler.ts'),
      runtime: lambda.Runtime.NODEJS_18_X,
      memorySize: 1024,
      timeout: Duration.seconds(5),
      handler: 'getProductById',
      bundling: {
        target: 'esnext'
      }
    });

    // DynamoDB tables
    const productsTable = new dynamo.Table(this, 'ProductsTable', {
      partitionKey: { name: 'id', type: dynamo.AttributeType.STRING },
     });

    const stockTable = new dynamo.Table(this, 'StockTable', {
      partitionKey: { name: 'product_id', type: dynamo.AttributeType.STRING },
    });

    // DynamoDB lambdas
    const getProductsListLambda = new NodejsFunction(this, 'get-products-list-lambda', {
      functionName: 'getProductsList',
      entry: path.resolve(__dirname, '../src/products/products-dynamodb.handler.ts'),
      runtime: lambda.Runtime.NODEJS_18_X,
      handler: 'getProductsList',
      environment: {
        PRODUCTS_TABLE_NAME: productsTable.tableName,
        STOCK_TABLE_NAME: stockTable.tableName
      }
    });
    
    const getProductsByIdLambda = new NodejsFunction(this, 'get-products-by-id-lambda', {
      functionName: 'getProductsById',
      entry: path.resolve(__dirname, '../src/products/products-dynamodb.handler.ts'),
      runtime: lambda.Runtime.NODEJS_18_X,
      handler: 'getProductsById',
      environment: {
        PRODUCTS_TABLE_NAME: productsTable.tableName,
      }
    });

    const createProductLambda = new NodejsFunction(this, 'create-product-lambda', {
      functionName: 'createProduct',
      entry: path.join(__dirname, '../src/products/products-dynamodb.handler.ts'),
      handler: 'createProduct',
      runtime: lambda.Runtime.NODEJS_18_X,
      environment: {
        PRODUCTS_TABLE_NAME: productsTable.tableName
      }
    });

    // api
    const productsApi = new RestApi(this, "products-api", {
      restApiName: "Products API Gateway",
      description: "This Products-API serves the Lambda functions."
    });

    // serverless integration
    const productsFromLambdaIntegration = new LambdaIntegration(getProductsListLambda, {
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

    const productsByIdFromLambdaIntegration = new LambdaIntegration(getProductsByIdLambda, {
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
    
    // DynamoDB client
    const dynamodb = new AWS.DynamoDB.DocumentClient();
    
    // Table names
    const PRODUCTS_TABLE_NAME = 'Products';
    const STOCK_TABLE_NAME = 'Stock';
    
    // Function to add product to Products table
    const addProduct = async (title: string, description: string, price: number): Promise<string> => {
        const productId = uuidv4();
        await dynamodb.put({
            TableName: PRODUCTS_TABLE_NAME,
            Item: {
                id: productId,
                title: title,
                description: description,
                price: price
            }
        }).promise();
        return productId;
    };
    
    // Function to add stock to Stock table
    const addStock = async (productId: string, count: number): Promise<void> => {
        await dynamodb.put({
            TableName: STOCK_TABLE_NAME,
            Item: {
                product_id: productId,
                count: count
            }
        }).promise();
    };
    
    // Fill Products table
    const fillProductsTable = async () => {
        for (const productData of products) {
            const productId = await addProduct(productData.title, productData.description, productData.price);
            stock[products.indexOf(productData)].product_id = productId;
        }
    };
    
    // Fill Stock table
    const fillStockTable = async () => {
        for (const stockData of stock) {
            await addStock(stockData.product_id, stockData.count);
        }
    };
    
    // Execute functions
    const main = async () => {
        await fillProductsTable();
        await fillStockTable();
        console.log("Product data added successfully.");
    };
    
    main().catch(error => console.error(error)); 
    
    // Create product
    // Grant permission to the Lambda function to write to the DynamoDB table
    productsTable.grantWriteData(createProductLambda);

    const createProductIntegration = new LambdaIntegration(createProductLambda,  {
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

    productsResource.addMethod('POST', createProductIntegration, {
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
  }
}
