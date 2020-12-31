export default (array = seq()) => {
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
