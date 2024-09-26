import { Router } from "express";
import { feedController } from "./feed-controller";
import { authMiddleware } from "../middleware/authMiddleware";
const feedRouter = Router();

//생성
feedRouter.post("/create", authMiddleware, feedController.createFeed);

//수정
feedRouter.put("/update/:feedId", authMiddleware, feedController.updateFeed);

//삭제
feedRouter.delete("/delete/:feedId", authMiddleware, feedController.deleteFeed);

//조회
feedRouter.get("/user", authMiddleware, feedController.getUserFeed);

//좋아요
feedRouter.post("/like/:feedId", authMiddleware, feedController.likeFeed);
feedRouter.post("/unlike/:feedId", authMiddleware, feedController.unlikeFeed);

export default feedRouter;
