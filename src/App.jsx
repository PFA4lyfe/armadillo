import Home from './pages/Home.jsx';
import Trips from './pages/Trips.jsx'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <div>
      {/* <Flights />
      <Trips /> */}
      <BrowserRouter>
        <header>
          <div id='header--left'>
            <Link id='link' to='/'>Home</Link>
          </div>
          <div id='header--right'>
            <Link id='link' to='/trips'>Trips</Link>
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
