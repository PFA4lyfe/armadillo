import Home from './pages/Home.jsx';
import Trips from './pages/Trips.jsx'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './scss/styles.css'; 
import logo from './assets/images/logo.png'

function App() {
  return (
    <div>
      {/* <Flights />
      <Trips /> */}
      <BrowserRouter>
        <header>
          <ul className='leftNav'>
            <li><Link id='link' to='/'>Home</Link></li>
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
          <Route index element={<Home />} />
          <Route path='/home' element={<Home />}/>
          <Route path='/trips' element={<Trips />}/>
          <Route path='*' element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
