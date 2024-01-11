import '../css/common.css';
import BSN from 'bootstrap.native';

// const PROMPT_DELAY = 1000;


// const MAX_PROMPT_ATTEMPTS = 3;

// let promptCounter = 0;
// let hasSubscribed = false;

// const intervalId = setInterval(() => {
//     if (promptCounter === MAX_PROMPT_ATTEMPTS || hasSubscribed) {
//         console.log('stop interval')
//         clearInterval(intervalId)
//         return;
//     }
//     console.log('subscribe!!!' + Date.now());
//     promptCounter += 1;
// }, PROMPT_DELAY);




  var subscriptionModal = new BSN.Modal('subscription-modal');
subscriptionModal.show();
  console.log(subscriptionModal);


