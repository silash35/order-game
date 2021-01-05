import { generate, shuffle } from "../../logic/sequenceManager.js";

const get = (req, res) => {
  let randomSequence = shuffle(generate());
  res.status(200).send({
    randomSequence,
  });
};

export { get };
