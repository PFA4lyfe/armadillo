import express from 'express';
const app = express();
import cookieParser from 'cookie-parser';
import path from 'path';
const PORT = 3000;
const __dirname = import.meta.dirname;
import apiRouter from './routes/api.js';
import cookieController from './controllers/cookieController.js';
import userController from './controllers/userController.js';
import sessionController from './controllers/sessionController.js';

/**
 * handle parsing request body
 */
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// BOTTOM 3 FOR PRODUCTION CODE
app.get('/assets/index-kqKc0O6G.js', (req, res) => {
  return res.status(200).sendFile(path.join(__dirname, '../dist/assets/index-kqKc0O6G.js'));
});  

app.get('/assets/index-BkU-0Mpb.css', (req, res) => {
  return res.status(200).sendFile(path.join(__dirname, '../dist/assets/index-BkU-0Mpb.css'));
});  

// serve index.html on home page
app.get('/', (req, res) => {
  return res.status(200).sendFile(path.join(__dirname, '../dist/index.html'));
});  

// handle requests for static files
//app.use('/src', express.static(path.resolve(__dirname, '../src')));

// signup
app.post('/api/signup', userController.createUser, (req, res) => {
  res.status(200).json(res.locals.user);
});

/*
* login
*/
app.post('/api/login', userController.verifyUser, cookieController.setSSIDCookie, sessionController.startSession, (req, res) => {
  res.status(200).json({
    success: true,
    ...res.locals.user[0],
  });
});

// verify logged in
app.get('/api/isLoggedIn/', sessionController.isLoggedIn, (req, res) => {
  res.status(200).json({success: res.locals.isLoggedIn});
});

// log out
app.get('/api/logout', userController.logoutUser, (req, res) => {
  res.status(200).json({a: 1});
})

//define route handlers
app.use('/api/', apiRouter);

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
