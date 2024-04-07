import Flights from '../components/FlightsSearch.jsx';
import FlightList from '../components/FlightList.jsx';
import { useSelector } from "react-redux";
import '/src/scss/styles.css'
import splash from '/src/assets/images/splash-image.jpg'


const Home = () => {

    const { searchArr } = useSelector(state => state.flight);
    return (
        <div>
            <img className="splash" src={splash}/>
            <Flights />
            <FlightList flightArr={searchArr}/>
        </div>

    )
}

export default Home;