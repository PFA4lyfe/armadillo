import Home from './pages/Home.jsx';
import Trips from './pages/Trips.jsx'
import ErrorPage from './pages/Error404.jsx'
import Login from './pages/Login.jsx';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './scss/styles.css'; 
import logo from './assets/images/logo.png'

function App() {
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
            <li>Profile</li>
            <li>About</li>
            <li>Contact Us</li>
          </ul>
          <img src={logo}/>
          </div>
          
        </header>
        <Routes>
          <Route index element={<Login />} />
          <Route path='/login' element={<Login />} />
          <Route path='/home' element={<Home />}/>
          <Route path='/trips' element={<Trips />}/>
          <Route path='*' element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
