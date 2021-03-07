# Awesome Chalice
<a href="https://join.slack.com/t/chalicedev/shared_invite/zt-naadmddi-MRwgFq40Ge3qfcPJR_RaDQ"><img height="20px" src="https://img.shields.io/badge/Slack-4A154B?logo=slack&logoColor=white"></a>&nbsp;<img src="https://end4gy838edhwnq.m.pipedream.net">
> Community list of resources about AWS Chalice.

<br/>

[AWS Chalice](https://aws.github.io/chalice/)<a href="https://aws.github.io/chalice/"><img src="https://aws.github.io/chalice/_static/img/chalice-logo-icon-small.png" height="20"></a> is a library for serverless Python application development using AWS Lambda. Chalice is suited for:

- Writing HTTPS APIs that wrap AWS infrastructure.
- Building libraries of Ops functions, including ChatOps.
- Managing AWS accounts programmatically.
- Creating web applications with your favorite front-end toolkit.
- Providing the web API backend layer for cross-platform desktop and mobile applications written in Qt for Python.

<a href="https://join.slack.com/t/chalicedev/shared_invite/zt-naadmddi-MRwgFq40Ge3qfcPJR_RaDQ">Join us in Slack.</a>

## Contents
- [AWS Projects](#aws-projects)
- [AWS Python SDKs](#aws-python-sdks)
- [3rd-party Python](#3rd-party-python)
- [Tooling](#tooling)
- [Made with Chalice](#made-with-chalice)
- [Articles](#articles)
- [AWS Serverless Architectures](#aws-serverless-architectures)
- [AWS Labs](#aws-labs)
- [Related Awesome Lists](#related-awesome-lists)

## AWS Projects
Supercharge your app.

- [AWS Data Wrangler ![GitHub Repo stars](https://img.shields.io/github/stars/awslabs/aws-data-wrangler) ![GitHub last commit](https://img.shields.io/github/last-commit/awslabs/aws-data-wrangler)](https://github.com/awslabs/aws-data-wrangler) - Pandas on AWS - Easy integration with Athena, Glue, Redshift, Timestream, QuickSight, Chime, CloudWatchLogs, DynamoDB, EMR, SecretManager, PostgreSQL, MySQL, SQLServer and S3 (Parquet, CSV, JSON and EXCEL).
- [AWS AutoGluon ![GitHub Repo stars](https://img.shields.io/github/stars/awslabs/autogluon) ![GitHub last commit](https://img.shields.io/github/last-commit/awslabs/autogluon)](https://github.com/awslabs/autogluon) - Automate machine learning training and deployment.
- [AWS Lambda Powertools ![GitHub Repo stars](https://img.shields.io/github/stars/awslabs/aws-lambda-powertools-python) ![GitHub last commit](https://img.shields.io/github/last-commit/awslabs/aws-lambda-powertools-python)](https://github.com/awslabs/aws-lambda-powertools-python) - A suite of utilities for AWS Lambda functions to ease adopting best practices such as tracing, structured logging, custom metrics async, parameters and secrets management, idempotency, and more.
- [AWS Cloud Development Kit (CDK)](https://aws.amazon.com/cdk/) - The CDK can deploy Chalice apps, or Chalice can deploy CDK apps.
- [AWS Solutions Constructs Patterns](https://aws.amazon.com/solutions/constructs/patterns/) - Architectural patterns for the CDK that can be chained together.
- [AWS Serverless Application Repository](https://serverlessrepo.aws.amazon.com/applications) - Serverless AWS applications. 
- [DynamoDB Global Tables](https://aws.amazon.com/dynamodb/global-tables/) - NoSQL database.
- [Aurora Serverless Global Database 2](https://aws.amazon.com/rds/aurora/serverless/) - OLTP database.
- [AWS Amplify](https://docs.amplify.aws/) - Front-end toolkit.
- [Amazon Athena Federated Query](https://docs.aws.amazon.com/athena/latest/ug/connect-to-a-data-source.html) - Author pure lambda functions for ad-hoc datalakes.
- [AWS SDK for JavaScript](https://aws.amazon.com/sdk-for-javascript/) - Combine with Brython or Pyodide for front-end Python development.

## AWS Python SDKs
Every SDK in one place.

- [AWS SDK for Python (boto3)](https://boto3.amazonaws.com/v1/documentation/api/latest/index.html) - See `aioboto3` for the async version.
- [AWS X-Ray SDK for Python](https://docs.aws.amazon.com/xray/latest/devguide/xray-sdk-python.html) - Instrument with `from aws_xray_sdk.core import patch_all;patch_all();`.
- [AWS IoT SDK for Python ![GitHub Repo stars](https://img.shields.io/github/stars/aws/aws-iot-device-sdk-python-v2) ![GitHub last commit](https://img.shields.io/github/last-commit/aws/aws-iot-device-sdk-python-v2)](https://github.com/aws/aws-iot-device-sdk-python-v2) - Can talk to Chalice via Kinesis Streams. 
- [AWS C Common Runtime ![GitHub Repo stars](https://img.shields.io/github/stars/awslabs/aws-c-common) ![GitHub last commit](https://img.shields.io/github/last-commit/awslabs/aws-c-common)](https://github.com/awslabs/aws-c-common) - Use with the AWS CRT Python module.
- [AWS Encryption SDK for Python ![GitHub Repo stars](https://img.shields.io/github/stars/aws/aws-encryption-sdk-python) ![GitHub last commit](https://img.shields.io/github/last-commit/aws/aws-encryption-sdk-python)](https://github.com/aws/aws-encryption-sdk-python/) - Hard encryption in your application logic.
- [AWS SageMaker SDK for Python ![GitHub Repo stars](https://img.shields.io/github/stars/aws/sagemaker-python-sdk) ![GitHub last commit](https://img.shields.io/github/last-commit/aws/sagemaker-python-sdk)](https://github.com/aws/sagemaker-python-sdk) - Train and deploy machine learning models. Integrate with your EMR cluster.
- [AWS Step Functions Data Science SDK for Python ![GitHub Repo stars](https://img.shields.io/github/stars/aws/aws-step-functions-data-science-sdk-python) ![GitHub last commit](https://img.shields.io/github/last-commit/aws/aws-step-functions-data-science-sdk-python)](https://github.com/aws/aws-step-functions-data-science-sdk-python) - Managed AI/ML infrastructure.
- [AWS Braket SDK for Python ![GitHub Repo stars](https://img.shields.io/github/stars/aws/amazon-braket-sdk-python) ![GitHub last commit](https://img.shields.io/github/last-commit/aws/amazon-braket-sdk-python)](https://github.com/aws/amazon-braket-sdk-python) - Leverage D-Wave quantum computing devices.
- [AWS DynamoDB Encryption SDK for Python ![GitHub Repo stars](https://img.shields.io/github/stars/aws/aws-dynamodb-encryption-python) ![GitHub last commit](https://img.shields.io/github/last-commit/aws/aws-dynamodb-encryption-python)](https://github.com/aws/aws-dynamodb-encryption-python) - Encrypt data before sending it to DynamoDB.
- [AWS Transcribe Streaming SDK ![GitHub Repo stars](https://img.shields.io/github/stars/awslabs/amazon-transcribe-streaming-sdk) ![GitHub last commit](https://img.shields.io/github/last-commit/awslabs/amazon-transcribe-streaming-sdk)](https://github.com/awslabs/amazon-transcribe-streaming-sdk) - Convert audio into text.
- [AWS Data API SDK ![GitHub Repo stars](https://img.shields.io/github/stars/awslabs/aws-data-api-python-sdk) ![GitHub last commit](https://img.shields.io/github/last-commit/awslabs/aws-data-api-python-sdk)](https://github.com/awslabs/aws-data-api-python-sdk) - HTTP interface to your non-transactional data lake, made with Chalice.

## 3rd-party Python
Only the best.

- [3M Falcano ![GitHub Repo stars](https://img.shields.io/github/stars/3mcloud/falcano) ![GitHub last commit](https://img.shields.io/github/last-commit/3mcloud/falcano)](https://github.com/3mcloud/falcano) - DynamoDB ORM, allowing for single table designs. Successor to PynamoDB.
- [S3Fs](https://s3fs.readthedocs.io/en/latest/) - Use S3 like a filesystem.
- [PySide6](https://www.qt.io/blog/qt-for-python-6-released) - Official Qt module for Python.
- [Hy: A lisp written in Python](https://docs.hylang.org/en/master/tutorial.html) - A lisp that can you can use in your Python code, for FP.
- [Toolz: A set of utility functions for iterators, functions, and dictionaries ![GitHub Repo stars](https://img.shields.io/github/stars/pytoolz/toolz) ![GitHub last commit](https://img.shields.io/github/last-commit/pytoolz/toolz)](https://github.com/pytoolz/toolz) - FP primitives.
- [AWS Limit Checker ![GitHub Repo stars](https://img.shields.io/github/stars/jantman/awslimitchecker) ![GitHub last commit](https://img.shields.io/github/last-commit/jantman/awslimitchecker)](https://github.com/jantman/awslimitchecker) - Detect when you are about to run up against AWS limits.
- [Click](https://click.palletsprojects.com/en/7.x/) - Create a CLI.
- [Netflix Metaflow S3 ![GitHub Repo stars](https://img.shields.io/github/stars/Netflix/metaflow) ![GitHub last commit](https://img.shields.io/github/last-commit/Netflix/metaflow)](https://github.com/Netflix/metaflow/blob/master/metaflow/datatools/s3.py) - Achieve 20 gigabit S3 throughput.
- [Slack Bolt ![GitHub Repo stars](https://img.shields.io/github/stars/slackapi/bolt-python) ![GitHub last commit](https://img.shields.io/github/last-commit/slackapi/bolt-python)](https://github.com/slackapi/bolt-python) - Enable AWS ChatOps with Slack's built-in Chalice support.
- [Troposphere ![GitHub Repo stars](https://img.shields.io/github/stars/cloudtools/troposphere) ![GitHub last commit](https://img.shields.io/github/last-commit/cloudtools/troposphere)](https://github.com/cloudtools/troposphere) - Write CloudFormation using Python.
- [Scepter ![GitHub Repo stars](https://img.shields.io/github/stars/Sceptre/sceptre) ![GitHub last commit](https://img.shields.io/github/last-commit/Sceptre/sceptre)](https://github.com/Sceptre/sceptre) - CloudFormation deployment library.
- [taskcat ![GitHub Repo stars](https://img.shields.io/github/stars/aws-quickstart/taskcat) ![GitHub last commit](https://img.shields.io/github/last-commit/aws-quickstart/taskcat)](https://github.com/aws-quickstart/taskcat) - CloudFormation testing library from AWS.
- [PyCognito ![GitHub Repo stars](https://img.shields.io/github/stars/pvizeli/pycognito) ![GitHub last commit](https://img.shields.io/github/last-commit/pvizeli/pycognito)](https://github.com/pvizeli/pycognito) - Manage and use Cognito user pools.
- [mrjob ![GitHub Repo stars](https://img.shields.io/github/stars/Yelp/mrjob) ![GitHub last commit](https://img.shields.io/github/last-commit/Yelp/mrjob)](https://github.com/Yelp/mrjob) - Run MapReduce jobs on your EMR cluster.

## Tooling
Create diagrams, write code.

- [AWS Toolkit for PyCharm](https://aws.amazon.com/pycharm/) - Tightly integrated editor, for repl-driven development.
- [Anaconda Python Distribution](https://www.anaconda.com/products/individual/download-success) - Consistent Python environment for local dev.
- [Chalice + LocalStack ![GitHub Repo stars](https://img.shields.io/github/stars/localstack/chalice-local) ![GitHub last commit](https://img.shields.io/github/last-commit/localstack/chalice-local)](https://github.com/localstack/chalice-local) - Dev against local versions of DynamoDB, AWS Lambda, API Gateway, etc.
- [Cloudviz](https://cloudviz.io/) - Create diagrams in the official style.
- [CloudMoji™](https://cloudmoji.com/) - Has the 2021 AWS icon pack.

## Made with Chalice
Example GitHub repos.

- [Coworks Microframework ![GitHub Repo stars](https://img.shields.io/github/stars/gdoumenc/coworks) ![GitHub last commit](https://img.shields.io/github/last-commit/gdoumenc/coworks)](https://github.com/gdoumenc/coworks) - Based on Step Functions.
- [Agave: REST API for Chalice BluePrints ![GitHub Repo stars](https://img.shields.io/github/stars/cuenca-mx/agave) ![GitHub last commit](https://img.shields.io/github/last-commit/cuenca-mx/agave)](https://github.com/cuenca-mx/agave) - REST APIs for your managed routes.
- [aws-chalice-swagger ![GitHub Repo stars](https://img.shields.io/github/stars/samuelkhtu/aws-chalice-swagger) ![GitHub last commit](https://img.shields.io/github/last-commit/samuelkhtu/aws-chalice-swagger)](https://github.com/samuelkhtu/aws-chalice-swagger) - How to use Swagger support.
- [Lambda Multi-threading in Chalice ![GitHub Repo stars](https://img.shields.io/github/stars/vumdao/multithread-in-lambda) ![GitHub last commit](https://img.shields.io/github/last-commit/vumdao/multithread-in-lambda)](https://github.com/vumdao/multithread-in-lambda) - Map/reduce across your Lambda cores.
- [aws-chalice-boilerplate ![GitHub Repo stars](https://img.shields.io/github/stars/GabrielTavares99/aws-chalice-boilerplate) ![GitHub last commit](https://img.shields.io/github/last-commit/GabrielTavares99/aws-chalice-boilerplate)](https://github.com/GabrielTavares99/aws-chalice-boilerplate) - How to use `chalice.cli.CLIFactory`.
- [chalice_dockerized ![GitHub Repo stars](https://img.shields.io/github/stars/vanderlvoff/chalice_dockerized) ![GitHub last commit](https://img.shields.io/github/last-commit/vanderlvoff/chalice_dockerized)](https://github.com/vanderlvoff/chalice_dockerized) - Dockerize your application.
- [Chalice-GraphQL ![GitHub Repo stars](https://img.shields.io/github/stars/jrbeilke/chalice-graphql) ![GitHub last commit](https://img.shields.io/github/last-commit/jrbeilke/chalice-graphql)](https://github.com/jrbeilke/chalice-graphql) - Add a GraphQL API.
- [chalice-extended-action ![GitHub Repo stars](https://img.shields.io/github/stars/jayef0/chalice-extended-action) ![GitHub last commit](https://img.shields.io/github/last-commit/jayef0/chalice-extended-action)](https://github.com/jayef0/chalice-extended-action) - Deploy with GitHub Actions.
- [pytest-chalice ![GitHub Repo stars](https://img.shields.io/github/stars/studio3104/pytest-chalice) ![GitHub last commit](https://img.shields.io/github/last-commit/studio3104/pytest-chalice)](https://github.com/studio3104/pytest-chalice) - Py.test fixtures.
- [chalice-cognito-auth ![GitHub Repo stars](https://img.shields.io/github/stars/stealthycoin/chalice-cognito-auth) ![GitHub last commit](https://img.shields.io/github/last-commit/stealthycoin/chalice-cognito-auth)](https://github.com/stealthycoin/chalice-cognito-auth) - SSO with a Cognito user pool.


## Articles
Critical background reading.

- [Python support GA: improving Python code quality using Amazon CodeGuru Reviewer](https://aws.amazon.com/blogs/devops/python-support-ga-improving-python-code-quality-using-amazon-codeguru-reviewer/)
- [Amplify Flutter is Now Generally Available: Build Beautiful Cross-Platform Apps](https://aws.amazon.com/blogs/aws/amplify-flutter-is-now-generally-available-build-beautiful-cross-platform-apps/)
- [Using container images to run PyTorch models in AWS Lambda](https://aws.amazon.com/blogs/machine-learning/using-container-images-to-run-pytorch-models-in-aws-lambda/)
- [AWS Chalice adds support for the AWS CDK](https://aws.amazon.com/blogs/developer/aws-chalice-adds-support-for-the-aws-cdk/)
- [Packaging AWS Lambda functions as container images](https://acloudguru.com/blog/engineering/packaging-aws-lambda-functions-as-container-images)
- [New for AWS Lambda – 1ms Billing Granularity Adds Cost Savings](https://aws.amazon.com/blogs/aws/new-for-aws-lambda-1ms-billing-granularity-adds-cost-savings/)
- [Implementing version control using Amazon DynamoDB](https://aws.amazon.com/blogs/database/implementing-version-control-using-amazon-dynamodb/)
- [Introducing Middleware Stack in Modular AWS SDK for JavaScript](https://aws.amazon.com/blogs/developer/middleware-stack-modular-aws-sdk-js/)
- [How do I give internet access to a Lambda function that's connected to an Amazon VPC?](https://aws.amazon.com/premiumsupport/knowledge-center/internet-access-lambda-function/)
- [AWS Lambda Extensions: What are they and why do they matter](https://lumigo.io/blog/aws-lambda-extensions-what-are-they-and-why-do-they-matter/)
- [AWS Chalice now supports Amazon Kinesis and Amazon DynamoDB Streams](https://aws.amazon.com/blogs/developer/aws-chalice-now-supports-amazon-kinesis-and-amazon-dynamodb-streams/)
- [Using AWS Lambda Layers with AWS Chalice](https://aws.amazon.com/blogs/developer/using-aws-lambda-layers-with-aws-chalice/)
- [Following serverless best practices with AWS Chalice and Lambda Powertools](https://aws.amazon.com/blogs/developer/following-serverless-best-practices-with-aws-chalice-and-lambda-powertools/)
- [Automatically deploy a Serverless REST API from GitHub with AWS Chalice](https://aws.amazon.com/blogs/developer/automatically-deploy-a-serverless-rest-api-from-github-with-aws-chalice/)
- [Configuring custom domain names with AWS Chalice](https://aws.amazon.com/blogs/developer/configuring-custom-domain-names-with-aws-chalice/)
- [AWS Chalice Now Supports YAML Templates](https://aws.amazon.com/blogs/developer/aws-chalice-now-supports-yaml-templates/)
- [AWS Solutions Constructs – A Library of Architecture Patterns for the AWS CDK](https://aws.amazon.com/blogs/aws/aws-solutions-constructs-a-library-of-architecture-patterns-for-the-aws-cdk/)
- [Using Amazon EFS for AWS Lambda in your serverless applications](https://aws.amazon.com/blogs/compute/using-amazon-efs-for-aws-lambda-in-your-serverless-applications/)
- [Introducing the AWS Chalice test client](https://aws.amazon.com/blogs/developer/introducing-the-new-test-client-for-aws-chalice/)
- [Use Amazon DynamoDB Accelerator (DAX) from AWS Lambda to increase performance while reducing costs](https://aws.amazon.com/blogs/database/how-to-increase-performance-while-reducing-costs-by-using-amazon-dynamodb-accelerator-dax-and-aws-lambda/)
- [Painless AWS Chalice Application Debug](https://medium.com/cyberark-engineering/painless-aws-chalice-application-debug-90534e33cf76)
- [Modularizing a Chalice Application for Teams](https://medium.com/tensoriot/modularizing-a-chalice-application-for-teams-f716f496b94b)
- [Getting started with the AWS Cloud Development Kit and Python](https://aws.amazon.com/blogs/developer/getting-started-with-the-aws-cloud-development-kit-and-python/)
- [Run your Python Scripts as Slack Commands (ChatOps)](https://medium.com/@yogeshingale94/run-your-python-scripts-as-slack-commands-chatops-63bc334b74cd)
- [Building Serverless Python Apps Using AWS Chalice](https://realpython.com/aws-chalice-serverless-python/)

## AWS Serverless Architectures
Inspiration for your app. [Complete list of 500+ sample architectures](https://github.com/aws-samples?q=&type=&language=python&sort=). 

- [AWS Glue ETL Code Samples ![GitHub Repo stars](https://img.shields.io/github/stars/aws-samples/aws-glue-samples) ![GitHub last commit](https://img.shields.io/github/last-commit/aws-samples/aws-glue-samples)](https://github.com/aws-samples/aws-glue-samples)
- [AWS Control Tower Account Creation Automation ![GitHub Repo stars](https://img.shields.io/github/stars/aws-samples/aws-control-tower-automate-account-creation) ![GitHub last commit](https://img.shields.io/github/last-commit/aws-samples/aws-control-tower-automate-account-creation)](https://github.com/aws-samples/aws-control-tower-automate-account-creation) 
- [AWS Serverless Ecommerce Platform ![GitHub Repo stars](https://img.shields.io/github/stars/aws-samples/aws-serverless-ecommerce-platform) ![GitHub last commit](https://img.shields.io/github/last-commit/aws-samples/aws-serverless-ecommerce-platform)](https://github.com/aws-samples/aws-serverless-ecommerce-platform)
- [Recurring Security Hub Summary Email ![GitHub Repo stars](https://img.shields.io/github/stars/aws-samples/aws-security-hub-summary-email) ![GitHub last commit](https://img.shields.io/github/last-commit/aws-samples/aws-security-hub-summary-email)](https://github.com/aws-samples/aws-security-hub-summary-email)
- [SQS dead letter queue replay with backoff and jitter ![GitHub Repo stars](https://img.shields.io/github/stars/aws-samples/amazon-sqs-dlq-replay-backoff) ![GitHub last commit](https://img.shields.io/github/last-commit/aws-samples/amazon-sqs-dlq-replay-backoff)](https://github.com/aws-samples/amazon-sqs-dlq-replay-backoff)
- [Tokenization and Encryption of Sensitive Data ![GitHub Repo stars](https://img.shields.io/github/stars/aws-samples/aws-serverless-tokenization) ![GitHub last commit](https://img.shields.io/github/last-commit/aws-samples/aws-serverless-tokenization)](https://github.com/aws-samples/aws-serverless-tokenization)
- [AWS ParallelCluster serverless API ![GitHub Repo stars](https://img.shields.io/github/stars/aws-samples/aws-parallelcluster-serverless-api) ![GitHub last commit](https://img.shields.io/github/last-commit/aws-samples/aws-parallelcluster-serverless-api)](https://github.com/aws-samples/aws-parallelcluster-serverless-api)
- [Amazon WorkMail Lambda Templates ![GitHub Repo stars](https://img.shields.io/github/stars/aws-samples/amazon-workmail-lambda-templates) ![GitHub last commit](https://img.shields.io/github/last-commit/aws-samples/amazon-workmail-lambda-templates)](https://github.com/aws-samples/amazon-workmail-lambda-templates)
- [S3 Glacier Bulk Retrieval ![GitHub Repo stars](https://img.shields.io/github/stars/aws-samples/s3-glacier-bulk-retrieval) ![GitHub last commit](https://img.shields.io/github/last-commit/aws-samples/s3-glacier-bulk-retrieval)](https://github.com/aws-samples/s3-glacier-bulk-retrieval)
- [AutoML with AutoGluon, Amazon SageMaker, and AWS Lambda ![GitHub Repo stars](https://img.shields.io/github/stars/aws-samples/automl-pipeline-with-autogluon-sagemaker-lambda) ![GitHub last commit](https://img.shields.io/github/last-commit/aws-samples/automl-pipeline-with-autogluon-sagemaker-lambda)](https://github.com/aws-samples/automl-pipeline-with-autogluon-sagemaker-lambda)
- [Processing ML Workloads asynchronously in Batch using SageMaker Batch Transform ![GitHub Repo stars](https://img.shields.io/github/stars/aws-samples/aws-asynchronous-ml-processing) ![GitHub last commit](https://img.shields.io/github/last-commit/aws-samples/aws-asynchronous-ml-processing)](https://github.com/aws-samples/aws-asynchronous-ml-processing)
- [Serverless Tracking Pixel ![GitHub Repo stars](https://img.shields.io/github/stars/aws-samples/aws-serverless-tracking-pixel) ![GitHub last commit](https://img.shields.io/github/last-commit/aws-samples/aws-serverless-tracking-pixel)](https://github.com/aws-samples/aws-serverless-tracking-pixel)
- [Serverless Reference Architecture: Real-time File Processing ![GitHub Repo stars](https://img.shields.io/github/stars/aws-samples/lambda-refarch-fileprocessing) ![GitHub last commit](https://img.shields.io/github/last-commit/aws-samples/lambda-refarch-fileprocessing)](https://github.com/aws-samples/lambda-refarch-fileprocessing)
- [Serverless Reference Architecture: IoT Backend ![GitHub Repo stars](https://img.shields.io/github/stars/aws-samples/lambda-refarch-iotbackend) ![GitHub last commit](https://img.shields.io/github/last-commit/aws-samples/lambda-refarch-iotbackend)](https://github.com/aws-samples/lambda-refarch-iotbackend)
- [AWS X-Ray Serverless Samples ![GitHub Repo stars](https://img.shields.io/github/stars/aws-samples/aws-xray-serverless-samples) ![GitHub last commit](https://img.shields.io/github/last-commit/aws-samples/aws-xray-serverless-samples)](https://github.com/aws-samples/aws-xray-serverless-samples)

## AWS Labs
More inspiration from AWS Labs, closer to production-ready. [Complete list of 100+ Labs solutions](https://github.com/awslabs?q=&type=&language=python&sort=stargazers).

- [AWS Control Tower Customizations ![GitHub Repo stars](https://img.shields.io/github/stars/awslabs/aws-control-tower-customizations) ![GitHub last commit](https://img.shields.io/github/last-commit/awslabs/aws-control-tower-customizations)](https://github.com/awslabs/aws-control-tower-customizations)
- [Serverless Data Lake Framework (SDLF) ![GitHub Repo stars](https://img.shields.io/github/stars/awslabs/aws-serverless-data-lake-framework) ![GitHub last commit](https://img.shields.io/github/last-commit/awslabs/aws-serverless-data-lake-framework)](https://github.com/awslabs/aws-serverless-data-lake-framework)
- [Media Insights Engine ![GitHub Repo stars](https://img.shields.io/github/stars/awslabs/aws-media-insights-engine) ![GitHub last commit](https://img.shields.io/github/last-commit/awslabs/aws-media-insights-engine)](https://github.com/awslabs/aws-media-insights-engine)
- [Serverless Transit Network Orchestrator ![GitHub Repo stars](https://img.shields.io/github/stars/awslabs/serverless-transit-network-orchestrator) ![GitHub last commit](https://img.shields.io/github/last-commit/awslabs/serverless-transit-network-orchestrator)](https://github.com/awslabs/serverless-transit-network-orchestrator)
- [Amazon Aurora Postgres Advanced Monitoring ![GitHub Repo stars](https://img.shields.io/github/stars/awslabs/amazon-aurora-postgres-monitoring) ![GitHub last commit](https://img.shields.io/github/last-commit/awslabs/amazon-aurora-postgres-monitoring)](https://github.com/awslabs/amazon-aurora-postgres-monitoring)
- [AWS Serverless Twitter Event Source ![GitHub Repo stars](https://img.shields.io/github/stars/awslabs/aws-serverless-twitter-event-source) ![GitHub last commit](https://img.shields.io/github/last-commit/awslabs/aws-serverless-twitter-event-source)](https://github.com/awslabs/aws-serverless-twitter-event-source)
- [Serverless Subtitles ![GitHub Repo stars](https://img.shields.io/github/stars/awslabs/serverless-subtitles) ![GitHub last commit](https://img.shields.io/github/last-commit/awslabs/serverless-subtitles)](https://github.com/awslabs/serverless-subtitles)
- [AWS Serverless Financial Functions ![GitHub Repo stars](https://img.shields.io/github/stars/awslabs/aws-serverless-financial-functions) ![GitHub last commit](https://img.shields.io/github/last-commit/awslabs/aws-serverless-financial-functions)](https://github.com/awslabs/aws-serverless-financial-functions)

## Related Awesome Lists
- [Awesome AWS ![GitHub Repo stars](https://img.shields.io/github/stars/donnemartin/awesome-aws) ![GitHub last commit](https://img.shields.io/github/last-commit/donnemartin/awesome-aws)](https://github.com/donnemartin/awesome-aws#readme)
- [Awesome Alexa ![GitHub Repo stars](https://img.shields.io/github/stars/miguelmota/awesome-amazon-alexa) ![GitHub last commit](https://img.shields.io/github/last-commit/miguelmota/awesome-amazon-alexa)](https://github.com/miguelmota/awesome-amazon-alexa#readme)
- [Awesome Amplify ![GitHub Repo stars](https://img.shields.io/github/stars/dabit3/awesome-aws-amplify) ![GitHub last commit](https://img.shields.io/github/last-commit/dabit3/awesome-aws-amplify)](https://github.com/dabit3/awesome-aws-amplify#readme)
- [Awesome AppSync ![GitHub Repo stars](https://img.shields.io/github/stars/aws/aws-appsync-community) ![GitHub last commit](https://img.shields.io/github/last-commit/aws/aws-appsync-community)](https://github.com/aws/aws-appsync-community#readme)
- [Awesome IAM ![GitHub Repo stars](https://img.shields.io/github/stars/kdeldycke/awesome-iam) ![GitHub last commit](https://img.shields.io/github/last-commit/kdeldycke/awesome-iam)](https://github.com/kdeldycke/awesome-iam#readme)
- [Awesome CDK ![GitHub Repo stars](https://img.shields.io/github/stars/kolomied/awesome-cdk) ![GitHub last commit](https://img.shields.io/github/last-commit/kolomied/awesome-cdk)](https://github.com/kolomied/awesome-cdk#readme)
- [Awesome CloudFormation ![GitHub Repo stars](https://img.shields.io/github/stars/aws-cloudformation/awesome-cloudformation) ![GitHub last commit](https://img.shields.io/github/last-commit/aws-cloudformation/awesome-cloudformation)](https://github.com/aws-cloudformation/awesome-cloudformation#readme)
- [Awesome EC2 Spot ![GitHub Repo stars](https://img.shields.io/github/stars/nadaahm/awesome-ec2-spot) ![GitHub last commit](https://img.shields.io/github/last-commit/nadaahm/awesome-ec2-spot)](https://github.com/nadaahm/awesome-ec2-spot)
- [Awesome ECS ![GitHub Repo stars](https://img.shields.io/github/stars/nathanpeck/awesome-ecs) ![GitHub last commit](https://img.shields.io/github/last-commit/nathanpeck/awesome-ecs)](https://github.com/nathanpeck/awesome-ecs#readme)
- [Awesome EKS ![GitHub Repo stars](https://img.shields.io/github/stars/realvz/awesome-eks) ![GitHub last commit](https://img.shields.io/github/last-commit/realvz/awesome-eks)](https://github.com/realvz/awesome-eks#readme)
- [Awesome Lambda Layers ![GitHub Repo stars](https://img.shields.io/github/stars/mthenw/awesome-layers) ![GitHub last commit](https://img.shields.io/github/last-commit/mthenw/awesome-layers)](https://github.com/mthenw/awesome-layers)
- [Awesome AWS Research ![GitHub Repo stars](https://img.shields.io/github/stars/randyridgley/awesome-aws-research) ![GitHub last commit](https://img.shields.io/github/last-commit/randyridgley/awesome-aws-research)](https://github.com/randyridgley/awesome-aws-research#readme)
- [Awesome AWS Security ![GitHub Repo stars](https://img.shields.io/github/stars/jassics/awesome-aws-security) ![GitHub last commit](https://img.shields.io/github/last-commit/jassics/awesome-aws-security)](https://github.com/jassics/awesome-aws-security)
- [AWS Security Arsenal ![GitHub Repo stars](https://img.shields.io/github/stars/toniblyx/my-arsenal-of-aws-security-tools) ![GitHub last commit](https://img.shields.io/github/last-commit/toniblyx/my-arsenal-of-aws-security-tools)](https://github.com/toniblyx/my-arsenal-of-aws-security-tools)
- [Awesome Cloud Security ![GitHub Repo stars](https://img.shields.io/github/stars/RyanJarv/awesome-cloud-sec) ![GitHub last commit](https://img.shields.io/github/last-commit/RyanJarv/awesome-cloud-sec)](https://github.com/RyanJarv/awesome-cloud-sec#readme)
- [AWSome Websites ![GitHub Repo stars](https://img.shields.io/github/stars/StanForever/AWSome-websites) ![GitHub last commit](https://img.shields.io/github/last-commit/StanForever/AWSome-websites)](https://github.com/StanForever/AWSome-websites)
- [The Open Guide to Amazon Web Services ![GitHub Repo stars](https://img.shields.io/github/stars/open-guides/og-aws) ![GitHub last commit](https://img.shields.io/github/last-commit/open-guides/og-aws)](https://github.com/open-guides/og-aws)

<img src="https://ga-beacon.appspot.com/UA-191636151-1/awesome-chalice?useReferer&pixel">
