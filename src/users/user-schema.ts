import mongoose, { Document, Schema } from "mongoose";
import { IUser } from "src/interface/IUser";

// export interface IUser extends Document {
//   _id: mongoose.Types.ObjectId;
//   name: string;
//   email: string;
//   password: string;
//   avatar?: string;
//   date?: Date;
// }

const userSchema = new Schema<IUser>({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  avatar: { type: String },
  date: { type: Date, default: Date.now },
});

export default mongoose.model<IUser>("User", userSchema);
