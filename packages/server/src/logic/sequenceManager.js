import {
  arrayIsOrdered,
  generateOrderedArray,
  shuffleArray,
} from "./arrayHelpers";

function SequenceManager(length = 10) {
  let scrambledSequence = shuffleArray(generateOrderedArray(length));

  let userSeq = [];
  let userSeqIsOrdered = true;
  let userSeqIsComplete = false;

  this.getSeq = () => scrambledSequence;

  this.getState = () => {
    return {
      isOrdered: userSeqIsOrdered,
      isComplete: userSeqIsComplete,
    };
  };

  this.addNumber = (n) => {
    userSeq.push(n);

    userSeqIsOrdered = arrayIsOrdered(userSeq);
    userSeqIsComplete = userSeq.length == scrambledSequence.length;
  };

  /*
    this.reset = () => {
      scrambledSequence = shuffleArray(generateOrderedArray(length));

      userSeq = [];
      userSeqIsOrdered = true;
      userSeqIsComplete = false;
    };
  */
}

export default SequenceManager;
