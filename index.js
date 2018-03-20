import env from 'dotenv';
import http from 'http';

import app from './server/app';


env.config();
const port = parseInt(process.env.PORT, 10) || 3000;
app.set('port', port);

const server = http.createServer(app);
server.listen(port, () => {
  console.log('Server started on port 3000...');
});
