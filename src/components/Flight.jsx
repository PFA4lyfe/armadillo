import { useSelector, useDispatch } from "react-redux";
import { removeFavorite } from "../slices/flightSlice";

function Flight({dep_city, dest_city, dep_date, ret_date, price, airline, num_travelers, isFav}) {

  const {id} = useSelector(state => state.flight);
  const dispatch = useDispatch(); 
  const handleClick = () => {
      const data = {
        departure: dep_city,
        destination: dest_city,
        dep_date: dep_date,
        arr_date: ret_date,
        price: price,
        airline: airline,
        num_travelers: num_travelers,
        user_id: id,
      };
      console.log(data);
      const url = '/api/flights'
      fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data),
      })
      .then(response => response.json())
      .catch((error) => console.error('Error:', error))
  }

  return (
    <div>
      <p>Departure City: {dep_city}</p>
      <p>Destination City: {dest_city}</p>
      <p>Departure Date: {dep_date}</p>
      <p>Return Date: {ret_date}</p>
      <p>Price: {price}</p>
      <p>Airline: {airline}</p>
      <p>Number of Travelers: {num_travelers}</p>
      <button onClick={handleClick}>button</button>
    </div>
  )
}

export default Flight