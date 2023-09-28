import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home'
import AboutUs from './components/AboutUs';
import Donate from './components/Donate';
import Events from './components/Events';

/*const ugaPic = new URL("image/image-1.jpg", import.meta.url)
*/
function App() {
  return (
    <>
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='/about-us' element={<AboutUs />} />
          <Route path='/donate' element={<Donate />} />
          <Route path='/events' element={<Events />} />
        </Routes>
      </Router>
      
      
    </>
  );
}

export default App;
