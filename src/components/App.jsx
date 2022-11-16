import { Routes, Route } from 'react-router-dom';
import Navbar from './NavBar/NavBar';
import Home from '../pages/Home';
import FeedbackPage from '../pages/Feedback';
import Phonebook from '../pages/Phonebook';
import NotFound from '../pages/NotFound';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/feedback" element={<FeedbackPage />} />
        <Route path="/phonebook" element={<Phonebook />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}
export default App;
