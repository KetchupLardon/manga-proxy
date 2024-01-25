import rateLimit from "express-rate-limit";

export const rateLimitMiddleware = rateLimit({
  windowMs: 1000, // 1 second
  max: 5, // max 5 requests per windowMs per IP
  message: "Too many requests from this IP, please try again later.",
});
