import { useSelector, useDispatch } from "react-redux";
import { setDepartureCity, setDestinationCity, setDepartureDate, setReturnDate, setNumTravelers } from "../slices/flightSlice";

function Flights() {
    const dispatch = useDispatch(); 
    const { departureCity, destinationCity, departureDate, returnDate, numTravelers } = useSelector(state => state.flight); 

    const handleClick = async () => {
      let queryText = 'https://test.api.amadeus.com/v2/shopping/flight-offers';

      // add in query parameters (max 5)
      queryText += `?originLocationCode=${departureCity}`;
      queryText += `&destinationLocationCode=${destinationCity}`;
      queryText += `&departureDate=${departureDate}`;
      queryText += `&returnDate=${returnDate}`;
      queryText += `&adults=${numTravelers}`;
      queryText += '&max=5';

    //   const url = queryText;
    //   const accessToken = '70ChYff1uIx2XSCiPxe854R5hk9D';
    //   const options = {
    //     method: 'GET',
    //     headers: {
    //         'content-type': 'application/json',
    //         Authorization: `Bearer ${accessToken}`
    //     },
    //   };

    //   try {
    //     const response = await fetch(url, options);
    //     const data = await response.json();
    //     console.log(data);

    //     // HEATHER: CREATE NEW ARRAY HERE TO SEND OUT TO DISPATCH, CHRIS MADE A STATE CALLED search
    //     // dispatch
    //    } catch (err) {
    //     console.log(err);
    //    }

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
                id="num-travelers"
                value={numTravelers} 
                onChange={(e) => dispatch(setNumTravelers(e.target.value))}
                placeholder="Number of travelers"
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
                value={returnDate} 
                onChange={(e) => dispatch(setReturnDate(e.target.value))}
                placeholder="Return Date"
            />
            
            
            <button onClick={handleClick}>Submit</button>
        </div>
    )
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