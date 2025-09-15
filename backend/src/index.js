import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import authRoutes from "./routes/auth.js";
import memesRoutes from "./routes/memes.js";
import likesRoutes from "./routes/likes.js";
import categoriesRoutes from "./routes/categories.js";

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

// Rutas
app.use("/auth", authRoutes);
app.use("/memes", memesRoutes);
app.use("/likes", likesRoutes);
app.use("/categories", categoriesRoutes);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
});