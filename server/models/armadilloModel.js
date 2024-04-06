// import {Pool}  from 'pg';
// import pg from 'pg';

// const PG_URI = 'postgres://postgres.wmatofpfftfdkyceowna:VQc4egVQBYNIFJ43@aws-0-us-west-1.pooler.supabase.com:5432/postgres';

// create a new pool here using the connection string above
// const pool = new pg.Pool({
//   connectionString: PG_URI
// });

// Adding some notes about the database here will be helpful for future you or other developers.
// Schema for the database can be found below:
// https://github.com/CodesmithLLC/unit-10SB-databases/blob/master/docs/assets/images/schema.png

// We export an object that contains a property called query,
// which is a function that returns the invocation of pool.query() after logging the query
// This will be required in the controllers to be the access point to the database
// const db = {
//   query: (text, params, callback) => {
//     console.log('executed query', text);
//     return pool.query(text, params, callback);
//   }
// };

// export default db;

// import postgres from 'postgres';

// const connectionString = 'postgres://postgres.wmatofpfftfdkyceowna:VQc4egVQBYNIFJ43@aws-0-us-west-1.pooler.supabase.com:5432/postgres';
// const sql = postgres(connectionString);

// export default sql;


import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://wmatofpfftfdkyceowna.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndtYXRvZnBmZnRmZGt5Y2Vvd25hIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTIzNjgzOTQsImV4cCI6MjAyNzk0NDM5NH0.hU3wy6gSy6rzZUJqsN7PViqWo2BVQ9eP_SuY-FLpdiA';
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase;