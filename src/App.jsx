import Home from './pages/Home.jsx';
import Trips from './pages/Trips.jsx'
import ErrorPage from './pages/Error404.jsx'
import Login from './pages/Login.jsx';
import Signup from './pages/Signup.jsx';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './scss/styles.css'; 
import logo from './assets/images/logo.png'
import { useDispatch, useSelector } from 'react-redux';
import { setUsername, setPassword, setId, setFavorite, setIsLoggedIn } from './slices/flightSlice.js';

function App() {

  const dispatch = useDispatch();

  const {favorites} = useSelector(state => state.flight);
  
  const handleLogoutClick = async () => {

    const response = await fetch('/api/logout');

    //dispatch(setIsLoggedIn(false));
    dispatch(setUsername(''));
    dispatch(setPassword(''));
    dispatch(setId(0));
    dispatch(setFavorite([]));

    const data = await response.json();

    return;
  }

  return (
    <div>
      <BrowserRouter>
        <header>
          <ul className='leftNav'>
            <li><Link id='link' to='/home'>Home</Link></li>
            <li><Link id='link' to='/trips'>Trips</Link></li>
          </ul>
          <div className='rightSection'>
          <ul className='rightNav'>
            <li><Link id='link' to='/signup'>Signup</Link></li>
            <li>Profile</li>
            <li>About</li>
            <li>Contact Us</li>
            <li><button onClick={handleLogoutClick}>log out</button></li>
          </ul>
          <img src={logo}/>
          </div>
          
        </header>
        <Routes>
          <Route index element={<Login />} />
          <Route path='/login' element={<Login />} />
          <Route path='/home' element={<Home />}/>
          <Route path='/trips' element={<Trips />}/>
          <Route path='/signup' element={<Signup />}/>
          <Route path='*' element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
