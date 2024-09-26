import mongoose, { Schema } from "mongoose";
import { IComment } from "src/interface/IComment";

const CommentSchema = new Schema<IComment>(
  {
    content: { type: String, required: true, trim: true, maxlength: 500 },
    feed: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "feeds",
      required: true,
    },
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users",
      required: true,
    },
    likes: { type: Number, default: 0 },
  },
  {
    timestamps: true,
  }
);
export default mongoose.model<IComment>("comments", CommentSchema);
/*
        필요할 것?
        작성자, authorId
        댓글 내용 content
        생성일자 createdAt

    
    
    */
