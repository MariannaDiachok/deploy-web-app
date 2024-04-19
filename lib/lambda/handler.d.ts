export declare function getProductsList(): Promise<{
    statusCode: number;
    message: string;
    body?: undefined;
} | {
    body: string;
    statusCode: number;
    message?: undefined;
}>;
export declare function getProductById(event: {
    productId: string;
}): Promise<{
    statusCode: number;
    message: string;
    body?: undefined;
} | {
    statusCode: number;
    body: string;
    message?: undefined;
}>;
