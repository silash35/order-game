const generateOrderedArray = (length = 10) => {
  let orderedArray = [];
  for (let i = 1; i <= length; i++) {
    orderedArray.push(i);
  }

  return orderedArray;
};

const shuffleArray = (array) => {
  let m = array.length;
  let t;
  let j;

  while (m) {
    j = Math.floor(Math.random() * m--);
    t = array[m];
    array[m] = array[j];
    array[j] = t;
  }

  return array;
};

const arrayIsOrdered = (array) => {
  const orderedArray = generateOrderedArray(array.length);

  for (var i = 0; i < orderedArray.length; i++) {
    if (orderedArray[i] !== array[i]) {
      return false;
    }
  }
  return true;
};

export { arrayIsOrdered, generateOrderedArray, shuffleArray };
