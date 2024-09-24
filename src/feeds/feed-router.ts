import { Router } from "express";
import { feedController } from "./feed-controller";
import { authMiddleware } from "../middleware/authMiddleware";
const feedRouter = Router();

feedRouter.post("/create", authMiddleware, feedController.createFeed);
feedRouter.post("/update", authMiddleware, feedController.updateFeed);

// feedRouter.get("/allfeed", feedController.getUserFeed);

export default feedRouter;
