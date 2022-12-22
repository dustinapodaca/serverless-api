# Project: AWS API, Dynamo and Lambda: Serverless REST API
### Author: Dustin Apodaca
---
## Problem Domain

- Create a single-resource serverless REST API using a domain model of your choosing, constructed using AWS Cloud Services.
  - CRUD Lambda Functions found [here](./lambdaFunctions/).

## Processes

### Process for DynamoDB Table Creation

- Create a new table in DynamoDB.
- Table name `people-table`.
- Create schema for table.
  - Partition key `id` of type `string`.
  - Attribute `name` of type `string`.
  - Attribute `age` of type `number`.
  - Attribute `phone` of type `string`.

### Process for Lambda Function Creation

- Create a new Lambda function.
  - handleCreate
  - handleRead
  - handleReadOne
  - handleUpdate
  - handleDelete
- Create a new role for the Lambda function.
- Add the DynamoDB `AmazonDynamoDBFullAccess` policy to the role.

### Process for API Gateway Creation

- Create a new AWS API Gateway.
- Create a new resource.
  - Resource name `people`.
  - Create new methods.
    - Method type `POST`.
      - Integration type `Lambda Function`.
      - Lambda function `handleCreate`.
    - Method type `GET`.
      - Integration type `Lambda Function`.
      - Lambda function `handleRead`.
  - Create new resource for {id}
    - Method type `GET`.
      - Integration type `Lambda Function`.
      - Lambda function `handleReadOne`.
    - Method type `PUT`.
      - Integration type `Lambda Function`.
      - Lambda function `handleUpdate`.
    - Method type `DELETE`.
      - Integration type `Lambda Function`.
      - Lambda function `handleDelete`.
  - Test Functions

