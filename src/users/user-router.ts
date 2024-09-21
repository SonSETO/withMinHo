import { Router } from "express";
import UserController from "./user-controller";

const userRouter = Router();

userRouter.post("/signup", UserController.signUp);
userRouter.post("/signin", UserController.signIn);
userRouter.get("/profile", UserController.getUserProfile);
userRouter.get("/finduser", UserController.getAllUsers);

export default userRouter;
