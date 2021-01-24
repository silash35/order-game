import fastestTime from "../logic/fastestTime.js";
import SequenceManager from "../logic/sequenceManager.js";

const connection = (socket) => {
  console.log("user " + socket.id + " connected");

  let startTime;

  let sequenceManager;
  socket.emit("best match", { fastestTime: fastestTime.get() });

  socket.on("game started", () => {
    console.log("user " + socket.id + " has started a game");

    sequenceManager = new SequenceManager();
    socket.emit("sequence", { seq: sequenceManager.getSeq() });
    startTime = Date.now();
  });

  socket.on("number pressed", (n) => {
    sequenceManager.addNumber(n);

    let { isOrdered, isComplete } = sequenceManager.getState();

    if (isOrdered && isComplete) {
      fastestTime.update(Date.now() - startTime);
      socket.emit("best match", { fastestTime: fastestTime.get() });
    }

    // Send button state to Board Buttons
    let buttonState;
    if (isOrdered) {
      buttonState = "right";
    } else {
      buttonState = "wrong";
    }
    socket.emit(`button ${n} pressed`, { state: buttonState, number: n });

    // Update Game State for Board
    socket.emit("game changed", {
      isOrdered,
      isComplete,
    });
  });
};

export { connection };
