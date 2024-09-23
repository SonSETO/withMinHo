export interface IUser {
  name: string;
  email: string;
  password?: string;
  avatar: string;
  date: Date;
  oauthProvider?: "kakao" | "google" | null;
  oauthId?: string | null;
  refreshToken?: string | null;
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
