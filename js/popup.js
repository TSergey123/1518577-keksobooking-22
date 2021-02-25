import {createPublication} from './create-publication.js';

const similarPub = createPublication();
const block = document.querySelector('.block');
const canvas = document.querySelector('#map-canvas');
block.innerHTML = '<img class="popup__avatar" width="70" height="70" alt="Аватар пользователя" src="' + similarPub.author.avatar + '"></img>';

// if(similarPub.offer.rooms > 1 && similarPub.offer.guests > 1){
//   block.innerHTML = similarPub.offer.rooms +' комнаты для ' + similarPub.offer.guests + ' гостей';
// }
// if (similarPub.offer.rooms < 2 && similarPub.offer.rooms < 2){
//   block.innerHTML = similarPub.offer.rooms +' комната для ' + similarPub.offer.guests + ' гостя';
// }
// if (similarPub.offer.rooms < 2 && similarPub.offer.rooms > 1){
//   block.innerHTML = similarPub.offer.rooms +' комната для ' + similarPub.offer.guests + ' гостей';
// }
// if (similarPub.offer.rooms > 1 && similarPub.offer.rooms < 2){
//   block.innerHTML = similarPub.offer.rooms +' комнаты для ' + similarPub.offer.guests + ' гостя';
// }



const cardTemplate = document.querySelector('#card').content.querySelector('.popup');
const cardElement = cardTemplate.cloneNode(true);

const getRuType = {
  flat: 'Квартира',
  bungalow: 'Бунгало' ,
  house: 'Дом',
  palace: 'Дворец',
}

cardElement.querySelector('.popup__title').textContent = similarPub.offer.title;
cardElement.querySelector('.popup__text--address').textContent = similarPub.offer.address;
cardElement.querySelector('.popup__text--price').textContent = similarPub.offer.price + '₽/ночь';
cardElement.querySelector('.popup__type').textContent = getRuType[similarPub.offer.type];
cardElement.querySelector('.popup__text--capacity').textContent = similarPub.offer.rooms +' комнаты для ' + similarPub.offer.guests + ' гостей';
cardElement.querySelector('.popup__text--time').textContent = 'Заезд после ' + similarPub.offer.checkin + ' выезд до ' + similarPub.offer.checkout;
cardElement.querySelector('.popup__features').innerHTML = '<li class="popup__feature popup__feature--' + similarPub.offer.features + '">' + similarPub.offer.features + '</li>';
cardElement.querySelector('.popup__description').textContent = similarPub.offer.title;

// for (let photoList of similarPub.offer.photos){
//   const photoGallery = cardElement.querySelector('.popup__photos');
//   photoGallery.innerHTML = '';
//   const photoElement = '<img class="popup__photo" width="45" height="40" alt="Фотография жилья" src="' + photoList + '"></img>';
//   photoGallery.insertAdjacentHTML('beforeend', photoElement);
// }
cardElement.querySelector('.popup__photos').innerHTML = '<img class="popup__photo" width="45" height="40" alt="Фотография жилья" src="' + similarPub.offer.photos + '"></img>';
cardElement.querySelector('.popup__avatar').innerHTML = '<img class="popup__avatar" width="70" height="70" alt="Аватар пользователя" src="' + similarPub.author.avatar + '"></img>';
cardElement.querySelector('.popup__title').textContent = similarPub.offer.title;
canvas.append(cardElement);