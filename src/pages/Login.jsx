
import { Navigate } from 'react-router-dom';
import '/src/scss/styles.css';
import splash from '/src/assets/images/splash-image.jpg';
import { useDispatch, useSelector } from 'react-redux';
import { setIsLoggedIn, setUsername, setId, setPassword, setDisplayUsername } from '../slices/flightSlice';

const Login = () => {

  // if login is successful, change this state to true
  const dispatch = useDispatch();

  const {isLoggedIn, username, password} = useSelector(state => state.flight);

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
            username: username,
            password: password,
        })
    })

    const data = await response.json();

    if (data.success) {
        dispatch(setIsLoggedIn(true));
        dispatch(setId(data.id));
        dispatch(setDisplayUsername(data.username));
    } else {
        dispatch(setIsLoggedIn(false));
        dispatch(setId(0));
        alert('incorrect username or pasword')
    }
  }

  return (
    <div>
      <img className='splash' src={splash} />
      <h1>LOGIN PAGE</h1>
      <p>username</p>
      <input type="text" value={username} onChange={(e) => dispatch(setUsername(e.target.value))}/>
      <p>password</p>
      <input type="text" value={password} onChange={(e) => dispatch(setPassword(e.target.value))}/>
      <button onClick={handleClick}>login</button>
    </div>
  );
};

export default Login;
