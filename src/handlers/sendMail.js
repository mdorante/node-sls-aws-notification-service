import AWS from "aws-sdk";

const ses = new AWS.SES({ region: process.env.REGION });
const sesEmailAddress = process.env.EMAIL;

async function sendMail(event, context) {
  const record = event.Records[0];

  const email = JSON.parse(record.body);
  const { subject, body, recipient } = email;

  const params = {
    Source: sesEmailAddress,
    Destination: {
      ToAddresses: [recipient],
    },
    Message: {
      Subject: {
        Data: subject,
      },
      Body: {
        Text: {
          Data: body,
        },
      },
    },
  };

  try {
    const result = await ses.sendEmail(params).promise();
    console.log(result);
    return result;
  } catch (error) {
    console.error(error);
  }
}

export const handler = sendMail;
