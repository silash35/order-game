import bodyParser from "body-parser";
import express from "express";
import { createServer } from "http";
import { Server } from "socket.io";

import { get, post } from "./routes/api/order.js";

// Init
const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer, {});

// Config
app.use(express.static("public"));
app.use(bodyParser.json());

// HTTP
app.get("/api/order", get);
app.post("/api/order", post);

// Web Sockets
io.on("connection", (socket) => {
  socket.on("start game", () => {
    socket.emit("get sequence", { seq: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] });
  });

  /*
  socket.on("number pressed", (msg) => {
    console.log("number pressed: " + msg);
    io.emit("number is valide", true);
  });
  */
});

export default httpServer;
