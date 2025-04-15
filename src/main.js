import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import { getImagesByQuery } from './js/pixabay-api';
import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
} from './js/render-functions';

const form = document.querySelector('.form');
form.addEventListener('submit', hendleSubmit);
function hendleSubmit(event) {
  event.preventDefault();
  const query = event.target.elements['search-text'].value.trim();
  if (query === '') {
    return;
  }
  showLoader();
  clearGallery();
  getImagesByQuery(query)
    .then(({ data: { hits } }) => {
      if (hits.length === 0) {
        iziToast.error({
          message:
            'Sorry, there are no images matching your search query. Please try again!',
          position: 'bottomRight',
        });
      }
      createGallery(hits);
    })
    .catch(error => console.log(error))
    .finally(() => hideLoader());
  event.target.reset();
}
