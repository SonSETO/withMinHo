import { Router } from "express";

import { authMiddleware } from "../middleware/authMiddleware";
import { commentController } from "./comments-controller";
const commentRouter = Router();

// 댓글 생성
commentRouter.post(
  "/create/:feedId",
  authMiddleware,
  commentController.createComment
);

export default commentRouter;
