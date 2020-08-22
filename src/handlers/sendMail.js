import AWS from "aws-sdk";

const ses = new AWS.SES({ region: process.env.REGION });
const sesEmailAddress = process.env.EMAIL;

async function sendMail(event, context) {
  const params = {
    Source: sesEmailAddress,
    Destination: {
      ToAddresses: ["mdorante10@gmail.com"],
    },
    Message: {
      Subject: {
        Data: "Test SES",
      },
      Body: {
        Text: {
          Data: "Hello from SES!",
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
