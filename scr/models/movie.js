import mongoose from "mongoose";

const movieSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    year: { type: Number, required: false, default: 2026 },
    director: { type: String, required: true },
    likes: { type: Number, default: 0 }
  },
  { timestamps: true }
);

export const Movie = mongoose.model("Movie", movieSchema);