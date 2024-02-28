import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import {KinesisStack} from "./kvs-stack";
// import * as sqs from 'aws-cdk-lib/aws-sqs';

export class RootStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // create Kinesis stack
    new KinesisStack(this, 'KinesisStack', props)


    // The code that defines your stack goes here

    // example resource
    // const queue = new sqs.Queue(this, 'AwsQueue', {
    //   visibilityTimeout: cdk.Duration.seconds(300)
    // });
  }
}
