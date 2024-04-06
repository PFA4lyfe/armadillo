import Flight from './Flight.jsx';

function FlightList({ flightArr }) {

    console.log(flightArr);

    const Flights = flightArr.map((el, idx) => {
        return (<Flight key={idx} dep_city={el.dep_city} dest_city={el.dest_city} dep_date={el.dep_date} ret_date={el.ret_date} price={el.price} airline={el.airline} num_travelers={el.num_travelers} isFav/>)
    });

    return (
        <div>
            <h1>flight list component</h1>
            {Flights}
        </div>
    )
}

export default FlightList; 