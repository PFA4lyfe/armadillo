// import Flights from './components/FlightsSearch.jsx'\
import { useSelector, useDispatch } from 'react-redux';
import FlightList from '../components/FlightList.jsx';
import { useEffect } from 'react';
import { setFavorite } from '../slices/flightSlice.js';
import { Navigate } from 'react-router-dom';
import { setIsLoggedIn } from '../slices/flightSlice.js';

const Trips = (props) => {
  const { favorites, isLoggedIn, id } = useSelector((state) => state.flight);

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

  // if first time rendering, get flights from use
  useEffect(() => {
    async function fetchData() {
        const response = await fetch(`/api/flights/${id}`, {
            method: 'GET'
        });
        const data = await response.json();
        console.log(data);
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
