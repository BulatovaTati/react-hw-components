import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import FeedbackPage from '../pages/Feedback';
import Navbar from './NavBar/NavBar';
import Phonebook from '../pages/Phonebook';
import Home from '../pages/Home';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/feedback" element={<FeedbackPage />} />
        <Route path="/phonebook" element={<Phonebook />} />
      </Routes>
    </Router>
  );
}
export default App;
