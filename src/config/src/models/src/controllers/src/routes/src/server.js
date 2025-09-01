import express from "express";
import cors from "cors";
import morgan from "morgan";
import "dotenv/config";
import { connectDB } from "./config/db.js";
import booksRoute from "./routes/books.js";

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

// Routes
app.use("/api/books", booksRoute);

app.get("/api/health", (req, res) => res.json({ status: "ok" }));

// Start server
connectDB().then(() => {
  app.listen(port, () => console.log(`🚀 Server running on http://localhost:${port}`));
});
