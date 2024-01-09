import '../css/style.css';

const NOTIFICATION_DELAY = 3000;
let timeoutId = null;

const refs = {
  notification: document.querySelector('.js-alert'),
};

refs.notification.addEventListener('click', onNotificationClick);

showNotification();

function onNotificationClick() {
    hideNotification(); 
    clearTimeout(timeoutId);
}

function showNotification() {
    refs.notification.classList.add('.is-visible');
    timeoutId = setTimeout(() => {
        console.log('to close alert');
        hideNotification();
    }, NOTIFICATION_DELAY);
}

function hideNotification() {
    refs.notification.remove('.is-visible');
}