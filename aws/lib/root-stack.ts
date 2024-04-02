import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';

import * as kinesis from 'aws-cdk-lib/aws-kinesisvideo';
import * as iam from 'aws-cdk-lib/aws-iam';


export class RootStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // Create a new IAM user
    const user = new iam.User(this, 'KinesisVideoUser', {
      userName: 'kinesis-video-raspberry-pi-producer',
    });

    // Create an IAM policy
    const policy = new iam.Policy(this, 'KinesisVideoStreamWritePolicy', {
      policyName: 'kinesis-video-stream-write-policy',
      statements: [
        new iam.PolicyStatement({
          effect: iam.Effect.ALLOW,
          actions: [
            'kinesisvideo:DescribeStream',
            'kinesisvideo:CreateStream',
            'kinesisvideo:GetDataEndpoint',
            'kinesisvideo:PutMedia',
          ],
          resources: ['*'],
        }),
      ],
    });

    // Attach the policy to the user
    user.attachInlinePolicy(policy);

    // Generate access keys for the user
    const accessKey = new iam.AccessKey(this, 'AccessKey', {
      user: user,
    });

    const {accessKeyId,secretAccessKey} = accessKey

    // Output the access key ID and secret access key
    new cdk.CfnOutput(this, 'AccessKeyId', {
      value: accessKeyId,
    });
    new cdk.CfnOutput(this, 'SecretAccessKey', {
      value: secretAccessKey.unsafeUnwrap(), // Note: Only use unsafeUnwrap for demonstration purposes
    });



    const kvs = new kinesis.CfnStream(this, 'KinesisVideoStream', {
      name: 'RcWheelieStream',
      mediaType: 'video/h264',
      dataRetentionInHours: 1
    });
  }
}
