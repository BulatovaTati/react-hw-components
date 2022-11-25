import axios from 'axios';

class ImageFinder {
  #API_KEY = '29527006-ad6e7c34d6702116665004a30';
  #BASE_URL = 'https://pixabay.com/api/';

  page = 1;
  searchQuery = '';
  per_page = 40;

  async fetchPictures() {
    const resp = await axios.get(this.#BASE_URL, {
      params: {
        key: this.#API_KEY,
        q: this.searchQuery,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
        page: this.page,
        per_page: this.per_page,
      },
    });

    return resp.data;
  }
  incrementPage() {
    this.page += 1;
  }

  resetPage() {
    this.page = 1;
  }

  get query() {
    return this.searchQuery;
  }

  set query(newQuery) {
    this.searchQuery = newQuery;
  }
}
export default ImageFinder;
