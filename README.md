# node-sls-aws-notification-service

A notification service for Serverless apps.

You will need:

- An AWS account
- Node v12.x
- Serverless SDK

## Getting started

### 1. Generate a Serverless project or clone this repo

```
sls create --name notification-service --template-url https://github.com/mdorante/node-sls-aws-notification-service
```

```
git clone git@github.com:mdorante/node-sls-aws-notification-service.git
```

### 2. Install node dependencies

```
cd notification-service
npm install
```

### 3. Deploy the stack

```
sls deploy -v
```

You are ready to go!
