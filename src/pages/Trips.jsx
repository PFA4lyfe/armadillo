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
    const isLoggedIn = async () => {
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

    isLoggedIn();
  });

  // if first time rendering, get user's favorite flights (done already in home page, but just in case they go straight to this page)
  useEffect(() => {
    // using ssid cookie to grab id data for which user to grab favorites
    async function fetchData() {
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

  return (
    <div>
      <h1>Trips</h1>
      <FlightList flightArr={favorites} title='Favorites' buttonText='Remove from Favorites' />
    </div>
  );
};

export default Trips;
