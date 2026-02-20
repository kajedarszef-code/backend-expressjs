export function getMovies(req, res) {
  const movies = [
    {
      title: "Avatar",
      director: "James Cameron",
    },
    {
      title: "Interstellar",
      director: "XYZ",
    },
  ];
  res.json(movies);
}

export function createMovie(req, res, next) {
      const movie = req.body;

  if(!movie.title) {
    return next(new Error("Provide title"));
  }

  res.status(201).json({ message: "Dodano film", ...movie });
}


