import { sendData, getData } from './fetch.js';
import { showSuccessMessage, showErrorMessage } from './message.js';
import { resetMainMarker, setAddress, reRenderMarkers, removeMarkers, renderMap, initMap } from './map.js';
import { preview, previewBlockImage } from './image-validation.js';

const MAX_PRICE_VALUE = 1000000;
const MAX_ROOMS_NUMBER = 100;
const MIN_TITLE_LENGTH = 30;
const MAX_TITLE_LENGTH = 100;
const form = document.querySelector('.ad-form')
const type = form.querySelector('#type');
const address = form.querySelector('#address');
const title = form.querySelector('#title');
const price = form.querySelector('#price');
const timeIn = form.querySelector('#timein');
const timeOut = form.querySelector('#timeout');
const roomNumber = form.querySelector('#room_number');
const roomCapacity = form.querySelector('#capacity');
const formFieldset = form.querySelectorAll('fieldset');
const mapFilters = document.querySelector('.map__filters');
const mapFiltersFieldset = mapFilters.querySelectorAll('fieldset');
const mainForm = document.querySelector('.ad-form');
const mapDisabledElements = document.querySelectorAll('fieldset, select.map__filter');

const disableForm = () => {
  form.classList.add('ad-form--disabled');
  formFieldset.forEach(function (item) {
    item.setAttribute('disabled', true);
  });
}

const activateForm = () => {
  form.classList.remove('ad-form--disabled');
  mapFilters.classList.remove('ad-form--disabled');

  mapFiltersFieldset.forEach(function (item) {
    item.removeAttribute('disabled', true);
  });

  mapDisabledElements.forEach(function (item) {
    item.removeAttribute('disabled', true);
  });
}

const checkAmount = () => {
  const rooms = Number(roomNumber.value);
  const capacityAmount = roomCapacity.value;

  if (rooms === MAX_ROOMS_NUMBER && capacityAmount !== '0') {
    roomCapacity.setCustomValidity('Выберите вариант "Не для гостей"');
  } else if (rooms < capacityAmount) {
    roomCapacity.setCustomValidity('Выберите меньшее число гостей');
  } else {
    roomCapacity.setCustomValidity('');
  }
}
checkAmount();

roomCapacity.addEventListener('change', () => {
  checkAmount();
})

roomNumber.addEventListener('change', () => {
  checkAmount();
})

const onChooseTime = (evt) => {
  timeIn.value = evt.target.value
  timeOut.value = evt.target.value
}
timeOut.addEventListener('click', onChooseTime);
timeIn.addEventListener('click', onChooseTime);

const typePrice = {
  bungalow: '0',
  flat: '1000',
  house: '5000',
  palace: '10000',
}

const onTypeChange = () => {
  price.placeholder = typePrice[type.value];
  price.min = typePrice[type.value];
}
type.addEventListener('click', onTypeChange);

title.addEventListener('input', () => {
  const valueLength = title.value.length;

  if (valueLength < MIN_TITLE_LENGTH) {
    title.setCustomValidity('Еще ' + (MIN_TITLE_LENGTH - valueLength) + ' симв.');
  }

  else if (valueLength > MAX_TITLE_LENGTH) {
    title.setCustomValidity('Удалите лишние ' + (valueLength - MAX_TITLE_LENGTH) + ' симв.');
  }
  else {
    title.setCustomValidity('');
  }
  title.reportValidity();
});

const validateRoomPrice = () => {
  const priceValue = price.value;
  if (priceValue > MAX_PRICE_VALUE) {
    price.setCustomValidity('Выберите дешевле на ' + (priceValue - MAX_PRICE_VALUE));
  }

  if (!/^[0-9]+$/.test(priceValue)) {
    price.setCustomValidity('Для ввода доступны только цифры');
  }
  if (priceValue < price.min) {
    price.setCustomValidity('Минимальная цена для данного типа жилья - ' + typePrice[type.value]);
  }

  else {
    price.setCustomValidity('');
  }

  price.reportValidity();
}

price.addEventListener('input', () => {
  validateRoomPrice();
});

type.addEventListener('blur', () => {
  validateRoomPrice();
});

const resetForm = () => {
  mainForm.reset();
  mapFilters.reset();
  resetMainMarker();
  setAddress();
}

const resetPhotos = () => {
  preview.src = 'img/muffin-grey.svg';
  previewBlockImage.remove();
}

const setUserFormSubmit = () => {
  mainForm.addEventListener('submit', (evt) => {
    evt.preventDefault();
    sendData(
      () => {
        showSuccessMessage();
        resetForm();
        resetPhotos();
      },
      () => showErrorMessage(),
      new FormData(evt.target),
    );
    getData((offer) => {
      removeMarkers();
      renderMap(offer);

      initMap(offer),
      reRenderMarkers(offer);
    },
    );
  });
}


export { setUserFormSubmit, activateForm, disableForm, address, resetPhotos, resetForm, onTypeChange };
