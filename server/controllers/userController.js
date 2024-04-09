import supabase from '../models/armadilloModel.js';
import bcrypt from 'bcryptjs';
const SALT_WORK_FACTOR = 10;

const userController = {};

/**
* createUser - create and save a new User into the database.
*/
userController.createUser = async (req, res, next) => {
  // write code here
  const {name, username, password} = req.body;

  if (!name || !username || !password) {
    return next({
      log: 'invalid inputs on createUser method',
      message: {err: 'invalid inputs for creating user'}
    })
  }

  const salt = await bcrypt.genSalt(SALT_WORK_FACTOR);
  const pwEncrypt = await bcrypt.hash(password, salt);
  const {data, error} = await supabase
    .from('users')
    .insert({
      name,
      username,
      password: pwEncrypt,
    })
    .select();
  
  res.locals.user = data;
  
  if (error) {
    return next({
      log: 'problem in addUser controller',
      message: {err: error}
    })
  }

  return next();
};

/**
* verifyUser - Obtain username and password from the request body, locate
* the appropriate user in the database, and then authenticate the submitted password
* against the password stored in the database.
*/
userController.verifyUser = async (req, res, next) => {

  // helper function to compare input pw with salted + hashed pw
  const comparePasswords = (plainTextPassword, hashedPasswordFromDatabase) => {
    return bcrypt.compare(plainTextPassword, hashedPasswordFromDatabase)
      .then ((match) => {
        if (match) return true;
        else {
          console.log('incorrect pw')
          return false;
        }
      })
      .catch (err => {
        console.log('error in compare');
        return false;
      });
  }

  // grab request body for inputted username and pw
  const {username, password} = req.body;

  // grab user for comparison
  const {data, error} = await supabase
    .from('users')
    .select()
    .eq('username', username);
  
  if (error || data.length === 0) {
    return next({
      log: 'problem in getting user for verification',
      message: {err: 'cannot get user for verification'}
    })
  } 

  const pwMatch = await comparePasswords(password, data[0].password);

  if (!pwMatch) {
    return next({
      log: 'pw does not match',
      message: {err: 'incorrect pw'}
    })
  }

  res.locals.user = data;

  return next();
};

userController.logoutUser = async (req, res, next) => {

  // delete all session rows (since we logged out)
  const {data, error} = await supabase
    .from('sessions')
    .delete()
    .neq('cookieId', '0');


  if (error) {
    return next({
      log: 'problem in logoutUser',
      message: {err: 'cannot logout'}
    })
  }

  res.clearCookie('ssid');
  return next();
}

export default userController;
