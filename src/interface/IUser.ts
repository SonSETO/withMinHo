import mongoose, { Document } from "mongoose";

export interface IUser extends Document<mongoose.Types.ObjectId> {
  name: string;
  email: string;
  password?: string;
  avatar: string;
  date: Date;
  oauthProvider?: "kakao" | "google";
  oauthId?: string | null;
  refreshToken?: string | null;
  role: "user" | "admin";
}

export interface IUserInputDTO {
  name: string;
  email: string;
  password?: string;
  avatar?: string;
  date?: Date;
  oauthProvider?: "kakao" | "google";
  oauthId?: string;
  refreshToken?: string;
}

export interface userUniqueSearchInput {
  email: string;
}
