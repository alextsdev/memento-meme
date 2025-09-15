import express from "express";
import { pool } from "../db.js";

const router = express.Router();

// Listar categorías
router.get("/", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM categories ORDER BY name ASC");
    res.json(result.rows);
  } catch (err) {
    console.error("Error listando categorías:", err);
    res.status(500).json({ error: "Error en el servidor" });
  }
});

export default router;