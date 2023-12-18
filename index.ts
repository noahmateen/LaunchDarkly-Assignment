import Koa from 'koa';

import logger from 'koa-logger';
import routes from './routes/index';

const server = new Koa();

// middlewares

server.use(logger());

routes(server);

server.listen(3000);
