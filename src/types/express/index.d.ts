import { User } from "../models/User";

declare global {
  namespace Express {
    interface Request {
      decodedUser?: User;
    }
  }
}
