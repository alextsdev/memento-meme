import express from "express";
import { pool } from "../db.js";

const router = express.Router();

// Dar like
router.post("/", async (req, res) => {
  const { user_id, meme_id } = req.body;

  try {
    const result = await pool.query(
      "INSERT INTO likes (user_id, meme_id) VALUES ($1, $2) ON CONFLICT DO NOTHING RETURNING *",
      [user_id, meme_id]
    );

    res.status(201).json(result.rows[0] || { message: "Ya había like" });
  } catch (err) {
    console.error("Error dando like:", err);
    res.status(500).json({ error: "Error en el servidor" });
  }
});

// Contar likes por meme
router.get("/:meme_id", async (req, res) => {
  try {
    const result = await pool.query(
      "SELECT COUNT(*) FROM likes WHERE meme_id = $1",
      [req.params.meme_id]
    );

    res.json({ likes: parseInt(result.rows[0].count) });
  } catch (err) {
    console.error("Error contando likes:", err);
    res.status(500).json({ error: "Error en el servidor" });
  }
});

export default router;