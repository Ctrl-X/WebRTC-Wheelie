import * as cdk from 'aws-cdk-lib';
import * as kinesis from 'aws-cdk-lib/aws-kinesisvideo';
import {Construct} from "constructs";

export class KinesisStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
        super(scope, id, props);

        const kvs = new kinesis.CfnStream(this, 'KinesisVideoStream', {
            name: 'RcWheelieStream',
            mediaType: 'video/h264',
            dataRetentionInHours: 1
        });

    }
}
