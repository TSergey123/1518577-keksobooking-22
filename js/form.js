const type = document.querySelector('#type');
const price = document.querySelector('#price');
const timeIn = document.querySelector('#timein');
const timeOut = document.querySelector('#timeout');
const form = document.querySelector('.ad-form')
const formFieldset = form.querySelectorAll('fieldset');
const mapFilters = document.querySelector('.map__filters');
const mapFiltersSelect = mapFilters.querySelectorAll('select');
const mapFiltersFieldset = mapFilters.querySelectorAll('fieldset');


const disableForm = () => {
  form.classList.add('ad-form--disabled');
  mapFilters.classList.add('ad-form--disabled');

  mapFiltersFieldset.forEach(function(item){
    item.setAttribute('disabled', true);
  });

  mapFiltersSelect.forEach(function(item){
    item.setAttribute('disabled', true);
  });

  formFieldset.forEach(function (item) {
    item.setAttribute('disabled', true);
  });
}
disableForm();

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

activateForm();



const typePrice = {
  bungalow: '0',
  flat: '1000',
  house: '5000',
  palace: '10000',
}

const chooseTime = (evt) => {
  timeIn.value = evt.target.value
  timeOut.value = evt.target.value
}
timeOut.addEventListener('click', chooseTime);
timeIn.addEventListener('click', chooseTime);

// как сделать так что бы например при выборе первого элемента из первого списка
// во втором списке бы выбирался например второй элемент из списка?
// понимаю что это не нужно, но просто, для общего понимания

const typeChange = () => {
  price.placeholder = typePrice[type.value];
  price.min = typePrice[type.value];
}
type.addEventListener('click', typeChange);
