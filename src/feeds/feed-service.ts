import userSchema from "../users/user-schema";

import mongoose from "mongoose";
import feedSchema from "./feed-schema";
import { IFeedInputDTO } from "src/interface/IFeed";

export const feedService = {
  createFeed: async (
    authorId: mongoose.Types.ObjectId,
    feedData: IFeedInputDTO
  ) => {
    const { title, content, images } = feedData;
    const author = await userSchema.findById(authorId);
    if (!author) throw new Error("유저를 찾을 수 없습니다.");

    const newFeed = await feedSchema.create({
      title,
      content,
      images,
      author: author._id,
    });
    return newFeed;
  },
  updateFeed: async (
    authorId: mongoose.Types.ObjectId,
    feedId: mongoose.Types.ObjectId,
    feedData: IFeedInputDTO
  ) => {
    const feed = await feedSchema.findOne({ _id: feedId, author: authorId });
    if (!feed) throw new Error("게시글을 찾을 수 없습니다.");

    feed.title = feedData.title;
    feed.content = feedData.content;
    feed.images = feedData.images;

    return feed.save();
  },
  deleteFeed: async () => {},
  getUserFeed: async (
    userId: mongoose.Types.ObjectId,
    page: number = 1,
    size: number = 5,
    sortBy = "createdAt",
    order: 1 | -1 = -1
  ) => {
    const skip = (page - 1) * size;
    const feeds = await feedSchema.aggregate([
      // {
      //   $match: { author: userId },
      // },
      // {
      //   $sort: { [sortBy]: order },
      // },
      // {
      //   $skip: skip,
      // },
      // {
      //   $limit: size,
      // },
      // {
      //   $lookup: {
      //     from: "users",
      //     localField: "author",
      //     foreignField: "_id",
      //     as: "authorInfo",
      //   },
      // },
    ]);
    return feeds;
  },
};
