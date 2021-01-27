import express from "express";
import { createServer } from "http";
import { Server } from "socket.io";

import { connection } from "./socket/listeners.js";

// Init
const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer, {});

// Config
app.use(express.static("public"));

// Web Sockets
io.on("connection", connection);

export default httpServer;
