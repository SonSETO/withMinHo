import bcrypt from "bcrypt";
// import jwt from "jsonwebtoken";
import { IUserInputDTO } from "../interface/IUser";

import { generateToken, verifyToken } from "../utils/jwt";
import userSchema from "./user-schema";

const SALT_ROUNDS = 10;

const UserService = {
  signUp: async (data: IUserInputDTO) => {
    const hashedPassword = await bcrypt.hash(data.password, SALT_ROUNDS);
    const user = new userSchema({
      ...data,
      password: hashedPassword,
    });
    return user.save();
  },

  signIn: async (email: string, password: string) => {
    const user = await userSchema.findOne({ email });
    if (!user) throw new Error("이메일 혹은 패스워드를 확인해주세요");

    const checkPassword = await bcrypt.compare(password, user.password);
    if (!checkPassword) throw new Error("과연 그 비번 확실?");

    const token = generateToken(user._id.toString());
    // const token = jwt.sign({ userId: user._id }, JWT_SECRET);

    return { user, token };
  },

  getUserProfile: async (email: string) => {
    const user = await userSchema.findOne({ email });
    if (!user) throw new Error("해당 유저 없습니다");

    return user;
  },

  getAllUsers: async (skip: number = 0, size: number = 5) => {
    const users = await userSchema
      .find({})
      .sort({ email: 1 })
      .skip(skip)
      .limit(size)
      .select("email name");

    if (!users || users.length === 0) throw new Error("유저 목록이 없습니다.");
    return users;
  },
};

export default UserService;
