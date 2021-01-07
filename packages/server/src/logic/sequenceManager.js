const generate = (length = 10) => {
  let sequence = [];
  for (let i = 1; i <= length; i++) {
    sequence.push(i);
  }

  return sequence;
};

const shuffle = (array = seq()) => {
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

const isOrdered = (array) => {
  const orderedArray = generate(array.length);

  for (var i = 0; i < orderedArray.length; i++) {
    if (orderedArray[i] !== array[i]) {
      return false;
    }
  }
  return true;
};

export { generate, shuffle, isOrdered };
