import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { IUserInputDTO } from "../interface/IUser";
import userSchema from "./user-schema";
// import { generateToken } from "utils/jwt";

const SALT_ROUNDS = 10;
const JWT_SECRET = process.env.JWT_SECRET || "your_secret_key";

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

    // const token = generateToken(user._id.toString());
    const token = jwt.sign({ userId: user._id }, JWT_SECRET);

    return { user, token };
  },
};

export default UserService;
