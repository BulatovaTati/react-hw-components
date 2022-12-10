import { useState, useEffect } from 'react';
import { NavLink, Outlet, useLocation, useParams } from 'react-router-dom';
import { fetchMovieById } from 'services/Fetch';
import MovieCard from 'components/MovieDetails/MovieCard/MovieCard';
import BackLink from 'components/MovieDetails/GoBack/GoBack';

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
      <div>
        <h3>Aditional Information</h3>
        <NavLink to="cast" state={{ from: location.state?.from }}>
          Cast
        </NavLink>
        <br />
        <NavLink to="reviews" state={{ from: location.state?.from }}>
          Reviews
        </NavLink>
      </div>
      <Outlet />
    </main>
  );
};

export default MovieDetails;
