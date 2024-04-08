import Flight from './Flight.jsx';
import '/src/scss/styles.css';
import { addFavorite, removeFavorite } from '../slices/flightSlice.js';
import { useDispatch } from 'react-redux';

function FlightList({ flightArr, title, buttonText, isAdd }) {
  const dispatch = useDispatch();

  // if button says add to favorite, then do this
  const handleAddClick = ({dep_city, dest_city, dep_date, ret_date, price, airline, num_travelers, id}) => {
    let audio = new Audio('/src/assets/sounds/plane_beep.mp3');

    audio.play();
    const data = {
      dep_city,
      dest_city,
      dep_date,
      ret_date,
      price,
      airline,
      num_travelers,
      user_id: id,
    };

    const url = '/api/flights';
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => dispatch(addFavorite(data)))
      .catch((error) => console.error('Error:', error));

  };
  
  // if button says delete to favorite, then do this
  const handleDeleteClick = ({flight_id}) => {
    const url = `/api/flights/${flight_id}`;
    fetch(url, {
      method: 'DELETE'
    })
      .then(() => dispatch(removeFavorite(flight_id)))
      .catch((error) => console.error('Error:', error));
  };

  const handleClick = (arg) => {
    if (isAdd) return handleAddClick(arg);
      else return handleDeleteClick(arg);
  }

  const Flights = flightArr.map((el, idx) => {
    return (
      <Flight
        key={idx}
        flight_id={el.id}
        dep_city={el.dep_city}
        dest_city={el.dest_city}
        dep_date={el.dep_date}
        ret_date={el.ret_date}
        price={el.price}
        airline={el.airline}
        num_travelers={el.num_travelers}
        buttonText={buttonText}
        handleClick={
          handleClick
        }
      />
    );
  });

  return (
    <div className='flight-list-component'>
      <h1>{title}</h1>
      <div className='flight-list'>{Flights}</div>
    </div>
  );
}

export default FlightList;
