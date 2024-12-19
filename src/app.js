const express = require('express');
const cors = require('cors');
const swaggerUi = require('swagger-ui-express');

const indexRouter = require('./routes/index');
const providersRouter = require('./routes/providers');
const rssRouter = require('./routes/rss');
const swaggerSpec = require('./docs/swaggerDef');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
app.use('/', indexRouter);
app.use('/rss', rssRouter);
app.use('/providers', providersRouter);

const PORT = process.env.PORT || 4000;

app.listen(PORT, () =>
  console.log(`Server started on http://localhost:${PORT}`)
);
