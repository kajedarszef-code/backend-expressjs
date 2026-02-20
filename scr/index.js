import express from "express";
import movieRoute from "./routes/movies.routes.js";
import defaultRoute from "./routes/deufault.routes.js";
import cors from "cors";

const app = express();
app.use(cors());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET,POST,OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  if (req.method === "OPTIONS") return res.sendStatus(204);
  next();
});



app.use(express.json());

const port = 3005;

app.use("/", defaultRoute);
app.use("/api/movies", movieRoute);



app.use((err, req, res, next) => {
  res.status(500).json({
    error: err.message,
  });
});

app.listen(port, () => {
  console.log(`http://localhost:${port} on port ${port}`);
});