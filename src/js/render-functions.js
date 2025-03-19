import SimpleLightbox from "simplelightbox";
import 'simplelightbox/dist/simple-lightbox.min.css';

const gallery = document.querySelector('.gallery');

export const renderHits = (images) => {
  const markup = images
    .map(
      ({ largeImageURL, webformatURL, tags, likes, views, comments, downloads }) => `
  <li class="gallery-item">
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
    </a>
  </li>`
    )
    .join('');

  gallery.innerHTML = markup;
  lightbox.refresh();
};

const lightbox = new SimpleLightbox('.gallery a');

export function galleryClean() {
  gallery.innerHTML = '';
}