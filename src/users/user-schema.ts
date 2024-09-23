import mongoose, { Schema } from "mongoose";
import { IUser } from "../interface/IUser";

const userSchema = new Schema<IUser>({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: {
    type: String,
    default: null,
  }, // 일반 로그인 시 사용 (OAuth 사용자는 null)
  avatar: { type: String, default: "N/A" },
  date: { type: Date, default: Date.now },
  oauthProvider: {
    type: String,
    enum: ["kakao", "google", null],
    default: null,
  },
  oauthId: { type: String, default: null }, // OAuth 로그인 시 사용
  refreshToken: { type: String, default: null }, // 리프레시 토큰 저장
});

export default mongoose.model<IUser>("User", userSchema);
