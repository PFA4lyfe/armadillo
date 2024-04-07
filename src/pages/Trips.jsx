// import Flights from './components/FlightsSearch.jsx'\
import { useSelector, useDispatch } from "react-redux";
import FlightList from '../components/FlightList.jsx';

const Trips = props => {
  const {favorites} = useSelector(state => state.flight);

    return (
        <div>
          <h1>Trips</h1>
          <FlightList flightArr={favorites}/>
        </div>
    )

  }

export default Trips;