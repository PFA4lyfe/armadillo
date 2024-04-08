import Flight from './Flight.jsx';
import '/src/scss/styles.css';

function FlightList({ flightArr, title, buttonText }) {
  // console.log(flightArr);

  const Flights = flightArr.map((el, idx) => {
    return (
      <Flight
        key={idx}
        dep_city={el.dep_city}
        dest_city={el.dest_city}
        dep_date={el.dep_date}
        ret_date={el.ret_date}
        price={el.price}
        airline={el.airline}
        num_travelers={el.num_travelers}
        isFav
        buttonText={buttonText}
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
