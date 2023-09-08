import React, { useEffect, useRef, useState } from 'react';
import { motion, useAnimation, useInView } from "framer-motion";
import Home from './Pages/Home';
import Navbars from './components/Navbar';
import { Routes, Route } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import About from './Pages/About';
import Contact from './Pages/Contact';
function App() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });


  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView, mainControls]);
  return (
    <div className="App">

      <Router >
        <Navbars />
        <motion.div
          ref={ref}
          variants={{
            hidden: { opacity: 0, y: 100 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden" animate={mainControls} transition={{ duration: 0.5, delay: 0.25 }}
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </motion.div>
      </Router>
    </div>
  );
}

export default App;
