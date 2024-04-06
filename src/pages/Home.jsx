import Flights from '../components/FlightsSearch.jsx';
import FlightList from '../components/FlightList.jsx';
import { useSelector } from "react-redux";

const Home = props => {

    const { searchArr } = useSelector(state => state.flight);
    return (
        <div>
            <h1>Home Page</h1>
            <Flights />
            <FlightList flightArr={searchArr}/>
        </div>

    )
}

export default Home;