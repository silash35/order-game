import { generate, isOrdered, shuffle } from "../logic/sequenceManager.js";

const connection = (socket) => {
  console.log("user " + socket.id + " connected");

  let userSeq = [];

  socket.on("game started", () => {
    console.log("user " + socket.id + " has started a game");

    userSeq = [];
    socket.emit("sequence", { seq: shuffle(generate()) });
  });

  socket.on("number pressed", (n) => {
    userSeq.push(n);

    socket.emit("game changed", {
      lastNumber: n,
      isOrdered: isOrdered(userSeq),
      isComplete: generate().length == userSeq.length,
    });

    console.log("user " + socket.id + " seq is " + userSeq);
  });
};

export { connection };
