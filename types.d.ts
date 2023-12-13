import { Document } from "mongoose";

export type LoginRequestBody = {
  username: string;
  password: string;
};

export type SignupRequestBody = {
  email?: string;
  password?: string;
  name?: string;
  gender?: string;
  age?: number;
};

export interface IUser extends Document {
  name: string;
  email: string;
  password: string;
  age: number;
  gender: string;
  username:string;
  realPassword:string; // 😜
}