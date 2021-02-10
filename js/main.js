function getRandomInteger(min, max) {
  if (max < min) {
    [min, max] = [max, min];
  }
  if (min === max) {
    throw new Error('Значения должны отличаться');
  }
  let randInt = min + Math.random() * (max + 1 - min);
  return Math.floor(randInt);
}

function getRandomFloat(min, max, commas) {
  if (max < min) {
    [min, max] = [max, min];
  }
  if (min === max) {
    throw new Error('Значения должны отличаться');
  }
  let randFloat = (Math.random() * (max - min) + min).toFixed(commas);
  return randFloat;
}

getRandomFloat(1.1, 1.2, 1);
getRandomInteger(1, 100);

function getRandomArrayElement(elements){
  return elements[getRandomInteger(0, elements.length - 1)];
}
const TITLES = ['Квартира', 'Аппартаменты', 'Лофт', 'Студия'];
const TYPES = ['palace', 'flat', 'house', 'bungalow'];
const CHECKS = ['12:00', '13:00', '14:00'];
const FEATURES = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
const DESCRIPTIONS = ['Description'];
const PHOTOS = ['http://o0.github.io/assets/images/tokyo/hotel1.jpg', 'http://o0.github.io/assets/images/tokyo/hotel2.jpg', 'http://o0.github.io/assets/images/tokyo/hotel3.jpg'];

let author = {
  avatar: 'img/avatars/user0' + getRandomInteger(1, 8) + '.png',
}

let offer = {
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
}

let location = {
  x: getRandomFloat(35.65000, 35.70000, 5),
  y: getRandomFloat(139.70000, 139.80000, 5),
}

Object.assign({}, author, offer, location);
