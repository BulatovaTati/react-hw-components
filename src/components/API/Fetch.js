import axios from 'axios';

const API_KEY = '7c47f39dc565b202f275767eff95366e';
const BASE_URL = 'https://api.themoviedb.org/3';

// Отримую популярні фільми
const getTrendingMovies = async () => {
  try {
    const response = await axios.get(
      `${BASE_URL}/trending/movie/day?api_key=${API_KEY}`
    );
    // console.log(response.data);
    return response.data;
  } catch (error) {
    console.error('Smth wrong with api get full trends' + error.message);
  }
};

// Запит по назві фільму
const getMovieByName = async text => {
  try {
    const response = await axios.get(
      `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${text}`
    );
    // console.log(response.data);
    return response.data;
  } catch (error) {
    console.error('Smth wrong with api search fetch' + error.message);
  }
};

export { getTrendingMovies, getMovieByName };
