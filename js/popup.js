import {createPublication} from './create-publication.js';

const similarPub = createPublication();
const block = document.querySelector('.block');
const canvas = document.querySelector('#map-canvas');
block.innerHTML = '<img class="popup__avatar" width="70" height="70" alt="Аватар пользователя" src="' + similarPub.author.avatar + '"></img>';
// Все еще не понял, почему в блоке вне шаблона, аватарки каждый раз новые, а в шаблоне всегда одинаковая
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
//Хотел спросить, что вообще делать в таких случаях?

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
cardElement.querySelector('.popup__description').textContent = similarPub.offer.description;

//Первый вариант - Получаем бесконечное множество пустых фотографий.
// const photosGallery = cardElement.querySelector('.popup__photos');
// photosGallery.innerHTML = '';
// const photo = '<img class="popup__photo" width="45" height="40" alt="Фотография жилья" src="' + similarPub.offer.photos + '"></img> ';
// for (let photosList of similarPub.offer.photos) {
//   const element = `<img src="${photosList}" class="popup__photo" width="50" height="40" alt="Изображение места"></img>`;
//   photosGallery.insertAdjacentHTML('beforeend', element);
// }

// Второй вариант - Получаем бесконечное множество одинаковых фотографий.
// const photosGallery = cardElement.querySelector('.popup__photos');
// photosGallery.innerHTML = '';
// const photo = '<img class="popup__photo" width="45" height="40" alt="Фотография жилья" src="' + similarPub.offer.photos + '"></img> ';
// for (let photosList of similarPub.offer.photos) {
//   const element = `<img src="${similarPub.offer.photos}" class="popup__photo" width="50" height="40" alt="Изображение места"></img>`;
//   photosGallery.insertAdjacentHTML('beforeend', element);
// }

// Третий вариант
// const photosGallery = cardElement.querySelector('.popup__photos');
// photosGallery.innerHTML = '';
// const photo = '<img class="popup__photo" width="45" height="40" alt="Фотография жилья" src="' + similarPub.offer.photos + '"></img> ';
// for (let photosList of similarPub.offer.photos) {
//   const element = ` <img src="${similarPub.offer.photos}" class="popup__photo" width="50" height="40" alt="Изображение места"></img> `;
//   // photosGallery.appendChild(element); //- Пустота
//   // photosGallery.append(element); //- Бесконечный текст
// }

// Четвертый вариант
// const fragment = document.createDocumentFragment();
// const photoGallery = cardElement.querySelector('.popup__photos');
// const photoTemplate = photoGallery.querySelector('.popup__photo');
// fragment.appendChild(similarPub.offer.photos);


// photoGallery.innerHTML = '';
// for (let photoList of similarPub.offer.photos){
//   photoList = photoTemplate.cloneNode(true);
//   const photoElement = '<img class="popup__photo" width="45" height="40" alt="Фотография жилья" src="' + similarPub.offer.photos + '"></img>';
//   fragment.appendChild(photoElement);
//   // photoGallery.innerHTML = '';
//   // photoGallery.append(fragment);
//   // photoGallery.insertAdjacentHTML('beforeend', photoElement);
//   // photoGallery.innerHTML = photoElement;
// }

cardElement.querySelector('.popup__photos').innerHTML = '<img class="popup__photo" width="45" height="40" alt="Фотография жилья" src="' + similarPub.offer.photos + '"></img>';
cardElement.querySelector('.popup__avatar').innerHTML = '<img class="popup__avatar" width="70" height="70" alt="Аватар пользователя" src="' + similarPub.author.avatar + '"></img>';
canvas.append(cardElement);
