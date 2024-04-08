
import { Navigate } from 'react-router-dom';
import '/src/scss/styles.css';
import splash from '/src/assets/images/splash-image.jpg';
import { useDispatch, useSelector } from 'react-redux';
import { setIsLoggedIn, setUsername, setId } from '../slices/flightSlice';

const Login = () => {

  // if login is successful, change this state to true
  const dispatch = useDispatch();

  const {isLoggedIn} = useSelector(state => state.flight);

  // if logged in successful, we will redirect to home
  if (isLoggedIn) {
    return (<Navigate to='/home/' />);
  }

  const handleClick = async () => {
    const response = await fetch('/api/login', {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            username: 'lord',
            password: 'coolpw',
        })
    })

    const data = await response.json();

    if (data.success) {
        dispatch(setIsLoggedIn(true));
        dispatch(setUsername('lord'));
        dispatch(setId(7));
    } else {
        dispatch(setIsLoggedIn(false));
        dispatch(setUsername(''));
        dispatch(setId(0));
        alert('incorrect username or pasword')
    }
  }

  return (
    <div>
      <img className='splash' src={splash} />
      <h1>LOGIN PAGE</h1>
      <button onClick={handleClick}>login</button>
    </div>
  );
};

export default Login;
