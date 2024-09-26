import { Router } from "express";
import UserController from "./user-controller";
import { userValidator } from "../middleware/validators/user-validator";

const userRouter = Router();

//가입
userRouter.post("/signup", userValidator.signUp, UserController.signUp);

//로그인
userRouter.post("/signin", userValidator.signIn, UserController.signIn);

//로그아웃
userRouter.post("/logout", UserController.logout);

/* req.params */
// 특정 유저 조회
userRouter.get("/profile/:id", UserController.getUserProfile);

/* req.query */
// userRouter.get("/profile", UserController.getUserProfile);

// 모든 유저 조회
userRouter.get("/finduser", UserController.getAllUsers);

userRouter.post("/refresh-token", UserController.refreshAccessToken);

export default userRouter;
