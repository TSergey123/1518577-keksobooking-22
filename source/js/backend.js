import { setUserFormSubmit, disableForm } from './form.js';
import { getData } from './fetch.js';
import { initMap, renderMap, reRenderMarkers } from './map.js';
import { showAlert } from './util.js';
import { addFilterListener } from './filter.js';

getData((offers) => {
  disableForm();
  initMap(offers),
  addFilterListener(offers),
  renderMap(offers)
  reRenderMarkers(offers);
},
() => {
  showAlert('Данные не найдены');
},
);
setUserFormSubmit();
