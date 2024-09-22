import mongoose, { Schema } from "mongoose";
import { IUser } from "src/interface/IUser";

const userSchema = new Schema<IUser>({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, default: "N/A" },
  avatar: { type: String, default: "N/A" },
  date: { type: Date, default: Date.now },
  oauthProvider: {
    type: String,
    enum: ["kakao", "google", null],
    default: null,
  },
  oauthId: { type: String, default: null },
});

export default mongoose.model<IUser>("User", userSchema);
