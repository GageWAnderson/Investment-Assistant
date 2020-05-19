import Router from 'express';
import bodyParser from 'body-parser';

export const apiRouter = new Router();

apiRouter.get('/test', (req,res,next) => {
    res.send('Get Request Sucessful!');
});

apiRouter.post('/test', (req,res,next) => {
    res.send('Post Request Sucessful!');
});
