import {
  arrayIsOrdered,
  generateOrderedArray,
  shuffleArray,
} from "./arrayHelpers.js";

function createGame(length = 10) {
  // private variables
  let sequence = shuffleArray(generateOrderedArray(length));
  let userSeq = [];
  let userSeqIsOrdered = true;
  let userSeqIsComplete = false;

  const game = {};
  game.getSeq = () => sequence;

  game.getState = () => {
    return {
      isOrdered: userSeqIsOrdered,
      isComplete: userSeqIsComplete,
    };
  };

  game.addNumber = (n) => {
    userSeq.push(n);

    userSeqIsOrdered = arrayIsOrdered(userSeq);
    userSeqIsComplete = userSeq.length == sequence.length;

    let buttonState;
    if (userSeqIsOrdered) {
      buttonState = "right";
    } else {
      buttonState = "wrong";
    }
    return buttonState;
  };

  return game;
}

export default createGame;
