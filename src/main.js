import { fetchImages } from './js/pixabay-api.js';
import { renderHits, galleryClean } from './js/render-functions.js';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.form');
const loader = document.querySelector('.loader');
const input = document.querySelector('.input');

form.addEventListener('submit', event => {
  event.preventDefault();
  if (input.value.trim() === '') {
    iziToast.warning({
      title: 'Please type what you want to find',
      position: 'topRight',
      timeout: 5000,
    });
    return;
  }

  galleryClean();
  classAdd();

  fetchImages(input.value)
    .then(images => {
      classRemove();
      if (images.length === 0) {
        iziToast.error({
          message:
            'Sorry, there are no images matching your search query. Please try again!',
          position: 'topRight',
        });
        form.reset();
        return;
      }
      renderHits(images);
      lightbox.refresh();
    })
    .catch(error => {
      console.log(error);
      classRemove();
      iziToast.error({
        title:
          'Sorry, there are no images matching your search query. Please try again!',
        position: 'topRight',
        timeout: 5000,
      });
    });

  function classAdd() {
    loader.classList.add('active');
  }
  function classRemove() {
    loader.classList.remove('active');
  }
});
