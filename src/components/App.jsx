import React from 'react';
import Navbar from '../pages/NavBar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Feedback from '../pages/goit-react-hw-02-feedback';
import Phonebook from '../pages/goit-react-hw-02-phonebook';
import Home from '../pages/home';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/Feedback" element={<Feedback />} />
        <Route path="/Phonebook" element={<Phonebook />} />
      </Routes>
    </Router>
  );
}

export default App;
