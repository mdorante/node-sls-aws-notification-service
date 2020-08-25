# node-sls-aws-notification-service

An email notification service for Serverless apps.

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

### 3. Set up the Source email for SES

The Source email is the email address you want to send emails from (it must be a verified SES email address).

```
./setup_email.sh <your email address>
```

### 4. Deploy the stack

```
sls deploy -v
```

You are ready to go!
