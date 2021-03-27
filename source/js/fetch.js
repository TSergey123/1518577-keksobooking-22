import { showAlert } from './util.js';

const GET_DATA_URL = 'https://22.javascript.pages.academy/keksobooking/data'
const SEND_DATA_URL = 'https://22.javascript.pages.academy/keksobooking';
const getData = (onSuccss, onError) => {
  fetch(GET_DATA_URL)
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      showAlert('Не удалось загрузить данные')
    })
    .then(onSuccss)
    .catch(onError);
};

const sendData = (onSuccess, onError, body) => {
  fetch(
    SEND_DATA_URL,
    {
      method: 'POST',
      body,
    },
  )
    .then((response) => {
      if (response.ok) {
        onSuccess();
      } else {
        onError();
      }
    })
    .catch(onError);
};

export { getData, sendData };
