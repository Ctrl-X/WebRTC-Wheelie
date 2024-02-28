#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import {RootStack} from '../lib/root-stack';

const app = new cdk.App();

new RootStack(app, 'WebRTCRootStack', {
    env: {
        account: process.env.CDK_DEFAULT_ACCOUNT, region: "us-east-1"
    },
});