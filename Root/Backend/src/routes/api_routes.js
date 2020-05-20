import Router from 'express';
import bodyParser from 'body-parser';
import "isomorphic-fetch"

export const apiRouter = new Router();

apiRouter.get('/test', (req,res,next) => {

	fetch('https://jsonplaceholder.typicode.com/todos')
	  .then(response => response.json())
	  .then(data => res.send(JSON.stringify(data)));

});

apiRouter.post('/test', (req,res,next) => {
    res.send('Post Request Sucessful!');
});
