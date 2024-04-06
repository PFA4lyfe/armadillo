import { useSelector, useDispatch } from "react-redux";
import { setDepartureCity, setDestinationCity, setDepartureDate } from "../slices/flightSlice";

function Flights() {
    const dispatch = useDispatch(); 
    const { departureCity, destinationCity, departureDate, returnDate, numTravelers } = useSelector(state => state.flight); 

    function handleClick () {
        
    }

    return (
        <div>
             <input 
                type="text" 
                id="departure-city"
                value={departureCity} 
                onChange={(e) => dispatch(setDepartureCity(e.target.value))}
                placeholder="Departure City"
            />
            <input 
                type="text" 
                id="destination-city"
                value={destinationCity} 
                onChange={(e) => dispatch(setDestinationCity(e.target.value))}
                placeholder="Destination City"
            />
            <input 
                type="text" 
                id="destination-city"
                value={destinationCity} 
                onChange={(e) => dispatch(setNumTravelers(e.target.value))}
                placeholder="Destination City"
            />
            <input 
                type="date" 
                id="depature-date"
                min={new Date(Date.now()).toISOString().split('T')[0]}
                value={departureDate} 
                onChange={(e) => dispatch(setDepartureDate(e.target.value))}
                placeholder="Departure Date"
            />
            <input 
                type="date" 
                id="return-date"
                min={new Date(Date.now()).toISOString().split('T')[0]}
                value={departureDate} 
                onChange={(e) => dispatch(setReturnDate(e.target.value))}
                placeholder="Return Date"
            />
            
            
            <button onClick={handleClick}>Submit</button>
        </div>
    )
}

export default Flights; 

// const url =
// 'https://test.api.amadeus.com/v2/shopping/flight-offers?originLocationCode=LAX&destinationLocationCode=JFK&departureDate=2024-05-15&returnDate=2024-05-25&adults=2&max=5';
// const accessToken = 'llQ0jqeZzqOr7c1kpNLBX9DzPWM8';
// const options = {
//  method: 'GET',
//  headers: {
//    'content-type': 'application/json',
//    Authorization: `Bearer ${accessToken}`
//  },
// };

// try {
//  const response = await fetch(url, options);
//  const data = await response.json();

// once we get data, it is large, SO make a new array that has the details we actually hneed and update our search state

//  console.log(data);
//  res.status(200).json(data);
//  return;
// } catch (err) {
//  console.log(err);
//  res.status(400).json({a: 1});
// }



// we get that large data obj, and there's 5 results

// SO the goal is to make an array of 5 elements

// each element is an object with 5ish pproperty (what we actually need)

// for each element in our large array...
apiObject.forEach(el => {
result.push({
    dep: el.something.something.flights.dep
    arr:
    time:
    price:
    airline:
})
})

// once we have result that is a smaller version of our returned object
// send that to our slice to update our search state
