import express from "express";
import multer from "multer";
import { pool } from "../db.js";

const router = express.Router();
const upload = multer({ dest: "uploads/" }); // carpeta local (luego Cloudinary)

// Subir meme
router.post("/upload", upload.single("file"), async (req, res) => {
  const { title, user_id, category_id } = req.body;
  const fileUrl = `/uploads/${req.file.filename}`; // temporalmente en local

  try {
    const result = await pool.query(
      "INSERT INTO memes (user_id, category_id, title, file_url) VALUES ($1, $2, $3, $4) RETURNING *",
      [user_id, category_id || null, title, fileUrl]
    );

    res.status(201).json(result.rows[0]);
  } catch (err) {
    console.error("Error subiendo meme:", err);
    res.status(500).json({ error: "Error en el servidor" });
  }
});

// Listar memes
router.get("/", async (req, res) => {
  try {
    const result = await pool.query(
      `SELECT m.*, u.username, c.name as category
       FROM memes m
       JOIN users u ON m.user_id = u.id
       LEFT JOIN categories c ON m.category_id = c.id
       ORDER BY m.created_at DESC`
    );

    res.json(result.rows);
  } catch (err) {
    console.error("Error listando memes:", err);
    res.status(500).json({ error: "Error en el servidor" });
  }
});

export default router;