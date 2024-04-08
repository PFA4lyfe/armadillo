import Flights from '../components/FlightsSearch.jsx';
import FlightList from '../components/FlightList.jsx';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import '/src/scss/styles.css';
import splash from '/src/assets/images/splash-image.jpg';
import { Navigate } from 'react-router-dom';
import { setIsLoggedIn, setFavorite } from '../slices/flightSlice.js';

const Home = () => {
  const { searchArr, isLoggedIn, favorites } = useSelector((state) => state.flight);

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

      // if user is not logged in, redirect to login
      if (!isLoggedIn) {
        return (<Navigate to='/login/' />);
      }
    }

    isLoggedIn();
  });

  // if first time rendering, get user's favorite flights
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

  return (
    <div>
      <img className='splash' src={splash} />
      <Flights />
      <FlightList
        flightArr={searchArr}
        title='Flight Search Results'
        buttonText='Add to Favorites'
        isAdd={true}
      />
    </div>
  );
};

export default Home;
