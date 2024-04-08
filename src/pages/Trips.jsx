// import Flights from './components/FlightsSearch.jsx'\
import { useSelector, useDispatch } from 'react-redux';
import FlightList from '../components/FlightList.jsx';
import { useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { setIsLoggedIn, setFavorite } from '../slices/flightSlice.js';

const Trips = (props) => {
  const { favorites, isLoggedIn} = useSelector((state) => state.flight);

  const dispatch = useDispatch();

  // check if user session is up
  useEffect(() => {
    console.log('checking session')
    const checkSession = async () => {
      const response = await fetch(`/api/isLoggedIn/`, {
        method: 'GET'
      })

      const data = await response.json();

      console.log(data);

      if (!data.success) {
        dispatch(setIsLoggedIn(false));
      } else {
        dispatch(setIsLoggedIn(true));
      }
    }

    checkSession();
  });

  // if first time rendering, get user's favorite flights
  useEffect(() => {
    // using ssid cookie to grab id data for which user to grab favorites
    async function fetchData() {
        console.log('grabbing favorite flights')
        const response = await fetch(`/api/flights/`, {
            method: 'GET'
        });
        const data = await response.json();
    
        dispatch(setFavorite(data));
    }
    
    if (favorites.length === 0) fetchData();
  });

  // if user is not logged in, redirect to login
  if (!isLoggedIn) {
    return (<Navigate to='/login/' />);
  }

  console.log(favorites);
  return (
    <div>
      <h1>Trips</h1>
      <FlightList 
        flightArr={favorites} 
        title='Favorites' 
        buttonText='Remove from Favorites'
        isAdd={false}
      />
    </div>
  );
};

export default Trips;
