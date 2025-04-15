import axios from 'axios';

const API_KEY = '49730830-c57beb55a0f893ff92d6370c6';

export async function getImagesByQuery(query) {
  return axios.get('https://pixabay.com/api/', {
    params: {
      key: API_KEY,
      q: query,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: 'true',
    },
  });
}
