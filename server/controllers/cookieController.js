// const cookieController = {};
// const User = require('../models/userModel');

// /**
// * setCookie - set a cookie with a random number
// */
// cookieController.setCookie = (req, res, next) => {
//   // write code here
//   res.cookie('codesmith', 'hi', {
//     secure: true,
//     maxAge: 3600000,
//     httpOnly: true
//   });

//   res.cookie('secret', Math.floor(Math.random() * 100), {
//     maxAge: 3600000,
//     secure: true,
//     httpOnly: true
//   });
//   return next();
// }

// /**
// * setSSIDCookie - store the user id in a cookie
// */
// cookieController.setSSIDCookie = async (req, res, next) => {
//   // write code here
//   try {
//     const response = await User.find({username: req.body.username});
//     res.locals.id = response[0]._id.toString();

//     res.cookie('ssid', res.locals.id, {
//       maxAge: 3600000,
//       secure: true,
//       httpOnly: true
//     });

//     return next();
//   }
//   catch (err) {
//     return next({
//       log: 'problem in setSSIDCookie',
//       message: {err: 'cannot set SSID cookie'}
//     })
//   }
// }

// export default cookieController;
