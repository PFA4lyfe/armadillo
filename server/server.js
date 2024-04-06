import express from 'express';
const app = express();
import path from 'path';
const PORT = 3000;
const __dirname = import.meta.dirname;
import supabase from '../server/models/armadilloModel.js';
import apiRouter from './routes/api.js';

//define route handlers
app.use('/', apiRouter);

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
