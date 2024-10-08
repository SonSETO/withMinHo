import { Request, Response, NextFunction } from "express";
import { verifyToken } from "../utils/jwt";

export const authMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({ message: "토큰이 필요합니다." });
  }

  const token = authHeader.split(" ")[1];

  try {
    const decoded = verifyToken(token) as { userId: string };

    if (typeof decoded === "object" && decoded.userId) {
      // req.decodedUser = decoded;
      req.user = decoded;
      next();
    } else {
      return res.status(401).json({ message: "유효하지 않은 토큰입니다." });
    }
  } catch (error) {
    return res.status(401).json({ message: "유효하지 않은 토큰입니다." });
  }
};
