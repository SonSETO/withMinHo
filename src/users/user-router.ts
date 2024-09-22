import { Router } from "express";
import UserController from "./user-controller";

const userRouter = Router();

userRouter.post("/signup", UserController.signUp);

userRouter.post("/signin", UserController.signIn);

/* req.params */
userRouter.get("/profile/:id", UserController.getUserProfile);

/* req.query */
// userRouter.get("/profile", UserController.getUserProfile);

userRouter.get("/finduser", UserController.getAllUsers);

userRouter.post("/refresh-token", UserController.refreshAccessToken);

export default userRouter;
