import {getRandomArrayElement, getRandomInteger, getRandomFloat} from './util.js';
import {TITLES,TYPES,CHECKS, FEATURES, DESCRIPTIONS, PHOTOS} from './data.js';

const createPublication = () => {
  const location = {
    x: getRandomFloat(35.65000, 35.70000, 5),
    y: getRandomFloat(139.70000, 139.80000, 5),
  }

  return {
    location,

    author: {
      avatar: 'img/avatars/user0' + getRandomInteger(1, 8) + '.png',
    },

    offer: {
      title: getRandomArrayElement(TITLES),
      address: location.x + ', ' + location.y,
      price: getRandomInteger(1,100),
      type: getRandomArrayElement(TYPES),
      rooms: getRandomInteger(1,100),
      guests: getRandomInteger(1,100),
      checkin: getRandomArrayElement(CHECKS),
      checkout: getRandomArrayElement(CHECKS),
      features: getRandomArrayElement(FEATURES),
      description: getRandomArrayElement(DESCRIPTIONS),
      photos: getRandomArrayElement(PHOTOS),
    },
  }
};

export{createPublication};
