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
  console.log("a user connected");
});

export default httpServer;
