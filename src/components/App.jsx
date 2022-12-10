import { Route, Routes } from 'react-router-dom';
import Home from 'pages/Home';
import Movies from 'pages/Movies';
import NotFound from 'pages/NotFound';
import { Container, Header, Link } from './App.styled';
import MovieDetails from './MovieDetails/MovieDetails';
import Reviews from './MovieDetails/Reviews/Reviews';
import Cast from './MovieDetails/Cast/Cast';

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
        <Route path="movies" element={<Movies />} />
        <Route path="movies/:movieId" element={<MovieDetails />}>
          <Route path="reviews" element={<Reviews />} />
          <Route path="cast" element={<Cast />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </Container>
  );
};

export default App;
