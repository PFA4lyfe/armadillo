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

// serve all static dist files on production build
app.use('/assets', express.static(path.resolve(__dirname, '../dist/assets/')));

// serve index.html on home page
app.get('/', (req, res) => {
  return res.status(200).sendFile(path.join(__dirname, '../dist/index.html'));
});  

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
  res.status(200).json({
    success: res.locals.isLoggedIn,
    ...res.locals.user[0],
  });
});

// log out
app.get('/api/logout', userController.logoutUser, (req, res) => {
  res.status(200).json({a: 1});
})

//define route handlers
app.use('/api/', apiRouter);


// supply index.html for all other requests, which can route to specific pages or 404 page
app.get('*', (req, res) => {
  return res.status(200).sendFile(path.join(__dirname, '../dist/index.html'));
});  

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
