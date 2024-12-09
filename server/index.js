import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import mongoose from "mongoose";
dotenv.config();

import { getHealth, getHome, getNotFound } from "./controllers/other.js";
import Film from "./models/Film.js";
import { deleteFilmById, getFilmById, getFilms, postFilms, updateFilmById, updateFilmRatingById } from "./controllers/film.js";


const app = express();
app.use(express.json());
app.use(cors());

const connectDB = async () => {
  const conn = await mongoose.connect(process.env.MONGO_URI);
  if (conn) {
    console.log("connected to mongodb");
  }
};

app.get("/", getHome);
app.get("/health", getHealth);
app.post("/films", postFilms);
app.get("/films", getFilms);
app.get("/films/:id", getFilmById);
app.delete("/films/:id",deleteFilmById)
app.put("/films/:id",updateFilmById)
app.patch("/films/rating/:id",updateFilmRatingById)

app.get("*", getNotFound);
const PORT = process.env.PORT || 5004;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  connectDB();
});
