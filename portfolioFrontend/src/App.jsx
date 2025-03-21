
import { Route, Routes, useLocation } from 'react-router-dom';

import React, { useState, useEffect } from 'react';
import Service from './pages/Service/Service'
import './index.css';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer.jsx';
import Home from './pages/Home/Home';
import Contact from './pages/Contact/Contact';
import About from './pages/About/About';
import Portfolio from './pages/Portfolio/Portfolio.jsx';
import AllServices from './pages/Service/AllServices.jsx';

function App() {
  const location = useLocation()
  const [open, setOpen] = useState(false);   
  const handleClick = () => {
    setOpen(!open)

  };

  useEffect(() => {
    setOpen(false)
  }, [location.pathname])



  return (
    <>
      <Navbar handleClick={handleClick} open={open} setOpen={setOpen} />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/About' element={<About/>} />
        <Route path='/service/:serviceNameUrl' element={<Service />} />
        <Route path='/Contact' element={<Contact />} />
        <Route path="/Portfolio" element={<Portfolio />} />
        <Route path='/service/all-service' element={<AllServices />} />

      </Routes>

      <Footer />

    </>
  )
}

export default App
