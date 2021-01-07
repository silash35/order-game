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

  /*
  fetch("/api/order", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: "[8,2,4,5,6]",
  });
  */
};

export { get, post };
