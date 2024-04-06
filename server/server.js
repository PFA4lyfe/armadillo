import express from 'express';
const app = express();
import path from 'path';
const PORT = 3000;
const __dirname = import.meta.dirname;
import supabase from '../server/models/armadilloModel.js';

/**
 * handle requests for static files
 */
app.use(express.static(path.resolve(__dirname, '../src')));

app.get('/', async (req, res) => {
    // db.query('SELECT * FROM Users;')
    //   .then(response => console.log(response.rows))
    //   .then(() => res.status(200).json({a: 1}));


    try {
      const {data, error} = await supabase
      .from('kids')
      .select();
    
      if (supabase) {
        console.log(data);
      }
      if (error) {
        console.log(error);
      }
      // res.locals.result = await users;

      // console.log('result', res.locals.result);

      supabase.from('persons').select()
        .then(resp => console.log(resp));

      res.status(200).json(data);
    } catch(error) {
      console.log('failed')
      res.status(404).json(error);
    }
});

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
