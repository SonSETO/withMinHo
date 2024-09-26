import express, { NextFunction, Request, Response } from "express";
import { feedService } from "./feed-service";
import mongoose from "mongoose";

export const feedController = {
  createFeed: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const feedData = req.body;
      // const authorId = req.decodedUser?.userId;
      const authorId = req.user?.userId;
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
      // const authorId = req.decodedUser?.userId;
      const authorId = req.user?.userId;
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
  deleteFeed: async (req: Request, res: Response, next: NextFunction) => {
    try {
      // const authorId = req.decodedUser?.userId;
      const authorId = req.user?.userId;
      const feedId = new mongoose.Types.ObjectId(req.params.feedId);

      const result = await feedService.deleteFeed(authorId, feedId);
      res.status(200).send(result);
    } catch (e) {
      next(e);
    }
  },
  getUserFeed: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const userId = new mongoose.Types.ObjectId(req.user?.userId);
      const page = parseInt(req.query.page as string) || 1;
      const size = parseInt(req.query.size as string) || 5;
      const sortBy = (req.query.sortBy as string) || "createdAt";
      const feeds = await feedService.getUserFeed(userId, page, size, sortBy);

      res
        .status(200)
        .send({ message: "사용자의 게시글을 가져왔습니다.", data: feeds });
    } catch (e) {
      next(e);
    }
  },
  likeFeed: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const feedId = new mongoose.Types.ObjectId(req.params.feedId);
      const updatedFeed = await feedService.likeFeed(feedId);
      res
        .status(200)
        .send({ message: "좋아요가 추가되었습니다.", data: updatedFeed });
    } catch (e) {
      next(e);
    }
  },

  unlikeFeed: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const feedId = new mongoose.Types.ObjectId(req.params.feedId);
      const updatedFeed = await feedService.unlikeFeed(feedId);
      res
        .status(200)
        .send({ message: "좋아요가 취소되었습니다.", data: updatedFeed });
    } catch (e) {
      next(e);
    }
  },
};
