import { Request, Response } from "express";
import axios from "axios";

const fetchManga = async (req: Request, res: Response) => {
  try {
    const { path } = req.params;

    const response = await axios.get(`https://api.mangadex.org/${path}`, {
      headers: {
        "User-Agent": "MangApp",
      },
    });

    // Axios automatically throws an error for non-successful responses (status >= 400)
    const data = response.data;
    res.status(200).json(data);
  } catch (error) {
    console.error("Error fetching manga:", error);

    if (axios.isAxiosError(error)) {
      // Handle Axios-specific errors (e.g., network error, timeout)
      res.status(500).json({ error: "Internal Server Error" });
    } else {
      res.status(500).json({ error: "Internal Server Error" });
    }
  }
};

export { fetchManga };
