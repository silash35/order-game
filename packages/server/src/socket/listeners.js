import { generate, isOrdered, shuffle } from "../logic/sequenceManager.js";
import fastestTime from "../logic/fastestTime.js";

const connection = (socket) => {
  console.log("user " + socket.id + " connected");

  let userSeq = [];
  let startTime;

  socket.on("game started", () => {
    console.log("user " + socket.id + " has started a game");

    userSeq = [];
    socket.emit("sequence", { seq: shuffle(generate()) });
    startTime = Date.now();
  });

  socket.on("number pressed", (n) => {
    userSeq.push(n);

    const gameIsComplete = generate().length == userSeq.length;
    if (gameIsComplete) {
      fastestTime.update(Date.now() - startTime);
    }

    socket.emit("game changed", {
      lastNumber: n,
      isOrdered: isOrdered(userSeq),
      isComplete: gameIsComplete,
    });

    console.log("user " + socket.id + " seq is " + userSeq);
  });
};

export { connection };
