import { useSelector, useDispatch } from "react-redux";
import { setDepartureCity, setDestinationCity, setDepartureDate } from "../slices/flightSlice";

function Flights() {
    const dispatch = useDispatch(); 
    const { departureCity, destinationCity, departureDate } = useSelector(state => state.flight); 

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
                type="date" 
                id="depature-date"
                min={new Date(Date.now()).toISOString().split('T')[0]}
                value={departureDate} 
                onChange={(e) => dispatch(setDepartureDate(e.target.value))}
                placeholder="Departure Date"
            />
        </div>
    )
}

export default Flights; 