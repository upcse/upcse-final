import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import Gallery from './components/Gallery';
import StudentRecords from './components/StudentRecords';
import DistrictSecretaries from './components/DistrictSecretaries';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-[#FFFFF0]">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/student-records" element={<StudentRecords />} />
          <Route path="/district-secretaries" element={<DistrictSecretaries />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;