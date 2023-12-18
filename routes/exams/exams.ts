import koaRouter, { Joi } from 'koa-joi-router';
import { TestScoresClient } from '../../backends/TestScoresClient';

const getExams = koaRouter();
// TODO: Add logic to fetch all exams

getExams.route({
  method: 'get',
  path: '/',
  handler: [
    async (ctx): Promise<void> => {
      const client = new TestScoresClient();
      ctx.body = await client.retrieveScores();
    },
  ],
});

export default getExams;
