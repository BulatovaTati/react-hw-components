import React from 'react';
import Navbar from '../pages/NavBar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import FeedbackPage from '../pages/Feedback.jsx';

import Phonebook from '../pages/Phonebook.jsx';
import Home from '../pages/Home.jsx';

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
