import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import Movies from 'pages/Movies';
import NotFound from '../pages/NotFound';
import { Container, Header, Link } from './App.styled';

const App = () => {
  return (
    <Container>
      <Header>
        <nav>
          <Link to="/" end>
            Home
          </Link>
          <Link to="/movies">Movie</Link>
        </nav>
      </Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Container>
  );
};

export default App;
