import supabase from '../models/armadilloModel.js';
const apiController = {};

apiController.getUser = async (req, res, next) => {
  const id = req.params.id;

  const { data, error } = await supabase
  .from('users')
  .select('*')
  .eq('id', id);

  if (error) {
    return next({
      log: 'problem in getUser controller',
      message: {err: error}
    })
  }

  res.locals.user = data;

  return next();
}

apiController.getUserFlights = async (req, res, next) => {
    const id = req.cookies.ssid;
  
    const { data, error } = await supabase
    .from('user_flights')
    .select('*')
    .eq('user_id', id);
  
    if (error) {
      return next({
        log: 'problem in getUserFlight controller',
        message: {err: error}
      })
    }
  
    res.locals.flights = data;
  
    return next();
}

apiController.addUserFlight = async (req, res, next) => {

  console.log('adding to favorites...')
  // grab properties from request body
  const {dest_city, dep_city, dep_date, ret_date, price, airline, num_travelers, user_id} = req.body;

  // insert into favorites DB for that user
  const { data, error } = await supabase
  .from('user_flights')
  .insert({
    dest_city,
    dep_city,
    dep_date,
    ret_date,
    price,
    airline,
    num_travelers,
    user_id,
  })
  .select();
  
  if (error) {
    console.log(error);
    return next({
      log: 'problem in addUserFlight controller',
      message: {err: error}
    })
  }
  
  res.locals.flight = data[0];
  
  return next();
}

apiController.deleteUserFlight = async (req, res, next) => {
    const id = req.params.id;
    
    const { error } = await supabase
    .from('user_flights')
    .delete()
    .eq('id', id);
    
    if (error) {
      return next({
        log: 'problem in deleteUserFlight controller',
        message: {err: error}
      })
    }
    
    return next();
}

export default apiController;

