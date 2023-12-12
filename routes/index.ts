import express, { Request, Response } from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { LoginRequestBody,  SignupRequestBody } from "../types";
import { User } from "../model";
import { sendMail } from "../services/email";
require("dotenv").config();

const router = express.Router();

router.post("/api/login", async (req, res) => {
  try {
    // Extracting email and password from the request body
    const { username, password } = req.body as LoginRequestBody;

    // Validate request payload
    if (!username || !password) {
      return res
        .status(400)
        .json({ message: "Username and password are required." });
    }

    // Check if the user with the provided email exists
    const user = await User.findOne({ username });

    // If user not found
    if (!user) {
      return res.status(404).json({ message: "User not found." });
    }

    // Compare the provided password with the hashed password from the database
    const passwordMatch = await bcrypt.compare(password, user.password);

    // If passwords match
    if (passwordMatch) {
      // Generate JWT for authentication
      const token = jwt.sign(
        { userId: user._id },
        `${process.env.JWT_TOKEN}`,
        { expiresIn: "20 days" }
      );

      // Return the JWT in the response
      return res.status(200).json({ token, id: user._id });
    } else {
      // If passwords don't match
      return res.status(401).json({ message: "Invalid credentials." });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal Server Error." });
  }
});

router.post(
  "/api/signup",
  async (req: Request<{}, {}, SignupRequestBody>, res: Response) => {
    try {
      const { age, name, gender, email, password } = req.body;
      if (!age || !name || !gender || !email || !password) {
        return res.status(400).json({ message: "All fields are required" });
      }

      // Check if the user with the provided email already exists
      const existingUser = await User.findOne({ email });
      if (existingUser) {
        return res.status(409).json({ message: "User already exists" });
      }

      const username = await generateUsername(email);


      // Hash the password
      const hashedPassword = await bcrypt.hash(password, 10);

      // Create a new user
      const newUser = new User({
        age,
        name,
        gender,
        email,
        password: hashedPassword,
        username
      });

      // Save the user to the database
      await newUser.save();

      // Generate JWT for authentication
      const token = jwt.sign(
        { userId: newUser._id },
        `${process.env.JWT_TOKEN}`,
        { expiresIn: "20 days" }
      );

      sendMail(email,username,name,(err,info)=>{
        if(err){
          console.log("error",err);
        }
        else{
          console.log("info",info);
        }
      });

      
      // Return the JWT in the response
      return res.status(201).json({ token, id: newUser._id });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: "Internal Server Error." });
    }
  }
);

const generateUsername = async (email: string) => {
  let username = "VRX-"+email.split("@")[0];
  let uniqueUsername = username;
  
  let counter = 1;

  while (await usernameExists(uniqueUsername)) {
    uniqueUsername = `${username}-${counter}`;
    counter++;
  }
  
  return uniqueUsername;
};

const usernameExists = async (username: string) => {
  const user=await User.findOne({username})
  return user?true:false
};



export default router;
