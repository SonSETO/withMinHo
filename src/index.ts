import express, { Request, Response, NextFunction } from "express";
import userRouter from "./users/user-router";
import { dbConnect } from "./db/db";
import cors from "cors";
import { errorHandler } from "./middleware/error-hanlder.middleware";
import cookieParser from "cookie-parser";
import feedRouter from "./feeds/feed-router";
import commentRouter from "./comments/comments-router";

const app = express();
const port = process.env.PORT || 3000;
dbConnect();

app.use(cookieParser());
app.use(express.json());

const corsOptions = {
  origin: "http://localhost:5173",
  credentials: true,
};
app.use(cors(corsOptions));

app.get("/", (req: Request, res: Response) => {
  res.send("Hello, TypeScript with Express!");
});

app.use("/users", userRouter);
app.use("/feeds", feedRouter);
app.use("/comment", commentRouter);

app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
