import supabase from '../models/armadilloModel.js';
const sessionController = {};

// /**
// * isLoggedIn - find the appropriate session for this request in the database, then
// * verify whether or not the session is still valid.
// */
sessionController.isLoggedIn = async (req, res, next) => {

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

    res.locals.isLoggedIn = true;

    // if session not found, clear any ssid cookies it gave us and respond with false
    if (data.length === 0) {
        res.clearCookie('ssid');
        res.locals.isLoggedIn = false;
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
