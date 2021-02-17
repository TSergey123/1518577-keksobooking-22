import { createPublication } from './create-publication.js';

const TITLES = ['Квартира', 'Аппартаменты', 'Лофт', 'Студия'];
const TYPES = ['palace', 'flat', 'house', 'bungalow'];
const CHECKS = ['12:00', '13:00', '14:00'];
const FEATURES = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
const DESCRIPTIONS = ['Близко к метро', 'Рядом с парком', 'Спальный район'];
const PHOTOS = ['http://o0.github.io/assets/images/tokyo/hotel1.jpg', 'http://o0.github.io/assets/images/tokyo/hotel2.jpg', 'http://o0.github.io/assets/images/tokyo/hotel3.jpg'];
const PUBLICATION_LENGTH = 10;


const newArray = new Array(PUBLICATION_LENGTH).fill(null).map(() => createPublication());
newArray

export {TITLES, TYPES, CHECKS, FEATURES, DESCRIPTIONS, PHOTOS};

