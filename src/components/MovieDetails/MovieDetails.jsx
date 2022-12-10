import { useState } from 'react';
import { useEffect } from 'react';
import { NavLink, Outlet, useParams } from 'react-router-dom';
import { fetchMovieById } from 'services/Fetch';
import MovieCard from './MovieCard/MovieCard';

const MovieDetails = () => {
  const [movie, setMovie] = useState([]);
  const { movieId } = useParams();
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
      console.log('error:kkkkkkkkkkkkkkk ', error);
    }
  }, [movieId]);
  return (
    <main>
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
