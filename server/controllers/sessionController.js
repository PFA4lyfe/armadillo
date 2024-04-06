// const Session = require('../models/sessionModel');

// const sessionController = {};

// /**
// * isLoggedIn - find the appropriate session for this request in the database, then
// * verify whether or not the session is still valid.
// */
// sessionController.isLoggedIn = async (req, res, next) => {
//   // write code here
//   try {
//     const response = await Session.find({cookieId: req.cookies.ssid});
//     if (response.length === 0) {
//       res.locals.goToSign = true;
//       return next({
//         log: 'no session found in isLoggedIn',
//         message: {err: 'no session found'}
//       })
//     }
//     return next();
//   }
//   catch (err) {
//     return next(err);
//   }
// };

// /**
// * startSession - create and save a new Session into the database.
// */
// sessionController.startSession = async (req, res, next) => {
//   //write code here
//   try {
//     const response = await Session.create({cookieId: res.locals.id});
//     return next();
//   }
//   catch (err) {
//     return next({
//       log: 'error in startSession',
//       message: {err: 'problem creating session'}
//     })
//   }

// };

// export default sessionController;
