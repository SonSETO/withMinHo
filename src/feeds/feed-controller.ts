import express, { NextFunction, Request, Response } from "express";
import { feedService } from "./feed-service";

export const feedController = {
  createFeed: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const feedData = req.body;
      const authorId = req.decodedUser?.userId;
      const newFeed = await feedService.createFeed(authorId, feedData);

      res
        .status(201)
        .send({ message: "게시글이 생성되었습니다.", data: newFeed });
    } catch (e) {
      next(e);
    }
  },
  updateFeed: async (req: Request, res: Response, next: NextFunction) => {},
  deleteFeed: async (req: Request, res: Response, next: NextFunction) => {},
  getUserFeed: async (req: Request, res: Response, next: NextFunction) => {
    try {
      // const userId = req.decodedUser?.userId;
      // const page = parseInt(req.query.page as string) || 1;
      // const size = parseInt(req.query.size as string) || 5;
      // const sortBy = (req.query.sortBy as string) || "createdAt";
      // const order = parseInt(req.query.order as string) || -1;
      // const feeds = await feedService.getUserFeed(
      //   userId,
      //   page,
      //   size,
      //   sortBy,
      //   //@ts-ignore
      //   order
      // );

      res.status(200).send({ message: "조회 성공", data: feeds });
    } catch (e) {
      next(e);
    }
  },
};
