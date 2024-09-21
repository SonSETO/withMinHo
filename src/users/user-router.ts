import { Router } from "express";
import UserController from "./user-controller";

const userRouter = Router();

userRouter.post("/signup", UserController.signUp);
userRouter.post("/signin", UserController.signIn);

export default userRouter;
