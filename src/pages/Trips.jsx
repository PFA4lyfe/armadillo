// import Flights from './components/FlightsSearch.jsx'\
import { useSelector, useDispatch } from 'react-redux';
import FlightList from '../components/FlightList.jsx';
import { useEffect } from 'react';
import { setFavorite } from '../slices/flightSlice.js';

const Trips = (props) => {
  const { favorites } = useSelector((state) => state.flight);

  const dispatch = useDispatch();

  useEffect(() => {
    console.log('useEffect')

    async function fetchData() {
        const response = await fetch('/api/flights/7', {
            method: 'GET'
        });
        const data = await response.json();
        console.log(data);
        dispatch(setFavorite(data));
    }

    if (favorites.length === 0) fetchData();
  });

  return (
    <div>
      <h1>Trips</h1>
      <FlightList flightArr={favorites} title='Favorites' buttonText='Remove from Favorites' />
    </div>
  );
};

export default Trips;
