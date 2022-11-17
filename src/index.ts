import express, { Request, Response, NextFunction } from "express";
import path from "path";

const app = express();

const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, "../public")))

app.listen(PORT, () => {
  console.log(`Listening to port ${PORT}`)
})