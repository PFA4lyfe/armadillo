// import { Navigate } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import '/src/scss/styles.css';
import splash from '/src/assets/images/splash-image.jpg';
import { useDispatch, useSelector } from 'react-redux';
import {  setUsername, setPassword, setName } from '../slices/flightSlice';

const Signup = () => {
    const dispatch = useDispatch(); 
    const navigate = useNavigate();

    const {name, username, password} = useSelector(state => state.flight); 

    const handleClick = async () => {
        const response = await fetch('/api/signup', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name: name,
                username: username,
                password: password,
                
            })
        })
        const data = await response.json();
        console.log(data);
        // alert('Signup successful');
        if (response.ok) {
            // If the signup is successful, navigate to the login page
            navigate('/login');
        } else {
            // Handle signup failure (e.g., show an error message)
            alert('Signup failed. Please try again.');
        }
    }

    return (
        <div>
          <img className='splash' src={splash} />
          <h1>SIGN UP PAGE</h1>
          <p>name</p>
          <input type="text" value={name} onChange={(e) => dispatch(setName(e.target.value))}/>
          <p>username</p>
          <input type="text" value={username} onChange={(e) => dispatch(setUsername(e.target.value))}/>
          <p>password</p>
          <input type="text" value={password} onChange={(e) => dispatch(setPassword(e.target.value))}/>
          <button onClick={handleClick}>sign up</button>
        </div>
      );
};

export default Signup;