import express from 'express';
const app = express();
import path from 'path';
const PORT = 3000;
const __dirname = import.meta.dirname;
import apiRouter from './routes/api.js';
import cookieController from './controllers/cookieController.js';
import userController from './controllers/userController.js';
// import sessionController from './controllers/sessionController.js';

/**
 * handle parsing request body
 */
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// statically serve everything in the build folder on the route '/build'
// app.use('/build', express.static(path.join(__dirname, '../build')));

// serve index.html on home page
app.get('/', (req, res) => {
  return res.status(200).sendFile(path.join(__dirname, '../index.html'));
});  

// signup
app.post('/signup', userController.createUser, (req, res) => {
  res.status(200).json(res.locals.user);
});

/*
* login
*/
app.post('/login', userController.verifyUser, cookieController.setSSIDCookie, (req, res) => {
  // res.status(200).redirect('/secret');
  res.status(200).json({login: 'success'});
});


//define route handlers
app.use('/api/', apiRouter);

// handle requests for static files
app.use(express.static(path.resolve(__dirname, '../src')));

// catch-all route handler for any requests to an unknown route
app.use('*', (req, res) => res.sendStatus(404));

app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 500,
    message: { err: 'An error occurred' },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

/**
 * start server
 */
app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}...`);
});

export default app;
