import Koa from 'koa';

import exams from './exams';

/**
 * Sets up our routes for the app.
 *
 * @param server The Koa server.
 */
export default (server: Koa): void => {
  server.use(exams.middleware());
  // server.use(students.middleware());
};
