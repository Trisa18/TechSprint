import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Timeline from './pages/Timeline';
import ProblemStatement from './pages/ProblemStatement';
import Guidelines from './pages/Guidelines';
import Contact from './pages/Contact';

import BackgroundEffect from './components/BackgroundEffect';
import CursorEffect from './components/CursorEffect';

function App() {
  return (
    <Router>
      <div className="app-layout">
        <BackgroundEffect />
        <CursorEffect />
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/timeline" element={<Timeline />} />
            <Route path="/problem-statement" element={<ProblemStatement />} />
            <Route path="/guidelines" element={<Guidelines />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
