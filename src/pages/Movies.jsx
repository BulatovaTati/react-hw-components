import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Loader from 'components/Loader/Loader';
import { getMovieByName } from 'services/Fetch';
import Searchbar from 'components/Searchbar/Searchbar';
import MoviesList from 'components/MovieList/MovieList';
import { Warn, WarnSearchQuery } from 'components/Toast/Toast';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const searchQuery = searchParams.get('query') ?? '';

  useEffect(() => {
    if (searchQuery === '') return;

    async function fetchMovies() {
      try {
        setIsLoading(true);
        const movies = await getMovieByName(searchQuery);
        setMovies(movies.results);

        if (movies.results.length === 0) {
          WarnSearchQuery(searchQuery);
        }
      } catch (_) {
        Warn();
      } finally {
        setIsLoading(false);
      }
    }

    fetchMovies();
  }, [searchQuery]);

  const searchMovie = query => {
    setSearchParams(query !== '' ? { query: query } : {});
  };

  const getMovies = newQuery => {
    if (newQuery === searchParams) return;
    searchMovie(newQuery);
    setMovies([]);
  };

  return (
    <main>
      <Searchbar onChange={getMovies} />
      {isLoading && <Loader />}
      {movies && !isLoading && <MoviesList movies={movies} />}
      <ToastContainer autoClose={2000} />
    </main>
  );
};

export default Movies;
