import Flights from '../components/FlightsSearch.jsx';
import FlightList from '../components/FlightList.jsx';
import '/src/scss/styles.css'
import splash from '/src/assets/images/splash-image.jpg'


const Home = () => {

    return (
        <div>
            <img className="splash" src={splash}/>
            <Flights />
            <FlightList flightArr={[]}/>
        </div>

    )
}

export default Home;