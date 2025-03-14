import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.form');
const delayInput = document.querySelector('.delay-input');

form.addEventListener('submit', event => {
  event.preventDefault();
  const delay = delayInput.value;
  const fulfilled = document.querySelector(
    'input[name="state"][value="fulfilled"]:checked'
  );
  const success = fulfilled !== null;

  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (success) {
        resolve(delay);
      } else {
        reject(delay);
      }
    }, delay);
  });
  promise.then(value => {
    iziToast.success({
      title: `✅ Fulfilled promise in ${delay}ms`,
      position: 'topRight',
      timeout: 5000,
      icon: false,
    });
  });
  promise.catch(error => {
    iziToast.error({
      title: `❌ Rejected promise in ${delay}ms`,
      position: 'topRight',
      backgroundColor: '#B51B1B',
      color: '#fff',
      theme: 'dark',
      icon: false,
      timeout: 5000,
    });
  });
});
