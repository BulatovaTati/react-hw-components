import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './NavBar/NavBar';
import Home from '../pages/Home';
import ImageFinder from '../pages/Image_Finder';
import Phonebook from '../pages/Phonebook';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/image-finder" element={<ImageFinder />} />
        <Route path="/phonebook" element={<Phonebook />} />
      </Routes>
    </Router>
  );
}
export default App;
