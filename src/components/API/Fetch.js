import axios from 'axios';

const API_KEY = '29527006-ad6e7c34d6702116665004a30';
const BASE_URL = 'https://pixabay.com/api/';

const FetchImages = async (searchQuery, page = 1) => {
  const resp = await axios.get(BASE_URL, {
    params: {
      key: API_KEY,
      q: searchQuery,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
      page: page,
      per_page: 12,
    },
  });

  return resp.data;
};

export default FetchImages;
