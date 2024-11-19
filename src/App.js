import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import Blog from "./components/Blog";
import Team from "./components/Team";
import Pricing from "./components/Pricing";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";



import AOS from 'aos';
import 'aos/dist/aos.css';

import "./css/main.css";

function App() {

  useEffect(() => {
    AOS.init({
      duration: 600,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });
  }, [])



  const handleTouchStart = (event) => {
    const touch = event.touches[0];

    if (touch.clientX < window.innerWidth * 0.1 || touch.clientX > window.innerWidth * 0.9) {
      event.preventDefault();
    }
    if (touch.clientY > window.innerHeight * 0.9) {
      event.preventDefault();
    }
  };


  useEffect(() => {

    document.addEventListener("touchstart", handleTouchStart, { passive: false });

    return () => {
      document.removeEventListener("touchstart", handleTouchStart, { passive: false });
    };
  }, [])


  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Services />} />
          <Route path="/Pricing" element={<Pricing />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/team" element={<Team />} />
        </Routes>
        <Footer />
      </Router>



    </>
  );
}

export default App;
