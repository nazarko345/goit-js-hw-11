import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const startBtn = document.querySelector('[data-start]');
const dateInput = document.querySelector('#datetime-picker');

const dataDays = document.querySelector('[data-days]');
const dataHours = document.querySelector('[data-hours]');
const dataMinutes = document.querySelector('[data-minutes]');
const dataSeconds = document.querySelector('[data-seconds]');

let userSelectedDate = null;
let intervalId = null;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    const selectedDate = selectedDates[0];
    const currentDate = new Date();

    if (selectedDate <= currentDate) {
      iziToast.error({
        title: 'Please choose a date in the future',
        position: 'topRight',
        backgroundColor: '#B51B1B',
        color: '#fff',
        theme: 'dark',
        timeout: 5000,
      });
      startBtn.classList.remove('active-b');
    } else {
      userSelectedDate = selectedDate;
      startBtn.classList.add('active-b');
    }
  },
};

flatpickr(dateInput, options);

startBtn.addEventListener('click', event => {
  event.preventDefault();
  if (!userSelectedDate) {
    return;
  }

  startBtn.classList.remove('active-b');
  dateInput.classList.add('disable-i');
  dateInput.disabled = true;

  intervalId = setInterval(() => {
    const currentTime = Date.now();
    const remainingTime = userSelectedDate.getTime() - currentTime;

    if (remainingTime <= 0) {
      clearInterval(intervalId);
      dateInput.classList.remove('disable-i');
      dateInput.disabled = false;
      return;
    }

    const { days, hours, minutes, seconds } = convertMs(remainingTime);
    dataDays.textContent = days.toString().padStart(2, '0');
    dataHours.textContent = hours.toString().padStart(2, '0');
    dataMinutes.textContent = minutes.toString().padStart(2, '0');
    dataSeconds.textContent = seconds.toString().padStart(2, '0');
  }, 1000);
});

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}
