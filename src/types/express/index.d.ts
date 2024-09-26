// import { User } from "../models/User";

// declare global {
//   namespace Express {
//     interface Request {
//       decodedUser?: User;
//     }
//   }
// }

declare namespace Express {
  export interface Request {
    user: any;
  }
}
