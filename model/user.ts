import { Schema, Document, model, Error } from 'mongoose';
import bcrypt from 'bcrypt';
import { IUser } from '../types';



const userSchema = new Schema<IUser>({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
  },
  password: {
    type: String,
    required: true,
  },
  age:{
    type: Number,
    required: true,
  },
  gender:{
    type: String,
    required: true,
  },
  username:{
    type: String,
    required: true,
    unique: true,
  },
});

// Hash the password before saving to the database
userSchema.pre('save', async function (next) {
  try {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
  } catch (error: any) {
    next(error);
  }
});

export const User = model<IUser>('User', userSchema);

