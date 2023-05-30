const swaggerJSDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const options = {
	swaggerDefinition: {
		openapi: '3.0.0',
		info: {
			title: 'communication multi service',
			version: '1.0.0',
		},
		servers: [
			{
				url: 'http://localhost:3000',
				description: 'communication multi service server',
			},

		],
	},
	apis: ['./routes/*.js'],
};

const specs = swaggerJSDoc(options);

module.exports = (app) => {
	app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));
};
