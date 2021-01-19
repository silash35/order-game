const generate = (length = 10) => {
  let sequence = [];
  for (let i = 1; i <= length; i++) {
    sequence.push(i);
  }

  return sequence;
};

const isOrdered = (array) => {
  const orderedArray = generate(array.length);

  for (var i = 0; i < orderedArray.length; i++) {
    if (orderedArray[i] !== array[i]) {
      return false;
    }
  }
  return true;
};

const shuffle = (array = generate()) => {
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

export { generate, isOrdered, shuffle };
