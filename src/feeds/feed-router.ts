import { Router } from "express";
import { feedController } from "./feed-controller";
import { authMiddleware } from "../middleware/authMiddleware";
const feedRouter = Router();

feedRouter.post("/create", authMiddleware, feedController.createFeed);
feedRouter.put("/update/:feedId", authMiddleware, feedController.updateFeed);

feedRouter.delete("/delete/:feedId", authMiddleware, feedController.deleteFeed);

feedRouter.get("/user", authMiddleware, feedController.getUserFeed);
// feedRouter.get("/allfeed", feedController.getUserFeed);

export default feedRouter;
