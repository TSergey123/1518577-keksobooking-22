import { map } from './map.js';

const ALERT_SHOW_TIME = 5000
const alertElement = document.createElement('div');

const showAlert = (message) => {
  alertElement.style.zIndex = 100;
  alertElement.style.backgroundColor = 'red';
  alertElement.style.zIndex = 100;
  alertElement.style.position = 'absolute';
  alertElement.style.left = 0;
  alertElement.style.right = 0;
  alertElement.style.top = '50%';
  alertElement.style.marginLeft = 'auto';
  alertElement.style.padding = '10px 3px';
  alertElement.style.fontSize = '30px';
  alertElement.style.textAlign = 'center';
  alertElement.textContent = message;
  map.append(alertElement);

  setTimeout(() => {
    alertElement.remove();
  }, ALERT_SHOW_TIME);
}

const isEscEvent = (evt) => {
  return evt.key === 'Escape' || evt.key === 'Esc';
};

export { isEscEvent, showAlert }
