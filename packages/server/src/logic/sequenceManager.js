const generate = (start = 1, end = 10) => {
  let sequence = [];
  for (let i = start; i <= end; i++) {
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

export { generate, shuffle };
