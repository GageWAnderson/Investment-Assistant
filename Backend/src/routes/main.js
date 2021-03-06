// //index.js is the master routes file where the routes
// //for all the separate API components are imported
// import { authRouter } from './user-routes.js'
// import { testRouter } from './api-test-routes.js'

// export const allRouters = {
//     authRouter,
//     testRouter
// }
import Router from 'express';
import bodyParser from 'body-parser';

import { apiRouter } from './api_routes.js'
import { authRouter } from './auth_routes.js'
import { stockRouter } from './stock_routes.js'

export const mainRouter = new Router();

mainRouter.use('/api', apiRouter);
mainRouter.use('/auth', authRouter);
mainRouter.use('/stock', stockRouter);
