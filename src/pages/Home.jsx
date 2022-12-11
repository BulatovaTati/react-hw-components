import { useState, useEffect } from 'react';
import MoviesList from 'components/MovieList/MovieList';
import { getTrendingMovies } from 'services/Fetch';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loader from 'components/Loader/Loader';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function fetchMovies() {
      try {
        setIsLoading(true);
        const movies = await getTrendingMovies();
        setMovies(movies.results);
        setIsLoading(false);
      } catch (_) {
        toast.warn('Sorry, smth wrong. Please try again.');
      } finally {
        setIsLoading(false);
      }
    }
    fetchMovies();
  }, []);
  return (
    <main>
      <h1 style={{ textAlign: 'center' }}>Trendings Today</h1>
      {isLoading && <Loader />}
      {movies && !isLoading && <MoviesList movies={movies} />}
      <ToastContainer autoClose={2000} />
    </main>
  );
};

export default Home;
