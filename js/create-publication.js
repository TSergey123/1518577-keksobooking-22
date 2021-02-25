import {getRandomArrayElement, getRandomInteger} from './util.js';
import {TITLES,TYPES,CHECKS, FEATURES, DESCRIPTIONS, PHOTOS, PUBLICATION_LENGTH, location} from './data.js';

const createPublication = () => {
  return {
    location,

    author: {
      avatar: 'img/avatars/user0' + getRandomInteger(1, 8) + '.png',
    },

    offer: {
      title: getRandomArrayElement(TITLES),
      address: location.x + ', ' + location.y,
      price: getRandomInteger(1,10000),
      type: getRandomArrayElement(TYPES),
      rooms: getRandomInteger(1,10),
      guests: getRandomInteger(1,10),
      checkin: getRandomArrayElement(CHECKS),
      checkout: getRandomArrayElement(CHECKS),
      features: getRandomArrayElement(FEATURES),
      description: getRandomArrayElement(DESCRIPTIONS),
      photos: getRandomArrayElement(PHOTOS),
    },
  }
};

const similarOffer = new Array(PUBLICATION_LENGTH).fill(null).map(() => createPublication());
similarOffer;

export{similarOffer ,createPublication};
