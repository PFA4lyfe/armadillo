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
// userController.verifyUser = async (req, res, next) => {

//   // helper function to compare input pw with salted + hashed pw
//   const comparePasswords = (plainTextPassword, hashedPasswordFromDatabase) => {
//     return bcrypt.compare(plainTextPassword, hashedPasswordFromDatabase)
//       .then ((match) => {
//         if (match) return true;
//         else {
//           console.log('incorrect pw')
//           return false;
//         }
//       })
//       .catch (err => {
//         console.log('error in compare');
//         return false;
//       });
//   }

//   // write code here
//   try {
//     const response = await User.find({username: req.body.username});
//     const pwMatch = await comparePasswords(req.body.password, response[0].password);

//     if (response.length === 0 || !(pwMatch)) {
//       res.locals.goToSign = true;
//       return next({
//         log: 'user does not exist or incorrect pw',
//         message: {err: 'need to sign up'}
//       })
//     }
    
//     return next();
//   } catch (err) {
//     return next({
//       log: 'problem in verifyUser',
//       message: {err: 'cannot verify user'}
//     })
//   }
// };

export default userController;
