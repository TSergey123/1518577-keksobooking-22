function randomInteger(min, max) {
  let rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}

function randomFloat(min, max, comma) {
  let randFloat = min + Math.random() * (max + 1 - min);
  return parseFloat(randFloat.toFixed(comma));
}

randomInteger(1, 100);
randomFloat(1, 100, 2);
