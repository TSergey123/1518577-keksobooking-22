function getRandomInteger(min, max) {
  let randInt = min + Math.random() * (max + 1 - min);
  if(min>max){
    return 'Минимальное значение должно быть меньше максимального';
  }
  return Math.floor(randInt);
}

function getRandomFloat(min, max, commas) {
  let randFloat = (Math.random() * (max - min) + min).toFixed(commas);
  if(min>max){
    return 'Минимальное значение должно быть меньше максимального';
  }
  return randFloat;
}

getRandomFloat(1.1, 1.2, 1);
getRandomInteger(1, 100);
