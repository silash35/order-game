import generateSequence from "../logic/generateSequence.js";
import shuffleArray from "../logic/shuffleArray.js";

export default (req, res) => {
  let randomSequence = shuffleArray(generateSequence());
  res.status(200).send({
    randomSequence,
  });
};
