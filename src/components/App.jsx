import { Routes, Route } from 'react-router-dom';

import Navbar from './NavBar/NavBar';
import Home from '../pages/Home';
import FeedbackPage from '../pages/Feedback';
import ImageFinder from '../pages/ImageFinder';
import Phonebook from '../pages/Phonebook';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/feedback" element={<FeedbackPage />} /> */}
        <Route path="/image-finder" element={<ImageFinder />} />
        <Route path="/phonebook" element={<Phonebook />} />
      </Routes>
    </>
  );
}
export default App;
