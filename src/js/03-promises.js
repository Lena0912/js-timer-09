import Notiflix from "notiflix";

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    
    const shouldResolve = Math.random() > 0.3;
    setTimeout(() => {
      
      if (shouldResolve) {
        resolve({position, delay});
      } else {
        reject({position, delay});
      }
    }, delay);

  });   
  
}
const form = document.querySelector('.form');
form.addEventListener('submit', handleFormSubmit);

function handleFormSubmit(event) {
  event.preventDefault();

  const delayInput = document.querySelector('input[name="delay"]');
  const stepInput = document.querySelector('input[name="step"]');
  const amountInput = document.querySelector('input[name="amount"]');

  const delay = parseInt(delayInput.value);
  const step = parseInt(stepInput.value);
  const amount = parseInt(amountInput.value);

    

  for (let i = 1; i <= amount; i++) {
    const position = i;
    const promiseDelay = delay + (i - 1) * step;

    createPromise(position, promiseDelay)
      .then(({ position, delay }) => {
        Notiflix.Notify.success(
          `✅ Fulfilled promise ${position} in ${delay}ms`
        );
      })
      .catch(({ position, delay }) => {
        Notiflix.Notify.failure(
          `❌ Rejected promise ${position} in ${delay}ms`
        );
      });
  }
}

 
