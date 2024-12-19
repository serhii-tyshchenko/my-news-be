const swaggerJSDoc = require('swagger-jsdoc');
const path = require('path');

const routerPath = path.join(__dirname, 'components/paths/*.yaml');
const schemaPath = path.join(__dirname, 'components/schemas/*.yaml');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'My News API',
      version: '1.3.0',
      description: 'API documentation for My News',
    },
    servers: [
      {
        url: 'http://localhost:4000',
      },
    ],
  },
  apis: [routerPath, schemaPath],
};

const swaggerSpec = swaggerJSDoc(options);

module.exports = swaggerSpec;
