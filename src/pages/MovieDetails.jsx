import { useState, useEffect } from 'react';
import { Outlet, useLocation, useParams } from 'react-router-dom';
import { fetchMovieById } from 'services/Fetch';
import MovieCard from 'components/MovieDetails/MovieCard/MovieCard';
import BackLink from 'components/MovieDetails/GoBack/GoBack';
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
      } catch (error) {
        console.log(error);
      }
    }
    fetchMovies();
  }, [movieId]);

  if (!movie) return null;

  return (
    <main>
      <BackLink to={location.state?.from}>Go Back</BackLink>
      <MovieCard movie={movie} />
      <Section>
        <Title>Aditional Information</Title>
        <Link to="cast" state={{ from: location.state?.from }}>
          Cast
        </Link>
        <Link to="reviews" state={{ from: location.state?.from }}>
          Reviews
        </Link>
      </Section>
      <Outlet />
    </main>
  );
};

export default MovieDetails;
