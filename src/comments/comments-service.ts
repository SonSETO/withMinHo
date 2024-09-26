import mongoose from "mongoose";

import { ICommentInputDTO } from "src/interface/IComment";
import commentsSchema from "./comments-schema";
import feedSchema from "../feeds/feed-schema";

export const CommentService = {
  createComment: async (
    userId: mongoose.Types.ObjectId,
    feedId: mongoose.Types.ObjectId,
    commentData: ICommentInputDTO
  ) => {
    const feed = await feedSchema.findById(feedId);
    if (!feed) throw new Error("게시글을 찾을 수 없습니다.");

    const newComment = await commentsSchema.create({
      content: commentData.content,
      author: userId,
      feed: feedId,
      likes: 0,
    });

    feed.comments.push(newComment._id);
    await feed.save();

    return newComment;
  },
};
