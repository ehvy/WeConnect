import express from 'express';
import bodyParser from 'body-parser';
import expressValidator from 'express-validator';
import router from './routes/index';


const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(expressValidator());

app.use('/', router);


app.listen(3000, () => {
  console.log('Server started at port 3000...');
});

export default app;
