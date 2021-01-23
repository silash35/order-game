/**
 * @jest-environment jsdom
 */

import { io } from "socket.io-client";

import http from "../app";

const PORT = 9000;

let socket;

beforeAll(() => {
  http.listen(PORT, () => {
    console.log(`App listening at http://localhost:${PORT}`);
  });
  socket = io(`ws://localhost:${PORT}`);
});

afterAll((done) => {
  socket.close();
  http.close(() => done());
});

describe("Socket.io connections", () => {
  it("should give a sequence", (done) => {
    socket.on("sequence", ({ seq }) => {
      expect(1 + 1).toBe(2);
      done();
    });

    socket.emit("game started");
  });
});
