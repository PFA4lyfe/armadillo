import supabase from '../models/armadilloModel.js';
const sessionController = {};

// /**
// * isLoggedIn - find the appropriate session for this request in the database, then
// * verify whether or not the session is still valid.
// */
sessionController.isLoggedIn = async (req, res, next) => {

  res.locals.isLoggedIn = false;
  res.locals.user = {};

  // if no ssid, send to login
  if (!req.cookies.ssid) return next();


  // grab cookie ssid
  const id = req.cookies.ssid;

  // write code here
  const {data, error} = await supabase
    .from('sessions')
    .select()
    .eq('cookieId', id);

    if (error) {
        return next({
            log: 'problem in isLoggedIn',
            message: {err: 'cannot verify log in session'}
        })
    }

    // if session not found, clear any ssid cookies it gave us and respond with false
    if (data.length === 0) {
        res.clearCookie('ssid');
    } else {
      res.locals.isLoggedIn = true;
      res.locals.user = data;

      // grab username of logged in user to update display username
      const usernameData = await supabase
        .from('users')
        .select()
        .eq('id', res.locals.user[0].cookieId);

      res.locals.user[0].username = usernameData.data[0].username;
    }

    return next();
};

/**
* startSession - create and save a new Session into the database.
*/
sessionController.startSession = async (req, res, next) => {
  //write code here
  const {data, error} = await supabase
    .from('sessions')
    .insert({
        cookieId: res.locals.id
    })
    .select();

  if (error) {
      return next({
          log: 'problem in startSession',
          message: {err: 'cannot start session'}
      })
    }

  res.locals.session = data;

  return next();

};

export default sessionController;
