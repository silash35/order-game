import createGame from "../logic/createGame.js";
import fastestTime from "../logic/fastestTime.js";

const connection = (socket) => {
  console.log("user " + socket.id + " connected");

  let startTime;

  let game;
  socket.emit("best match", { fastestTime: fastestTime.get() });

  socket.on("game started", () => {
    console.log("user " + socket.id + " has started a game");

    game = createGame();
    socket.emit("sequence", { seq: game.getSeq() });
    startTime = Date.now();
  });

  socket.on("number pressed", (n) => {
    let buttonState = game.addNumber(n);

    let { isOrdered, isComplete } = game.getState();

    if (isOrdered && isComplete) {
      fastestTime.update(Date.now() - startTime);
      socket.emit("best match", { fastestTime: fastestTime.get() });
    }

    // Send button state to Board Buttons
    socket.emit(`button ${n} pressed`, { state: buttonState, number: n });

    // Update Game State for Board
    socket.emit("game changed", {
      isOrdered,
      isComplete,
    });
  });
};

export { connection };
