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
  createdAt?: Date;
  updatedAt?: Date;
  training:IGame[];
}

export interface IGame  {
  type:TRAINING_TYPE;
  score:number;
  createdAt?: Date;
  updatedAt?: Date;
  module:{
    type:MODULE_TYPE;
    score:number;
  }[];
}

export interface IncreaseScoreRequestBody {
  score:number;
  training:{
    type?:TRAINING_TYPE;
    moduleType?:MODULE_TYPE;
  };
}

export enum TRAINING_TYPE {
  EXPLOSION = "explosion",
  RADIOLOGICAL = "radiological",
  EVACUATION = "evacuation",
  GAS = "gas",
}

export enum MODULE_TYPE{
  MODULE_1 = "module1",
  MODULE_2 = "module2",
  MODULE_3 = "module3",
  MODULE_4 = "module4",
  MODULE_5 = "module5",
  MODULE_6 = "module6",
}