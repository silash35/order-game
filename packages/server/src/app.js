import express from "express";
import bodyParser from "body-parser";
import { get } from "./routes/api/order.js";

const app = express();
app.use(express.static("src/public"));
app.use(bodyParser.json());

// Routes
app.get("/api/order", get);

export default app;
