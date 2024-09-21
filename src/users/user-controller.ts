import express, { NextFunction, Request, Response } from "express";
import UserService from "./user-service";

const UserController = {
  signUp: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const newUser = await UserService.signUp(req.body);
      res.status(201).send({ message: "회원가입 성공", data: newUser });
    } catch (e) {
      next(e);
    }
  },

  signIn: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { email, password } = req.body;
      const { user, token } = await UserService.signIn(email, password);

      res.status(200).send({ message: "로그인 성공", data: user, token });
    } catch (e) {
      next(e);
    }
  },
};

export default UserController;
