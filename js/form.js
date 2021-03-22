import { sendData } from "./fetch.js";
import { showSuccessMessage, showErrorMessage } from "./message.js";
import {resetMainMarker, setAddress} from "./map.js";

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
const mapFiltersSelect = mapFilters.querySelectorAll('select');
const mapFiltersFieldset = mapFilters.querySelectorAll('fieldset');
const mainForm = document.querySelector('.ad-form');


export{address}

const disableForm = () => {
  form.classList.add('ad-form--disabled');
  // mapFilters.classList.add('ad-form--disabled');

  // mapFiltersFieldset.forEach(function(item){
  //   item.setAttribute('disabled', true);
  // });

  // mapFiltersSelect.forEach(function(item){
  //   item.setAttribute('disabled', true);
  // });

  formFieldset.forEach(function (item) {
    item.setAttribute('disabled', true);
  });
}
export{disableForm};

const activateForm = () => {
  form.classList.remove('ad-form--disabled');
  mapFilters.classList.remove('ad-form--disabled');

  mapFiltersFieldset.forEach(function(item){
    item.removeAttribute('disabled', true);
  });

  mapFiltersSelect.forEach(function(item){
    item.removeAttribute('disabled', true);
  });

  formFieldset.forEach(function (item) {
    item.removeAttribute('disabled', true);
  });
}

export{activateForm};

// const typeCapacity = {
//   100: '<option value="0">не для гостей</option>',
//   1: '<option value="1">для 1 гостя</option>',
//   2: '<option value="2">для 2 гостей</option> <option value="1"> для 1 гостя</option>',
//   3: '<option value="3">для 3 гостей</option> <option value="2">для 2 гостей</option> <option value="1">для 1 гостя</option>',
// }
// const chooseRoom = (evt) => {
//   roomCapacity.innerHTML = typeCapacity[roomNumber.value];
// }
// roomNumber.addEventListener('click', chooseRoom);



const roomValidation = () => {
if (roomNumber.selectedIndex === 0) {
  roomCapacity.selectedIndex = 2;
  roomCapacity.options[0].disabled = true;
  roomCapacity.options[1].disabled = true;
  roomCapacity.options[3].disabled = true;
}

roomNumber.addEventListener('change', () => {
  if (roomNumber.selectedIndex === 0) {
    roomCapacity.selectedIndex = 2;
    roomCapacity.options[2].disabled = false;
    roomCapacity.options[0].disabled = true;
    roomCapacity.options[1].disabled = true;
    roomCapacity.options[3].disabled = true;
  } else if (roomNumber.selectedIndex === 1) {
    roomCapacity.selectedIndex = 2;
    roomCapacity.options[1].disabled = false;
    roomCapacity.options[2].disabled = false;
    roomCapacity.options[0].disabled = true;
    roomCapacity.options[3].disabled = true;
  } else if (roomNumber.selectedIndex === 2) {
    roomCapacity.selectedIndex = 2;
    roomCapacity.options[0].disabled = false;
    roomCapacity.options[1].disabled = false;
    roomCapacity.options[2].disabled = false;
    roomCapacity.options[3].disabled = true;
  } else if (roomNumber.selectedIndex === 3) {
    roomCapacity.options[3].disabled = false;
    roomCapacity.options[0].disabled = true;
    roomCapacity.options[1].disabled = true;
    roomCapacity.options[2].disabled = true;
    roomCapacity.selectedIndex = 3;
  }
  roomCapacity.reportValidity();
});
}
roomValidation();






// const MAX_VAL = 100;
// const roomInt = Number(roomNumber.value)
// roomNumber.addEventListener('click', () => {
//   if (roomInt === MAX_VAL) {
//     roomCapacity.selectedIndex = 0;
//     optionCapacity.forEach((option) => {
//       const optInt = Number(option.value);
//       option.disabled = optInt > roomCapacity.selectedIndex;
//     });
//   } else {
//     roomCapacity.selectedIndex = roomInt;
//     optionCapacity.forEach((option, index) => {
//       const optInt = Number(option.value);
//       option.disabled = index === 0 || optInt > roomInt;
//     });
//   }
// });



// onRoomCapacityChange();

// Хотел изначальное сделать через disabled.
// Был вариант сделать так как уже сделал, только перечислить все поля, а ненужным добавить аттрибут disabled.
// Но так запись получается слишком длинной, а если полей будет много, то получится не оч.
// Вообще и с моим решением, с большим количеством полей будут проблемы.
// Можешь пожалуйста подсказать, как сделать аналогично или через disabled, только через if?

// Что-то вроде такого, только не знаю как грамотно сделать
// roomNumber.addEventListener('click', () => {
//   if(roomNumber.value > roomCapacity.value)
//     roomCapacity.setCustomValidity(roomCapacity.value.setAttribute('disabled', true) );
// });


const chooseTime = (evt) => {
  timeIn.value = evt.target.value
  timeOut.value = evt.target.value
}
timeOut.addEventListener('click', chooseTime);
timeIn.addEventListener('click', chooseTime);

// как сделать так что бы например при выборе первого элемента из первого списка
// во втором списке бы выбирался например второй элемент из списка?
// понимаю что это не нужно, но просто, для общего понимания

const typePrice = {
  bungalow: '0',
  flat: '1000',
  house: '5000',
  palace: '10000',
}

const typeChange = () => {
  price.placeholder = typePrice[type.value];
  price.min = typePrice[type.value];
}
type.addEventListener('click', typeChange);

title.addEventListener('input', () =>{
  const MIN_TITLE_LENGTH = 30;
  const MAX_TITLE_LENGTH = 100;
  const valueLength = title.value.length;
  if(valueLength < MIN_TITLE_LENGTH){
    title.setCustomValidity('Еще ' + (MIN_TITLE_LENGTH - valueLength) + ' симв.');
  }

  else if(valueLength > MAX_TITLE_LENGTH){
    title.setCustomValidity('Удалите лишние ' + (valueLength - MAX_TITLE_LENGTH) + ' симв.');
  }
  else {
    title.setCustomValidity('');
  }
  title.reportValidity();
});


price.addEventListener('input', () => {
  const MAX_PRICE_VALUE = 1000000;
  const priceValue = price.value;
  if(priceValue > MAX_PRICE_VALUE) {
    price.setCustomValidity('Выберите дешевле на ' + (priceValue - MAX_PRICE_VALUE));
  }

  if(!/^[0-9]+$/.test(priceValue)){
    price.setCustomValidity('Для ввода доступны только цифры');
  }
  if(priceValue < price.min){
    price.setCustomValidity('Минимальная цена для данного типа жилья - ' + typePrice[type.value]);
  }

  else {
    price.setCustomValidity('');
  }

  price.reportValidity();
});


const resetForm = () => {
  mainForm.reset();
  mapFilters.reset();
  resetMainMarker();
  setAddress();
}

const formSubmit = document.querySelector('.ad-form__submit');
const setUserFormSubmit = () => {
  mainForm.addEventListener('submit', (evt) => {
    // const formData = new FormData(evt);
    // console.log("qwert");
    evt.preventDefault();

    sendData(
      () => {

        showSuccessMessage();
        resetForm();
      },
      () => showErrorMessage(),
      new FormData(evt.target),

      // formData(),
    );
  });
}

export {setUserFormSubmit}