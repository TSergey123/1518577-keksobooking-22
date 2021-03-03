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

// 1
// const generatePhotos = (cardElement) => {
//   const photos = cardElement.querySelector('.popup__photos');
//   const fragment = cardElement.createDocumentFragment();
//   similarPub.offer.photos.forEach(photoClone => {
//     const photo = photos.querySelector('.popup__photo').cloneNode(true);
//     photo.src = photoClone;
//     fragment.append(photo);
//   });
//   photos.querySelector('.popup__photo').replaceWith(fragment);
// };
// generatePhotos(cardElement, similarPub.offer);


// 2
// const photoGallery = document.querySelector('.popup__photos');
// const photo = document.querySelector('.popup__photo');
// const generatePhotos = () => {
//   photoGallery.innerHTML = '';
//   similarPub.offer.photos.foreach((item) => {
//     photo.src = item;
//     photoGallery.append(photo.cloneNode(true));
//   });
// };
// generatePhotos();


// 3
// const generatePhotos = (photos) => {
//   const photoClone = cardElement.querySelector('.popup__photo');
//   const photoGallery = cardElement.querySelector('.popup__photos');
//   photoGallery.innerHTML = '';

//   photos.forEach((photo) => {
//     const photoItem = photo.cloneNode(true);
//     photoItem.src = photoClone;
//     photoGallery.appendChild(photoItem);
//   });
// }
// generatePhotos(similarPub.offer.photos, cardElement);



cardElement.querySelector('.popup__title').textContent = similarPub.offer.title;
cardElement.querySelector('.popup__text--address').textContent = similarPub.offer.address;
cardElement.querySelector('.popup__text--price').textContent = similarPub.offer.price + '₽/ночь';
cardElement.querySelector('.popup__type').textContent = getRuType[similarPub.offer.type];
cardElement.querySelector('.popup__text--capacity').textContent = similarPub.offer.rooms +' комнаты для ' + similarPub.offer.guests + ' гостей';
cardElement.querySelector('.popup__text--time').textContent = 'Заезд после ' + similarPub.offer.checkin + ' выезд до ' + similarPub.offer.checkout;
cardElement.querySelector('.popup__features').innerHTML = '<li class="popup__feature popup__feature--' + similarPub.offer.features + '">' + similarPub.offer.features + '</li>';
cardElement.querySelector('.popup__description').textContent = similarPub.offer.description;





//4 - Получаем бесконечное множество пустых фотографий.
// const photosGallery = cardElement.querySelector('.popup__photos');
// photosGallery.innerHTML = '';
// const photo = '<img class="popup__photo" width="45" height="40" alt="Фотография жилья" src="' + similarPub.offer.photos + '"></img> ';
// for (let photosList of similarPub.offer.photos) {
//   const element = `<img src="${photosList}" class="popup__photo" width="45" height="40" alt="Фотография жилья"></img>`;
//   photosGallery.insertAdjacentHTML('beforeend', element);
// }

// 5 - Получаем бесконечное множество одинаковых фотографий.
// const photosGallery = cardElement.querySelector('.popup__photos');
// photosGallery.innerHTML = '';
// const photo = '<img class="popup__photo" width="45" height="40" alt="Фотография жилья" src="' + similarPub.offer.photos + '"></img> ';
// for (let photosList of similarPub.offer.photos) {
//   const element = `<img src="${similarPub.offer.photos}" class="popup__photo"width="45" height="40" alt="Фотография жилья"></img>`;
//   photosGallery.insertAdjacentHTML('beforeend', element);
// }

// 6
// const photosGallery = cardElement.querySelector('.popup__photos');
// photosGallery.innerHTML = '';
// const photo = '<img class="popup__photo" width="45" height="40" alt="Фотография жилья" src="' + similarPub.offer.photos + '"></img> ';
// for (let photosList of similarPub.offer.photos) {
//   const element = ` <img src="${similarPub.offer.photos}" class="popup__photo" width="45" height="40" alt="Фотография жилья"></img> `;
//   // photosGallery.appendChild(element); //- Пустота
//   // photosGallery.append(element); //- Бесконечный текст
// }

// 7
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


// cardElement.querySelector('.popup__photos').innerHTML = '<img class="popup__photo" width="45" height="40" alt="Фотография жилья" src="' + similarPub.offer.photos + '"></img>';
cardElement.querySelector('.popup__avatar').innerHTML = '<img class="popup__avatar" width="70" height="70" alt="Аватар пользователя" src="' + similarPub.author.avatar + '"></img>';
canvas.append(cardElement);
