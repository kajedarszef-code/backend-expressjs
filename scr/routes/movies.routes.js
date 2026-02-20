import { Router } from "express";
import { createMovie, getMovies } from "../controllers/movies.controllers.js";

const movieRoute = Router();

movieRoute.get("/api/movies", getMovies)
movieRoute.post("/api/movies", createMovie);


export default movieRoute;