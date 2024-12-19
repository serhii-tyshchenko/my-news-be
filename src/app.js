const express = require('express');
const cors = require('cors');
const swaggerUi = require('swagger-ui-express');

const indexRouter = require('./routes/index');
const providersRouter = require('./routes/providers');
const rssRouter = require('./routes/rss');
const swaggerSpec = require('./docs/swaggerDef');
const { PORT } = require('./common/constants');

const swaggerUICss =
  'https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/4.3.0/swagger-ui.min.css';

const app = express();

app.use(cors());
app.use(express.json());

app.use(
  '/api-docs',
  swaggerUi.serve,
  swaggerUi.setup(swaggerSpec, { customCssUrl: swaggerUICss })
);
app.use('/', indexRouter);
app.use('/rss', rssRouter);
app.use('/providers', providersRouter);

app.listen(PORT, () =>
  console.log(`Server started on http://localhost:${PORT}`)
);
