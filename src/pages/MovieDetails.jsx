import { useState } from 'react';
import { useEffect } from 'react';
import { NavLink, Outlet, useLocation, useParams } from 'react-router-dom';
import { fetchMovieById } from 'services/Fetch';
import MovieCard from 'components/MovieDetails/MovieCard/MovieCard';
import BackLink from 'components/MovieDetails/Back';

const MovieDetails = () => {
  const [movie, setMovie] = useState([]);
  const { movieId } = useParams();
  const location = useLocation();
  const backHome = location.state?.from ?? '/';

  // const backMovies = location.state?.from ?? '/movies';
  // 504949;
  useEffect(() => {
    try {
      async function fetchMovies() {
        try {
          const movies = await fetchMovieById(movieId);
          setMovie(movies);
        } catch (error) {
          console.log(error);
        }
      }
      fetchMovies();
    } catch (error) {
      console.log('error: ', error);
    }
  }, [movieId]);
  return (
    <main>
      <BackLink to={backHome}>Go Back</BackLink>
      <MovieCard movie={movie} />
      <div>
        <h3>Aditional Information</h3>
        <NavLink to="cast">Cast</NavLink>
        <br />
        <NavLink to="reviews">Reviews</NavLink>
      </div>
      <Outlet />
    </main>
  );
};

export default MovieDetails;
