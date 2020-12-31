export default (start = 1, end = 10) => {
  let sequence = [];
  for (let i = start; i <= end; i++) {
    sequence.push(i);
  }

  return sequence;
};
