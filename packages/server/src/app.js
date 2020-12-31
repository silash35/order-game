import express from "express";
import bodyParser from "body-parser";
import home from "./routes/home.js";

const app = express();
app.use(bodyParser.json());

// Routes
app.get("/", home);

export default app;
