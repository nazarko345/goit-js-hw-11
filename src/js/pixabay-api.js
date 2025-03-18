import axios from 'axios';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const pixabayUrl = 'https://pixabay.com/api/';

export const fetchImages = query => {
  return axios
    .get(pixabayUrl, {
      params: {
        key: '49409853-9b66959f7621caabc2c0e0f94',
        q: query.trim(),
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
      },
    })
    .then(response => response.data.hits)
    .catch(error => {
      console.log(error);
      iziToast.error({
        title:
          'Sorry, there are no images matching your search query. Please try again!',
        position: 'topRight',
        timeout: 5000,
      });
      throw error;
    });
};
