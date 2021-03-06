# node-sls-aws-notification-service

An email notification service for Serverless apps.

You can try it out following the steps from the "Setup" section below.

You will need:

- An AWS account
- Node v12.x

## Setup

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

### 3. Set up the Source email for SES

The Source email is the email address you want to send emails from (it must be a verified SES email address).

```
./setup_email.sh <your email address>
```

### 4. Deploy the stack

```
sls deploy -v
```

## Teardown

When you are down checking the app out, you can remove all AWS resources in just one step:

```
sls remove -v
```
