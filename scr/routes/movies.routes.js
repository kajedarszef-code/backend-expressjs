import { Router } from "express";
import {
  createMovie,
  getMovies,
  getMovieById,
  incrementLikes,
  decrementLikes,
} from "../controllers/movies.controllers.js";

const movieRoute = Router();

movieRoute.get("/", getMovies);
movieRoute.post("/", createMovie);
movieRoute.get("/:id", getMovieById);
movieRoute.patch("/:id/like", incrementLikes);
movieRoute.patch("/:id/dislike", decrementLikes);

export default movieRoute;