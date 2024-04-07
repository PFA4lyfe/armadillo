import { useSelector, useDispatch } from 'react-redux';
import {
  setDepartureCity,
  setDestinationCity,
  setDepartureDate,
  setReturnDate,
  setNumTravelers,
} from '../slices/flightSlice';
import '/src/scss/styles.css';

//NOTE: function that retries matching information from fetched data (obj), note: "airlinesObj" is the airlines obj inside function
function arrayofTravelObjects(obj, dep_city, dep_date, dest_city, ret_date, num_travelers) {
    const airlinesObj = {
        "3X": "Japan Air Commuter",
        "6E": "IndiGo",
        "6J": "Solaseed Air",
        "7G": "StarFlyer",
        "9C": "Spring Airlines",
        "AA": "American Airlines",
        "AC": "Air Canada",
        "AI": "Air India",
        "AK": "AirAsia",
        "AM": "Aeromexico",
        "ANA": "All Nippon Airways",
        "AR": "Aerolineas Argentinas",
        "AV": "Avianca",
        "B6": "JetBlue Airways",
        "BC": "Skymark Airlines",
        "BR": "EVA Air",
        "CA": "Air China",
        "CI": "China Airlines",
        "CM": "Copa Airlines",
        "CZ": "China Southern Airlines",
        "DL": "Delta Air Lines",
        "EK": "Emirates",
        "ET": "Ethiopian Airlines",
        "EY": "Etihad Airways",
        "F9": "Frontier Airlines",
        "FJ": "Fiji Airways",
        "GA": "Garuda Indonesia",
        "GK": "Jetstar Japan",
        "GJ": "Loong Air",
        "HA": "Hawaiian Airlines",
        "IT": "Tigerair Taiwan",
        "JL": "Japan Airlines",
        "KA": "Cathay Dragon",
        "KE": "Korean Air",
        "KL": "KLM Royal Dutch Airlines",
        "KN": "China United Airlines",
        "LA": "LATAM Airlines",
        "LH": "Lufthansa",
        "MK": "Air Mauritius",
        "MS": "EgyptAir",
        "MU": "China Eastern Airlines",
        "NH": "All Nippon Airways",
        "NK": "Spirit Airlines",
        "NU": "Japan Transocean Air",
        "NZ": "Air New Zealand",
        "OC": "Oriental Air Bridge",
        "ON": "Nauru Airlines",
        "OZ": "Asiana Airlines",
        "PX": "Air Niugini",
        "PR": "Philippine Airlines",
        "QF": "Qantas Airways",
        "QR": "Qatar Airways",
        "RK": "Ryukyu Air Commuter",
        "SB": "Aircalin",
        "SG": "SpiceJet",
        "SK": "Scandinavian Airlines System (SAS)",
        "SQ": "Singapore Airlines",
        "SV": "Saudia",
        "TG": "Thai Airways International",
        "TN": "Air Tahiti Nui",
        "TR": "Scoot",
        "TV": "Tibet Airlines",
        "UU": "Air Austral",
        "VA": "Virgin Australia",
        "VN": "Vietnam Airlines",
        "WS": "WestJet",
        "ZG": "ZIPAIR Tokyo",
        "ZH": "Shenzhen Airlines"
        };
    const result = [];
    obj.data.forEach(flightOffer => { //note: 'flightOffer' is "data" in embeeded response object
      const price = flightOffer.price.total * num_travelers;
      flightOffer.itineraries.forEach(itinerary => {  //itinerary is "itineraries"
        itinerary.segments.forEach(segment => { //iterates through "segments" (same name)
          const departureDate = new Date(segment.departure.at).toISOString().split('T')[0]; //slices time off and leaves just with the date
          const arrivalDate = new Date(segment.arrival.at).toISOString().split('T')[0];
          const airlines = airlinesObj[segment.carrierCode]
       
          if (segment.departure.iataCode === dep_city && departureDate === dep_date && segment.arrival.iataCode === dest_city && arrivalDate === ret_date) {
            result.push({ dep_city, dep_date, dest_city, ret_date, price, airlines, num_travelers });
          }
        });
      });
    });
    return result;
  }

function Flights() {
  const dispatch = useDispatch();
  const { departureCity, destinationCity, departureDate, returnDate, numTravelers } = useSelector(
    (state) => state.flight
  );

  const handleClick = async () => {
    let queryText = 'https://test.api.amadeus.com/v2/shopping/flight-offers';

    // add in query parameters (max 5)
    queryText += `?originLocationCode=${departureCity}`;
    queryText += `&destinationLocationCode=${destinationCity}`;
    queryText += `&departureDate=${departureDate}`;
    queryText += `&returnDate=${returnDate}`;
    queryText += `&adults=${numTravelers}`;
    queryText += '&max=5';

      const url = queryText;
      const accessToken = 'XyDluAJkdvUZbpdjUMO2SraMsvVr';
      const options = {
        method: 'GET',
        headers: {
            'content-type': 'application/json',
            Authorization: `Bearer ${accessToken}`
        },
      };

    try {
        const response = await fetch(url, options);
        const data = await response.json();

        // HEATHER: CREATE NEW ARRAY HERE TO SEND OUT TO DISPATCH, CHRIS MADE A STATE CALLED search
        const matchingFlights = arrayofTravelObjects(data, departureCity, departureDate, destinationCity, returnDate, numTravelers);
        dispatch(matchingFlights); 

       } catch (err) {
            console.log(`An error occured: ${err}.`)
       }
    }

  return (
    <div className='flights-search-component'>
      <input
        type='text'
        id='departure-city'
        value={departureCity}
        onChange={(e) => dispatch(setDepartureCity(e.target.value))}
        placeholder='Departure City'
      />
      <input
        type='text'
        id='destination-city'
        value={destinationCity}
        onChange={(e) => dispatch(setDestinationCity(e.target.value))}
        placeholder='Destination City'
      />
      <input
        type='text'
        id='num-travelers'
        value={numTravelers}
        onChange={(e) => dispatch(setNumTravelers(e.target.value))}
        placeholder='Destination City'
      />
      <input
        type='date'
        id='departure-date'
        min={new Date(Date.now()).toISOString().split('T')[0]}
        value={departureDate}
        onChange={(e) => dispatch(setDepartureDate(e.target.value))}
        placeholder='Departure Date'
      />
      <input
        type='date'
        id='return-date'
        min={new Date(Date.now()).toISOString().split('T')[0]}
        value={returnDate}
        onChange={(e) => dispatch(setReturnDate(e.target.value))}
        placeholder='Return Date'
      />

      <button onClick={handleClick}>Search</button>
    </div>
  );
}

export default Flights;

// we get that large data obj, and there's 5 results

// SO the goal is to make an array of 5 elements

// each element is an object with 5ish pproperty (what we actually need)

// for each element in our large array...
// apiObject.forEach(el => {
// result.push({
//     dep: el.something.something.flights.dep
//     arr:
//     time:
//     price:
//     airline:
// })
// })

// once we have result that is a smaller version of our returned object
// send that to our slice to update our search state

//dep_city, dest_city, dep_date, ret_date, price, airline, num_travelers
