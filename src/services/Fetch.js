import axios from 'axios';

const API_KEY = '7c47f39dc565b202f275767eff95366e';
const BASE_URL = 'https://api.themoviedb.org/3';

// Отримую популярні фільми
const getTrendingMovies = async () => {
  const response = await axios.get(
    `${BASE_URL}/trending/movie/day?api_key=${API_KEY}`
  );

  return response.data;
};

// Запит по назві фільму
const getMovieByName = async text => {
  const response = await axios.get(
    `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${text}`
  );

  return response.data;
};

export { getTrendingMovies, getMovieByName };
