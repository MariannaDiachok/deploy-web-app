import * as AWS from 'aws-sdk';

const dynamodb = new AWS.DynamoDB.DocumentClient();

export const getProductsList = async (_event: any = {}): Promise<any> => {
  try {
    const productsResult = await dynamodb.scan({ TableName: process.env.PRODUCTS_TABLE_NAME || '' }).promise();
    const stockResult = await dynamodb.scan({ TableName: process.env.STOCK_TABLE_NAME || '' }).promise();

    const products = productsResult.Items || [];
    const stock = stockResult.Items || [];

    const productList = products.map((product) => {
      const stockItem = stock.find((item: any) => item.product_id === product.id);
      return {
        id: product.id,
        title: product.title,
        description: product.description,
        price: product.price,
        count: stockItem ? stockItem.count : 0
      };
    });

    return {
      statusCode: 200,
      body: JSON.stringify(productList)
    };
  } catch (error: any) {
    return {
      statusCode: 500,
      body: JSON.stringify({ message: 'Error fetching products: ' + error.message })
    };
  }
};

export const getProductsById = async (event: any = {}): Promise<any> => {
  try {
    const productId = event.pathParameters.productId;

    const productResult = await dynamodb.get({
      TableName: process.env.PRODUCTS_TABLE_NAME || '',
      Key: {
        id: productId
      }
    }).promise();

    if (!productResult.Item) {
      return {
        statusCode: 404,
        body: JSON.stringify({ message: 'Product not found' })
      };
    }

    return {
      statusCode: 200,
      body: JSON.stringify(productResult.Item)
    };
  } catch (error) {
    console.error('Error fetching product:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ message: 'Error fetching product' })
    };
  }
};

export const createProduct = async (event: any = {}): Promise<any> => {
  try {
    const requestBody = JSON.parse(event.body);
    const productId = generateProductId();
    const newItem = {
      id: productId,
      title: requestBody.title,
      description: requestBody.description,
      price: requestBody.price
    };

    await dynamodb.put({
      TableName: process.env.PRODUCTS_TABLE_NAME || '',
      Item: newItem
    }).promise();

    return {
      statusCode: 201,
      body: JSON.stringify({ message: 'Product created successfully', product: newItem })
    };
  } catch (error) {
    console.error('Error creating product:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ message: 'Error creating product' })
    };
  }
};

// Helper function to generate a unique product ID
const generateProductId = (): string => {
  return Math.random().toString(36).substring(2, 10);
};