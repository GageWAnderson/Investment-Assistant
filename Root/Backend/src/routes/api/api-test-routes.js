import  Router  from 'express';
import bodyParser from 'body-parser';

export const testRouter = new Router();

testRouter.get('/api/test', (req,res,next) => {
    res.send('Hello');
    return;
});

testRouter.post('/api/test/post', (req,res,next) => {
    res.send('Post Request Sucessful!');
    return;
});
