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

let author = {
  avatar: 'img/avatars/user0' + getRandomInteger(1, 8) + '.png',
}

// let rooms = getRandomInteger(1, 999);
let offer = {
  title: 'qwe',
  address: '{{location.x}} {{location.y}',
  price: '123',
  type: 'palace',
  rooms: 10,
  guests: 10,
  checkin: '13:00',
  checkout: '12:00',
  features: ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'],
  description: 'qqq',
  photos: ['http://o0.github.io/assets/images/tokyo/hotel1.jpg', 'http://o0.github.io/assets/images/tokyo/hotel2.jpg', 'http://o0.github.io/assets/images/tokyo/hotel3.jpg'],
}

const PHOTOS = ['http://o0.github.io/assets/images/tokyo/hotel1.jpg', 'http://o0.github.io/assets/images/tokyo/hotel2.jpg', 'http://o0.github.io/assets/images/tokyo/hotel3.jpg'];
const createPhoto = () => {
  return{
    photo: getRandomArrayElement(PHOTOS),
  };
};

// console.log(createPhoto);
// console.log(author);
// console.log(getRandomArrayElement(PHOTOS));

