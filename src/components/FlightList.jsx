import Flight from './Flight.jsx';

function FlightList({ flightArr }) {

    console.log(flightArr);

    const Flights = flightArr.map((el, idx) => {
        return (<Flight key={idx} dep={el.dep} arr={el.arr} price={el.price} time={el.time} airline={el.airline}/>)
    });

    return (
        <div>
            <h1>flight list component</h1>
            {Flights}
        </div>
    )
}

export default FlightList; 