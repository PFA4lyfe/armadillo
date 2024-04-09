import Flights from '../components/FlightsSearch.jsx';
import FlightList from '../components/FlightList.jsx';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import '/src/scss/styles.css';
import splash from '/src/assets/images/splash-image.jpg';
import { Navigate } from 'react-router-dom';
import { setIsLoggedIn, setFavorite, setDisplayUsername, setId } from '../slices/flightSlice.js';

const Home = () => {
  const { searchArr, isLoggedIn, favorites } = useSelector((state) => state.flight);

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

      // if session found, set loggedIn to true and set display username / id
      if (!data.success) {
        dispatch(setIsLoggedIn(false));
      } else {
        dispatch(setIsLoggedIn(true));
        dispatch(setDisplayUsername(data.username));
        dispatch(setId(data.cookieId));
      }
    }

    checkSession();

  });

  // if first time rendering, get user's favorite flights (also in Trips, but in case user goes to any page straight)
  useEffect(() => {
    // using ssid cookie to grab id data for which user to grab favorites
    async function fetchData() {
        const response = await fetch(`/api/flights/`, {
            method: 'GET'
        });
        const data = await response.json();
      
        dispatch(setFavorite(data));
    }
      
    // ONLY run fetch if data length is 0 (not fetched yet)
    if (favorites.length === 0) {
      console.log('grabbing favorite flights')
      fetchData()
    }
  }, []);

  // if user is not logged in, redirect to login
  if (!isLoggedIn) {
      return (<Navigate to='/login/' />);
  }

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
