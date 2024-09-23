import mongoose, { Schema } from "mongoose";
import { IFeed } from "src/interface/IFeed";

const feedSchema = new Schema<IFeed>({
  title: { type: String, required: true },
  content: { type: String, required: true },
  author: { type: Schema.Types.ObjectId, ref: "User", required: true },
  images: [{ type: String }],
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.model<IFeed>("Feed", feedSchema);
