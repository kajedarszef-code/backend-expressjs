import mongoose from "mongoose";

export async function connectMongoose() {
    const uri = process.env.MONGO_URI || "mongodb://127.0.0.1:27017/movies";

    await mongoose.connect(uri);
    console.log("✅ DB connected");
}