// eslint-disable-next-line import/no-extraneous-dependencies
import swaggerAutogen from 'swagger-autogen';

const outputFile = './swagger_output.json';
const endpointsFiles = ['./api/routes/messageRouter'];
const doc = {
  tags: [
    {
      name: 'message',
      description: 'Operations for messages',
    },
  ],
  definitions: {
    addMessage: {
      $userCode: 'string',
      $subject: 'string',
      $body: 'string',
    },
  },
};
swaggerAutogen(outputFile, endpointsFiles, doc);
