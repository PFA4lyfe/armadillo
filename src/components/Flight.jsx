import { useSelector } from 'react-redux';

function Flight({
  flight_id,
  dep_city,
  dest_city,
  dep_date,
  ret_date,
  price,
  airline,
  num_travelers,
  buttonText,
  handleClick,
}) {
  const { id } = useSelector((state) => state.flight);

  return (
    <div>
      <p>Departure City: {dep_city}</p>
      <p>Destination City: {dest_city}</p>
      <p>Departure Date: {dep_date}</p>
      <p>Return Date: {ret_date}</p>
      <p>Price: ${price}</p>
      <p>Airline: {airline}</p>
      <p>Number of Travelers: {num_travelers}</p>
      <button onClick={() => handleClick({flight_id, dep_city, dest_city, dep_date, ret_date, price, airline, num_travelers, id})}>{buttonText}</button>
    </div>
  );
}

export default Flight;
