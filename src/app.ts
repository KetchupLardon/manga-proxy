import express from "express";
import cors from "cors";
import mangaRoutes from "./routes/mangadexRoutes";

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());

// Set up routes
app.use("/mangadex", mangaRoutes);

// Handle other routes
app.use((_req, res) => {
  res.status(404).json({ error: "Not Found" });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
