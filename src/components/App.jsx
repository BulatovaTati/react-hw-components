import React from 'react';
import { Routes, Route } from 'react-router-dom';
import FeedbackPage from '../pages/Feedback';
import Navbar from './NavBar/NavBar';
import Phonebook from '../pages/Phonebook';
import Home from '../pages/Home';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/feedback" element={<FeedbackPage />} />
        <Route path="/phonebook" element={<Phonebook />} />
      </Routes>
    </div>
  );
}
export default App;
