import Flights from '../components/FlightsSearch.jsx';
import FlightList from '../components/FlightList.jsx';

const Home = props => {

    return (
        <div>
            <h1>Home Page</h1>
            <Flights />
            <FlightList flightArr={[]}/>
        </div>

    )
}

export default Home;