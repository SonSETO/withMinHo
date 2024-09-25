import mongoose, { Schema } from "mongoose";
import { IUser } from "../interface/IUser";

const userSchema = new Schema<IUser>({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: {
    type: String,
    default: null,
  },
  role: {
    type: String,
    enum: ["user", "admin"],
    default: "user",
  },
  avatar: { type: String, default: "N/A" },
  date: { type: Date, default: Date.now },
  oauthProvider: {
    type: String,
    enum: ["kakao", "google", null],
    default: null,
  },
  oauthId: { type: String, default: null },
  refreshToken: { type: String, default: null },
});

export default mongoose.model<IUser>("User", userSchema);
