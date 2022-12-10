import { useState, useEffect } from 'react';
import MoviesList from 'components/MovieList/MovieList';
import { getTrendingMovies } from 'services/Fetch';

const Home = () => {
  const [movies, setMovies] = useState([]);
  // const [isLoading, setIsLoading] = useState(false);
  // const [error, setError] = useState(false);

  useEffect(() => {
    async function fetchMovies() {
      try {
        // setIsLoading(true);
        const movies = await getTrendingMovies();
        setMovies(movies.results);
        // setIsLoading(false);
      } catch (error) {
        console.log('error: ', error);
        // setError(true);
        // setIsLoading(false);
      }
    }
    fetchMovies();
  }, []);
  return (
    <main>
      <h1 style={{ textAlign: 'center' }}>Trendings Today</h1>
      {movies.length > 0 && <MoviesList movies={movies} />}
    </main>
  );
};

export default Home;
