import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI as string;

if (!MONGODB_URI) {
  throw new Error("❌ Please define MONGODB_URI in .env.local");
}

// 🔥 Global cache (prevents multiple connections in dev)
let cached = (global as any).mongoose;

if (!cached) {
  cached = (global as any).mongoose = {
    conn: null,
    promise: null,
  };
}

async function connectDB() {
  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    console.log("🔄 Connecting to MongoDB...");

    cached.promise = mongoose.connect(MONGODB_URI, {
      bufferCommands: false,
      family: 4, // ✅ fixes localhost (::1) issue
    });
  }

  cached.conn = await cached.promise;
  console.log("✅ MongoDB Connected");

  return cached.conn;
}

export default connectDB;