import { movies } from "../data/movie.data.js";

export function getMovies(req, res) {
  res.json(movies);
}

export function createMovie(req, res, next) {
  const movie = req.body;

  if (!movie.title) {
    return next(new Error("Provide title"));
  }

  if (!movie.director) {
    return next(new Error("Provide director"));
  }

  movies.push({
    id: movies.length + 1,
    title: movie.title,
    director: movie.director,
    likes: 0,
  });

  res.status(201).json({ message: "Dodano film", ...movie });
}

export function getMovieById(req, res, next) {
  const id = Number(req.params.id);

  const movie = movies.find((m) => m.id === id);

  if (!movie) {
    const err = new Error("Movie not found");
    err.status = 404;
    return next(err);
  }

  res.json(movie);
}


export function incrementLikes(req, res, next) {
  const id = Number(req.params.id);

  const movie = movies.find(m => m.id === id);

  if (!movie) {
    const err = new Error("Film nie znaleziony");
    err.status = 404;
    return next(err);
  }

  movie.likes++;

  res.status(200).json(movie);
}

export function decrementLikes(req, res, next) {
  const id = Number(req.params.id);

  const movie = movies.find(m => m.id === id);

  if (!movie) {
    const err = new Error("Film nie znaleziony");
    err.status = 404;
    return next(err);
  }

  if (movie.likes > 0) {
    movie.likes--;
  }

  res.status(200).json(movie);
}