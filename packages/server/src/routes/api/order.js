import { generate, shuffle, isOrdered } from "../../logic/sequenceManager.js";

const get = (req, res) => {
  let randomSequence = shuffle(generate());
  res.status(200).send({
    randomSequence,
  });
};

const post = (req, res) => {
  res.status(200).send({
    isOrdered: isOrdered(req.body),
  });
};

export { get, post };
