import { useSelector, useDispatch } from "react-redux";
import { setDepartureCity, setDestinationCity, setDepartureDate } from "../slices/flightSlice";
// import './scss/styles.css'; 
// import Flights from './components/FlightsSearch.jsx'\


function Trips () {

    const favorites = useSelector(state => state.flight);
    return (
        <div>
            <section> 
                <div id='trip-container'></div>
                <div id='outerbox'> </div>
            </section>
        </div>
    )
}

export default Trips; 