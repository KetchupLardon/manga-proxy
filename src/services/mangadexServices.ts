import axios from "axios";
import { Request, Response } from "express";

const apiUrl = process.env.MANGADEX_BASE_URL;

const fetchManga = async (_req: Request, res: Response) => {
  try {
    const response = await axios.get(`${apiUrl}/manga`);
    const { data } = response;
    // Process the data and send a response
    res.status(200).json(data);
  } catch (error) {
    console.error("Error fetching manga:", error);
  }
};

export default {
  fetchManga,
};
