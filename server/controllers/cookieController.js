import supabase from "../models/armadilloModel.js";

const cookieController = {};

/**
* setSSIDCookie - store the user id in a cookie
*/
cookieController.setSSIDCookie = async (req, res, next) => {
  // write code here

  const {data, error} = await supabase
    .from('users')
    .select()
    .eq('username', req.body.username);

  if (error) {
    return next({
        log: 'problem in setSSIDCookie',
        message: {err: 'cannot create SSID cookie'}
    })
  }

  res.locals.id = await data[0].id.toString();

  res.cookie('ssid', res.locals.id, {
    maxAge: 3600000,
    secure: true,
    httpOnly: true,
  });

  return next();
}

export default cookieController;
