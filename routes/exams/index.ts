import koaRouter from 'koa-joi-router';

import getExams from './exams';

const exams = koaRouter();
exams.prefix('/exams');

exams.use(getExams.middleware());

export default exams;
