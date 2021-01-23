/**
 * @jest-environment jsdom
 */

import { io } from "socket.io-client";

import http from "../app";
import { generate } from "../logic/sequenceManager";

const PORT = 9000;
let socket;

// Start server, connect to socket and start a game
beforeEach(() => {
  http.listen(PORT, () => {
    console.log(`App listening at http://localhost:${PORT}`);
  });
  socket = io(`ws://localhost:${PORT}`);

  socket.emit("game started");
});

describe("Socket.io events", () => {
  it("should give a sequence when 'game started' is emitted", (done) => {
    socket.on("sequence", ({ seq }) => {
      let array = generate();
      array.forEach((n) => {
        expect(seq).toContain(n);
      });
      done();
    });
  });

  it("should only accept correct moves", (done) => {
    // emitting a correct move
    socket.emit("number pressed", 1);
    socket.on(`button 1 pressed`, ({ state, number }) => {
      expect(state).toBe("right");
      expect(number).toBe(1);
    });

    // emitting a wrong move
    socket.emit("number pressed", 4);
    socket.on(`button 4 pressed`, ({ state, number }) => {
      expect(state).toBe("wrong");
      expect(number).toBe(4);

      done();
    });
  });

  it("shouldn't complete a game with wrong moves", (done) => {
    let time = undefined;
    socket.emit("number pressed", 3);

    socket.on("best match", ({ fastestTime }) => {
      time = fastestTime;
    });
    socket.on("game changed", ({ isOrdered, isComplete }) => {
      if (!isComplete) {
        expect(isOrdered).toBe(false);
        expect(time).toBeUndefined();
        done();
      }
    });
  });

  it("should complete a game with right moves", (done) => {
    let time = undefined;

    generate().forEach((n) => {
      socket.emit("number pressed", n);
      socket.on(`button ${n} pressed`, ({ state, number }) => {
        expect(state).toBe("right");
        expect(number).toBe(n);
      });
    });

    socket.on("best match", ({ fastestTime }) => {
      time = fastestTime;
    });
    socket.on("game changed", ({ isOrdered, isComplete }) => {
      if (isComplete) {
        expect(isOrdered).toBe(true);
        expect(time).not.toBeUndefined();
        done();
      }
    });
  });
});

// disconnect socket and finish server
afterEach((done) => {
  socket.close();
  http.close(() => done());
});
