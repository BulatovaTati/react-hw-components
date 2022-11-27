import { Routes, Route } from 'react-router-dom';

import Navbar from './NavBar/NavBar';
import Home from '../pages/Home';
import ImageFinder from '../pages/ImageFinder';
import Phonebook from '../pages/Phonebook';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/image-finder" element={<ImageFinder />} />
        <Route path="/phonebook" element={<Phonebook />} />
      </Routes>
    </>
  );
}
export default App;
