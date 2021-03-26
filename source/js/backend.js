import { setUserFormSubmit, disableForm } from './form.js';
import { getData } from './fetch.js';
import { initMap, renderMap } from './map.js';
import { showAlert } from './util.js';
import { addFilterListener } from './filter.js';

getData((offer) => {
  disableForm();
  initMap(offer),
  addFilterListener(offer),
  renderMap(offer)
},
() => {
  showAlert('Данные не найдены');
},
);
setUserFormSubmit();
