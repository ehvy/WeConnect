import express from 'express';
import bodyParser from 'body-parser';
import expressValidator from 'express-validator';
import swaggerUi from 'swagger-ui-express';
import YAML from 'yamljs';
import router from './server/routes/index';


const app = express();
const swaggerDocument = YAML.load(`${process.cwd()}/swagger.yaml`);

const port = parseInt(process.env.PORT, 10) || 3000;
app.set('port', port);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(expressValidator());

app.use('/', router);

app.listen(port, () => {
  console.log('Server started on port 3000...');
});

export default app;
