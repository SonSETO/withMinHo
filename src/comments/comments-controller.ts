import mongoose from "mongoose";
import express, { NextFunction, Request, Response } from "express";
import { CommentService } from "./comments-service";

export const commentController = {
  createComment: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const userId = req.user?.userId;
      const feedId = new mongoose.Types.ObjectId(req.params.feedId);
      const commentData = req.body;

      const newComment = await CommentService.createComment(
        userId,
        feedId,
        commentData
      );

      res
        .status(201)
        .send({ message: "댓글이 생성되었습니다.", data: newComment });
    } catch (e) {
      next(e);
    }
  },
};
