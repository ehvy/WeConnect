import express from 'express';
import bodyParser from 'body-parser';
import expressValidator from 'express-validator';
import router from './server/routes/index';


const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(expressValidator());

app.use('/', router);


export default app;
