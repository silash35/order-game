import { generate, isOrdered, shuffle } from "../logic/sequenceManager.js";

const connection = (socket) => {
  socket.on("start game", () => {
    console.log("a user connect");
    socket.emit("get sequence", { seq: shuffle(generate()) });
  });

  /*
  socket.on("number pressed", (msg) => {
    console.log("number pressed: " + msg);
    io.emit("number is valide", true);
  });
  */
};

export { connection };
