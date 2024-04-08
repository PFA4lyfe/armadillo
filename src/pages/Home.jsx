import Flights from '../components/FlightsSearch.jsx';
import FlightList from '../components/FlightList.jsx';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import '/src/scss/styles.css';
import splash from '/src/assets/images/splash-image.jpg';
import { Navigate } from 'react-router-dom';
import { setIsLoggedIn } from '../slices/flightSlice.js';

const Home = () => {
  const { searchArr, isLoggedIn } = useSelector((state) => state.flight);

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
