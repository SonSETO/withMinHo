import express, { NextFunction, Request, Response } from "express";
import UserService from "./user-service";
import { generateToken, verifyToken } from "../utils/jwt";

const UserController = {
  signUp: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const newUser = await UserService.signUp(req.body);
      res.status(201).send({ message: "회원가입 성공", data: newUser });
    } catch (e) {
      console.error("뭔에러냐:", e);
      next(e);
    }
  },

  signIn: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { email, password } = req.body;
      const { user, accessToken, refreshToken } = await UserService.signIn(
        email,
        password
      );

      res
        .status(200)
        .send({
          message: "로그인 성공",
          data: user,
          accessToken,
          refreshToken,
        });
    } catch (e) {
      next(e);
    }
  },
  refreshAccessToken: async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const { refreshToken } = req.body;

      if (!refreshToken) {
        return res.status(401).json({ message: "리프레시 토큰이 필요합니다." });
      }

      const decoded = verifyToken(refreshToken);
      const userId = (decoded as any).userId;

      const newAccessToken = generateToken(userId);
      res.status(200).send({ accessToken: newAccessToken });
    } catch (e) {
      next(e);
    }
  },

  /* req.query */
  // getUserProfile: async (req: Request, res: Response, next: NextFunction) => {
  //   try {
  //     const email = req.query.email as string;
  //     // req.params.id로 하는게 더 좋아보이는데

  //     const getUser = await UserService.getUserProfile(email);
  //     res.status(200).send({ message: "조회 성공", data: getUser });
  //   } catch (e) {
  //     next(e);
  //   }
  // },

  /* req.params */
  getUserProfile: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const id = req.params.id;

      const getUser = await UserService.getUserProfileById(id);
      res.status(200).send({ message: "조회 성공", data: getUser });
    } catch (e) {
      next(e);
    }
  },

  getAllUsers: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const page = parseInt(req.query.page as string) || 1;
      const size = parseInt(req.query.size as string) || 5;
      const skip = (page - 1) * size;

      const users = await UserService.getAllUsers(skip, size);
      res
        .status(200)
        .send({ message: "모든 유저 목록 조회 성공", data: users });
    } catch (e) {
      next(e);
    }
  },
};

export default UserController;
