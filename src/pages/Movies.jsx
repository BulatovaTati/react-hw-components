import MoviesList from 'components/MovieList/MovieList';
import Searchbar from 'components/Searchbar/Searchbar';
import { useState } from 'react';
import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getMovieByName } from 'services/Fetch';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const searchQuery = searchParams.get('query') ?? '';

  useEffect(() => {
    if (searchQuery === '') return;

    async function fetchMovies() {
      try {
        const movies = await getMovieByName(searchQuery);
        setMovies(movies.results);
        console.log('movies.results: ', movies.results);
      } catch (error) {
        console.log(error);
      }
    }
    fetchMovies();
  }, [searchQuery]);

  const searchMovie = query => {
    setSearchParams(query !== '' ? { query: query } : {});
  };

  const getMovies = newQuery => {
    console.log('newQuery: ', newQuery);
    if (newQuery === searchParams) return;
    searchMovie(newQuery);
    setMovies([]);
  };

  return (
    <main>
      <Searchbar onChange={getMovies} />
      <MoviesList movies={movies} />
    </main>
  );
};

export default Movies;
