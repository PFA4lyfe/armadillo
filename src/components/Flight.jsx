
function Flight({dep, arr, price, time, airline, isFav}) {

  const handleClick = () => {
    if (isFav) {
        console.log('removed')
    } else console.log('added to favs')
  }

  return (
    <div>
      <p>Departure: {dep}</p>
      <p>Arrival: {arr}</p>
      <p>Price: {price}</p>
      <p>Time: {time}</p>
      <p>Airline: {airline}</p>
      <button onClick={handleClick}>button</button>
    </div>
  )
}

export default Flight