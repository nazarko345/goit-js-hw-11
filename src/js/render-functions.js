import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const gallery = document.querySelector('.gallery');

export const renderHits = (images) => {
  const markup = images
    .map(
      ({ largeImageURL, webformatURL, tags, likes, views, comments, downloads }) => `
    <a class="gallery-item" href="${largeImageURL}">
      <div class="photo-card">
        <img src="${webformatURL}" alt="${tags}" />
        <div class="info">
          <p><b>Likes:</b> ${likes}</p>
          <p><b>Views:</b> ${views}</p>
          <p><b>Comments:</b> ${comments}</p>
          <p><b>Downloads:</b> ${downloads}</p>
        </div>
      </div>
    </a>`
    )
    .join('');

  gallery.innerHTML = markup;
};

export const lightbox = new SimpleLightbox('.gallery a');
lightbox.refresh();

export function galleryClean() {
  gallery.innerHTML = '';
}