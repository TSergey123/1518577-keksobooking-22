const type = document.querySelector('#type');
const price = document.querySelector('#price');

const typePrice = {
  bungalow: '0',
  flat: '1000',
  house: '5000',
  palace: '10000',
}

// if (type.textContent = bungalow){
//   price.innerHTML = 0;
// }

const typeChange = () => {
  price.placeholder = typePrice[type.value];
  // price.value = typePrice[type.value];
}

typeChange();

// Изменения работают, но только при перезугрузки страницы. Например если в html
// изменить selected, то плейсхолдер меняется, но при изменениях на странице, Ничего
// не происходит ;( подскажи пожалуйста




