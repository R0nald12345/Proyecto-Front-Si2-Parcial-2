// Generated by https://quicktype.io
import { User } from './user.interface';



// export interface LoginResponse {
//   user:  User;
//   token: string;
// }
export interface LoginResponse {
  sessionToken: string;
  message: string;
  email: string;
}
