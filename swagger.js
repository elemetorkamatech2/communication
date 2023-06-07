// eslint-disable-next-line import/no-extraneous-dependencies
const swaggerAutogen = require('swagger-autogen');

const outputFile = './swagger_output.json';
const endpointsFiles = ['./api/routes/messageRouter'];
const doc = {
  tags: [
    {
      name: 'messages',
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
swaggerAutogen(outputFile, endpointsFiles, doc).then(() => {
  // eslint-disable-next-line global-require
  require('./app');
});
