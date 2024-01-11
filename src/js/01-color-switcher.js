import '../css/style.css';

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
let timerId;

const refs = {
  start: document.querySelector('[data-start]'),
  stop: document.querySelector('[data-stop]'),
  body: document.querySelector('body'),
};
refs.start.addEventListener('click', onStartBtn);
refs.stop.addEventListener('click', onStopBtn);
refs.stop.disabled = true;

function changeBodyColor() {
  const bodyColor = getRandomHexColor();
  refs.body.style.backgroundColor = bodyColor;
}

function onStartBtn() {
  refs.stop.disabled = false;
  refs.start.disabled = true;
  timerId = setInterval(() => {
    changeBodyColor();
  }, 1000);
};

function onStopBtn() {
  refs.stop.disabled = true;
  refs.start.disabled = false;
  clearInterval(timerId);
};

