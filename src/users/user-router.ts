import { Router } from "express";
import UserController from "./user-controller";

const userRouter = Router();

userRouter.post("/signup", UserController.signUp);

userRouter.post("/signin", UserController.signIn);

/* req.params */
// 특정 유저 조회
userRouter.get("/profile/:id", UserController.getUserProfile);

/* req.query */
// userRouter.get("/profile", UserController.getUserProfile);

// 모든 유저 조회
userRouter.get("/finduser", UserController.getAllUsers);

userRouter.post("/refresh-token", UserController.refreshAccessToken);

export default userRouter;
