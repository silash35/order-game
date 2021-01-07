import express from "express";
import bodyParser from "body-parser";
import { get, post } from "./routes/api/order.js";

const app = express();
app.use(express.static("public"));
app.use(bodyParser.json());

// Routes
app.get("/api/order", get);
app.post("/api/order", post);

export default app;
