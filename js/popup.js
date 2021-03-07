import {createPublication} from './create-publication.js';

const similarPub = createPublication();
const canvas = document.querySelector('#map-canvas');
const cardTemplate = document.querySelector('#card').content.querySelector('.popup');
const cardElement = cardTemplate.cloneNode(true);

const getRuType = {
  flat: 'Квартира',
  bungalow: 'Бунгало' ,
  house: 'Дом',
  palace: 'Дворец',
}

const featureList = cardElement.querySelector('.popup__features');
const createFeatures = () => {
  featureList.innerHTML = '';
  similarPub.offer.features.forEach((features) => {
    const featureItem = document.createElement('li');
    featureItem.classList.add('popup__feature', 'popup__feature--' + features);
    featureList.append(featureItem);
  });
};
if (similarPub.offer.features.length === 0) {
  featureList.remove();
}
createFeatures();

const photoGallery = cardElement.querySelector('.popup__photos');
const photo = cardElement.querySelector('.popup__photo');
const createPhotos = () => {
  photoGallery.innerHTML = '';
  similarPub.offer.photos.forEach((photoSrc) => {
    photo.src = photoSrc;
    photoGallery.append(photo.cloneNode(true));
  });
};
if (similarPub.offer.photos.length === 0) {
  photoGallery.remove();
}
createPhotos();

cardElement.querySelector('.popup__title').textContent = similarPub.offer.title;
cardElement.querySelector('.popup__text--address').textContent = similarPub.offer.address;
cardElement.querySelector('.popup__text--price').textContent = similarPub.offer.price + '₽/ночь';
cardElement.querySelector('.popup__type').textContent = getRuType[similarPub.offer.type];
cardElement.querySelector('.popup__text--capacity').textContent = similarPub.offer.rooms +' комнаты для ' + similarPub.offer.guests + ' гостей';
cardElement.querySelector('.popup__text--time').textContent = 'Заезд после ' + similarPub.offer.checkin + ' выезд до ' + similarPub.offer.checkout;
cardElement.querySelector('.popup__description').textContent = similarPub.offer.description;
cardElement.querySelector('.popup__avatar').src = similarPub.author.avatar;

// canvas.append(cardElement);
