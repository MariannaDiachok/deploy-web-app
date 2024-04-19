import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
export declare function main(): Promise<{
    count: number;
    description: string;
    id: string;
    price: number;
    title: string;
}[]>;
export declare class ProductStack extends cdk.Stack {
    constructor(scope: Construct, id: string, props?: cdk.StackProps);
}
