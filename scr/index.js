import express from "express";
import { error } from "node:console";

const app = express();

app.use(express.json());
app.use((err, req, res, next) => {
  res.status(500).json({
    error: err.message,
  });
});

const port = 3005;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/api/movies", (req, res) => {
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
});

app.post("/api/movies", (req, res) => {
  const movie = req.body;

  res.status(201).json({ message: "Dodano film", ...movie });
});

app.listen(port, () => {
  console.log(`http://localhost:${port} on port ${port}`);
});
