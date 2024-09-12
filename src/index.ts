// src/index.js
import express, { Express, Request, Response } from "express";
import path from "path";

const app: Express = express();
const port = process.env.PORT || 3000;

import posts from "./routes/posts";

// set up static folder
// app.use(express.static(path.join(__dirname, "public")));

// app.use("/posts", posts);

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
