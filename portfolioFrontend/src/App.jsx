
import { Route, Routes, useLocation } from 'react-router-dom';

import React, { useState, useEffect } from 'react';
import Service from './pages/Service/Service'
import './index.css';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer.jsx';
import Home from './pages/Home/Home';
import Contact from './pages/Contact/Contact';
import About from './pages/About/About';

function App() {
  const location = useLocation()
  const [open, setOpen] = useState(false);    // Service Overlay State
  const handleClick = () => {
    setOpen(!open)

  };

  useEffect(() => {
    setOpen(false)
  }, [location.pathname])



  return (
    <>
      <Navbar handleClick={handleClick} open={open} />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/About' element={<About/>} />
        <Route path='/service/:serviceName' element={<Service />} />
        <Route path='/Contact' element={<Contact />} />
      </Routes>

      {/* <Footer /> */}

    </>
  )
}

export default App