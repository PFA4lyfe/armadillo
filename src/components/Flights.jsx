import { useSelector, useDispatch } from "react-redux";
import { setDepartureCity, setDestinationCity, setDepartureDate } from "../slices/flightSlice";

function Flights() {
    const dispatch = useDispatch(); 
    const { departureCity, destinationCity, departureDate } = useSelector(state => state.flight); 

    return (
        <div>
             <input 
                type="text" 
                value={departureCity} 
                onChange={(e) => dispatch(setDepartureCity(e.target.value))}
                placeholder="Departure City"
            />
            <input 
                type="text" 
                value={destinationCity} 
                onChange={(e) => dispatch(setDestinationCity(e.target.value))}
                placeholder="Destination City"
            />
            <input 
                type="date" 
                min={new Date(Date.now())}
                value={departureDate} 
                onChange={(e) => dispatch(setDepartureDate(e.target.value))}
                placeholder="Departure Date"
            />
        </div>
    )
}

export default Flights; 