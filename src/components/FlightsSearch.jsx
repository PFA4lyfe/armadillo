import { useSelector, useDispatch } from 'react-redux';
import {
  setDepartureCity,
  setDestinationCity,
  setDepartureDate,
  setReturnDate,
  setNumTravelers,
} from '../slices/flightSlice';
import '/src/scss/styles.css';
import { setSearchArr } from '../slices/flightSlice';

//NOTE: function that retries matching information from fetched data (obj), note: "airlinesObj" is the airlines obj inside function
function arrayofTravelObjects(obj, dep_city, dep_date, dest_city, ret_date, num_travelers) {
  const airlinesObj = {
    '3X': 'Japan Air Commuter',
    '6E': 'IndiGo',
    '6J': 'Solaseed Air',
    '7G': 'StarFlyer',
    '9C': 'Spring Airlines',
    AA: 'American Airlines',
    AC: 'Air Canada',
    AI: 'Air India',
    AK: 'AirAsia',
    AM: 'Aeromexico',
    ANA: 'All Nippon Airways',
    AR: 'Aerolineas Argentinas',
    AS: 'Alaskan Airlines',
    AV: 'Avianca',
    B6: 'JetBlue Airways',
    BC: 'Skymark Airlines',
    BR: 'EVA Air',
    CA: 'Air China',
    CI: 'China Airlines',
    CM: 'Copa Airlines',
    CZ: 'China Southern Airlines',
    DL: 'Delta Air Lines',
    EK: 'Emirates',
    ET: 'Ethiopian Airlines',
    EY: 'Etihad Airways',
    F9: 'Frontier Airlines',
    FJ: 'Fiji Airways',
    GA: 'Garuda Indonesia',
    GK: 'Jetstar Japan',
    GJ: 'Loong Air',
    HA: 'Hawaiian Airlines',
    IT: 'Tigerair Taiwan',
    JL: 'Japan Airlines',
    KA: 'Cathay Dragon',
    KE: 'Korean Air',
    KL: 'KLM Royal Dutch Airlines',
    KN: 'China United Airlines',
    LA: 'LATAM Airlines',
    LH: 'Lufthansa',
    MK: 'Air Mauritius',
    MS: 'EgyptAir',
    MU: 'China Eastern Airlines',
    NH: 'All Nippon Airways',
    NK: 'Spirit Airlines',
    NU: 'Japan Transocean Air',
    NZ: 'Air New Zealand',
    OC: 'Oriental Air Bridge',
    ON: 'Nauru Airlines',
    OZ: 'Asiana Airlines',
    PX: 'Air Niugini',
    PR: 'Philippine Airlines',
    QF: 'Qantas Airways',
    QR: 'Qatar Airways',
    RK: 'Ryukyu Air Commuter',
    SB: 'Aircalin',
    SG: 'SpiceJet',
    SK: 'Scandinavian Airlines System (SAS)',
    SQ: 'Singapore Airlines',
    SV: 'Saudia',
    TG: 'Thai Airways International',
    TN: 'Air Tahiti Nui',
    TR: 'Scoot',
    TV: 'Tibet Airlines',
    UU: 'Air Austral',
    VA: 'Virgin Australia',
    VN: 'Vietnam Airlines',
    WS: 'WestJet',
    ZG: 'ZIPAIR Tokyo',
    ZH: 'Shenzhen Airlines',
  };
  const result = [];
  obj.data.forEach((flightOffer) => {
    //note: 'flightOffer' is "data" in embeeded response object
    const price = flightOffer.price.total * num_travelers;
    const obj = {};
    obj.dep_city = dep_city;
    obj.dest_city = dest_city;
    obj.dep_date = dep_date;
    obj.ret_date = ret_date;
    obj.price = price.toFixed(2);
    obj.num_travelers = num_travelers;
    flightOffer.itineraries.forEach((itinerary) => {
      //itinerary is "itineraries"

      itinerary.segments.forEach((segment) => {
        const departureDate = new Date(segment.departure.at);
        const arrivalDate = new Date(segment.arrival.at);

        const formatTime = (date) => {
          let hours = date.getHours();
          const amPm = hours < 12 ? 'am' : 'pm';
          hours -= 12;
          let minutes = date.getMinutes();
          return hours + ':' + minutes + amPm;
        };

        // times currently not implemented in renders, but available in the object
        const departureTime = formatTime(departureDate);
        const arrivalTime = formatTime(arrivalDate);

        const airline = airlinesObj[segment.carrierCode];
        obj.airline = airline;
        obj.departureTime = departureTime;
        obj.arrivalTime = arrivalTime;
      });
    });
    result.push(obj);
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

    // add in query parameters (max 10)
    queryText += `?originLocationCode=${departureCity}`;
    queryText += `&destinationLocationCode=${destinationCity}`;
    queryText += `&departureDate=${departureDate}`;
    queryText += `&returnDate=${returnDate}`;
    queryText += `&adults=${numTravelers}`;
    queryText += '&nonStop=true&currencyCode=USD&max=10';

    // API KEY AND SECRET
    const clientId = 'UIkOGQNaUAgqBLR3tWzUwONjPHtKM2Aj';
    const clientSecret = 'bLDXr7EhhtLbR0P9';

    // First, fetch the access token (does this every time we search)
    // TODO: access token lasts 30 min, find a way to not get a new token if unneeded
    const tokenResponse = await fetch('https://test.api.amadeus.com/v1/security/oauth2/token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: `grant_type=client_credentials&client_id=${clientId}&client_secret=${clientSecret}`,
    });

    // Await access token generated by POST request
    const tokenData = await tokenResponse.json();
    // Pull out token from token data obj
    const accessToken = tokenData.access_token;
    localStorage.setItem('access token', accessToken);
    localStorage.getItem('access token');
    // Second, Fetch queryURL with access token
    const url = queryText;
    const options = {
      method: 'GET',
      headers: {
        'content-type': 'application/json',
        Authorization: `Bearer ${accessToken}`,
      },
    };

    try {
      const response = await fetch(url, options);
      const data = await response.json();
      console.log('THIS IS THE BIG API OBJ');
      console.log(data);
      // function call to parse returned data obj
      const matchingFlights = arrayofTravelObjects(
        data,
        departureCity,
        departureDate,
        destinationCity,
        returnDate,
        numTravelers
      );
      dispatch(setSearchArr(matchingFlights));
      console.log('matchingFLightsArr:', matchingFlights);
    } catch (err) {
      console.log(`An error occurred: ${err}.`);
    }
  };

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
