import { useState, useEffect } from 'react';
import { Outlet, useLocation, useParams } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { fetchMovieById } from 'services/Fetch';
import MovieCard from 'components/MovieDetails/MovieCard/MovieCard';
import BackLink from 'components/MovieDetails/GoBack/GoBack';
import { Warn } from 'components/Toast/Toast';
import {
  Section,
  Link,
  Title,
} from '../components/MovieDetails/MovieDetails.styled';

const MovieDetails = () => {
  const [movie, setMovie] = useState([]);
  const { movieId } = useParams();
  const location = useLocation();

  useEffect(() => {
    async function fetchMovies() {
      try {
        const movies = await fetchMovieById(movieId);
        setMovie(movies);
      } catch (_) {
        Warn();
      }
    }
    fetchMovies();
  }, [movieId]);

  const BackLinkTo = location.state?.from ?? '/movies';

  return (
    <main>
      <BackLink to={BackLinkTo}>Go Back</BackLink>
      <MovieCard movie={movie} />
      <Section>
        <Title>Aditional Information</Title>

        <Link to="cast" state={{ from: BackLinkTo }}>
          Cast
        </Link>
        <Link to="reviews" state={{ from: BackLinkTo }}>
          Reviews
        </Link>
      </Section>
      <Outlet />
      <ToastContainer autoClose={2000} />
    </main>
  );
};

export default MovieDetails;
