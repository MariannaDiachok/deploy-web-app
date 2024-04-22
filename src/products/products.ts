const products = [
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
  ];
  
  export async function getProductList() {
    if (!products){
      return {
          statusCode: 404,
          message: 'Products not found'
      };
    }
  
    return {
      body: JSON.stringify(products),
      statusCode: 200,
    };
  }
  
  export async function getProductById(event: {productId: string}) {
    const productById = products.find((product) => product.id === event.productId)
  
    if (!productById){
        return {
            statusCode: 404,
            message: 'Product not found'
        };
    }
  
    return {
        statusCode: 200,
        body: JSON.stringify(productById)
    };
  }
    