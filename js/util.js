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
export {getRandomInteger};


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
export {getRandomFloat};

function getRandomArrayElement(elements){
  return elements[getRandomInteger(0, elements.length - 1)];
}
export {getRandomArrayElement};

