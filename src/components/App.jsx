import React from 'react';
import Navbar from '../pages/NavBar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import FeedbackPage from '../pages/Feedback';

import Phonebook from '../pages/Phonebook';
import Home from '../pages/Home';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/Feedback" element={<FeedbackPage />} />
        <Route path="/Phonebook" element={<Phonebook />} />
      </Routes>
    </Router>
  );
}
export default App;
