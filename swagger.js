const swaggerAutogen = require('swagger-autogen');
const outputFile = './swagger_output.json';
const endpointsFiles = ['./routes/messageRouter'];
const doc = {
  definitions: {
    properties: {
      addMessage: {
        userCode: {
          type: "string"
        },
        subject: {
          type: "string"
        },
        body: {
          type: "string"
        }
      },
    }
  },
  components: {
    schemas: {
      message: {
        properties: {
          userCode: {
            type: "string"
          },
          subject: {
            type: "string"
          },
          body: {
            type: "string"
          }
        }
      }
    }
  }
}
swaggerAutogen(outputFile, endpointsFiles, doc).then(() => {
  require('./app');
});