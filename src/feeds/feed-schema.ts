import mongoose, { Schema } from "mongoose";
import { IFeed } from "../interface/IFeed";

const feedSchema = new Schema<IFeed>({
  title: {
    type: String,
    required: true,
    trim: true,
    maxlength: 100,
  },
  content: { type: String, required: true },
  author: { type: Schema.Types.ObjectId, ref: "users", required: true },
  images: [{ type: String }],
  createdAt: { type: Date, default: Date.now },
  comments: [{ type: mongoose.Schema.Types.ObjectId, ref: "comments" }],
  tags: [{ type: String }],
  views: { type: Number, default: 0 },
  likes: { type: Number, default: 0 },
});

export default mongoose.model<IFeed>("Feed", feedSchema);
