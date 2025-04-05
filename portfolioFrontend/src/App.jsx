import { Route, Routes, useLocation } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import Service from './pages/Service/Service';
import './index.css';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer.jsx';
import Home from './pages/Home/Home';
import Contact from './pages/Contact/Contact';
import About from './pages/About/About';
import Portfolio from './pages/Portfolio/Portfolio.jsx';
import AllServices from './pages/Service/AllServices.jsx';
import SplashScreen from './components/SplashScreen/SplashScreen.jsx';
import ScrollToTop from './components/ScrollArrow/ScrollToTop.jsx';  
// import CustomCursor from './components/CustomCursor/CustomCursor.jsx';

function App() {
  const location = useLocation();
  const [open, setOpen] = useState(false);   
  const [splashSreen, setSplashSreen] = useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  useEffect(() => {
    setTimeout(() => {
      setSplashSreen(false);
    }, 2000);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  if (splashSreen) {
    return <SplashScreen />;
  }

  return (
    <>
    {/* <CustomCursor /> */}
      <Navbar handleClick={handleClick} open={open} setOpen={setOpen} />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/About' element={<About />} />
        <Route path='/service/:serviceNameUrl' element={<Service />} />
        <Route path='/Contact' element={<Contact />} />
        <Route path="/Portfolio" element={<Portfolio />} />
        <Route path='/service/all-service' element={<AllServices />} />
      </Routes>

      <ScrollToTop />  
      <Footer />
    </>
  );
}

export default App;
