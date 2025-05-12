const express = require('express');
const cors = require('cors');
const swaggerUi = require('swagger-ui-express');
require('dotenv').config();

const indexRouter = require('./routes/index');
const providersRouter = require('./routes/providers');
const rssRouter = require('./routes/rss');
const swaggerSpec = require('./docs/swaggerDef');
const { PORT } = require('./common/constants');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
app.use('/', indexRouter);
app.use('/rss', rssRouter);
app.use('/providers', providersRouter);

app.listen(PORT, () =>
  console.log(`Server started on http://localhost:${PORT}`)
);
