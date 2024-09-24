import express, { NextFunction, Request, Response } from "express";
import { feedService } from "./feed-service";
import mongoose from "mongoose";

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
  updateFeed: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const feedData = req.body;
      const authorId = req.decodedUser?.userId;
      const feedId = new mongoose.Types.ObjectId(req.params.feedId);

      const updatedFeed = await feedService.updateFeed(
        authorId,
        feedId,
        feedData
      );
      res
        .status(200)
        .send({ message: "게시글이 수정되었습니다.", data: updatedFeed });
    } catch (e) {
      next(e);
    }
  },
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
    } catch (e) {
      next(e);
    }
  },
};
