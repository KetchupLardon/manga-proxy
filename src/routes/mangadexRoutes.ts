import express from "express";
import { fetchManga } from "../controllers/mangadexController";

const router = express.Router();

router.get("/:path", fetchManga);

export default router;
