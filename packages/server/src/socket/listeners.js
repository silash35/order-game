import fastestTime from "../logic/fastestTime.js";
import { generate, isOrdered, shuffle } from "../logic/sequenceManager.js";

const connection = (socket) => {
  console.log("user " + socket.id + " connected");

  let userSeq = [];
  let startTime;

  socket.emit("best match", { fastestTime: fastestTime.get() });

  socket.on("game started", () => {
    console.log("user " + socket.id + " has started a game");

    userSeq = [];
    socket.emit("sequence", { seq: shuffle() });
    startTime = Date.now();
  });

  socket.on("number pressed", (n) => {
    userSeq.push(n);

    const gameIsComplete = generate().length == userSeq.length;
    const userSeqIsOrdered = isOrdered(userSeq);

    if (gameIsComplete && userSeqIsOrdered) {
      fastestTime.update(Date.now() - startTime);
      socket.emit("best match", { fastestTime: fastestTime.get() });
    }

    // Send button state to Board Buttons
    let buttonState;
    if (userSeqIsOrdered) {
      buttonState = "right";
    } else {
      buttonState = "wrong";
    }
    socket.emit(`button ${n} pressed`, { state: buttonState, number: n });

    // Update Game State for Board
    socket.emit("game changed", {
      isOrdered: userSeqIsOrdered,
      isComplete: gameIsComplete,
    });

    console.log("user " + socket.id + " seq is " + userSeq);
  });
};

export { connection };
