import mongoose from "mongoose";

export interface IFeed {
  title: string;
  content: string;
  author: mongoose.Schema.Types.ObjectId;
  createdAt: Date;
  images?: string[];
}

export interface IFeedInputDTO {
  title: string;
  content: string;
  images?: string[];
  author: mongoose.Schema.Types.ObjectId;
}
