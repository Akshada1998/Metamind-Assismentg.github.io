import { User } from "../Models/userModel.js";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";

export const Login = async (req, res) => {
  try {
    console.log("Login request:", req.body);
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(401).json({
        message: "Invalid Data ",
        success: false,
      });
    }
    const user = await User.findOne({ email: email });
    if (!user) {
      return res.status(401).json({
        message: "Please Signin I dont find account created",
        success: false,
      });
    }
    const isMatch = await bcryptjs.compare(password, user.password);
    console.log("isMatch:", isMatch);
    if (!isMatch) {
      return res.status(401).json({
        message: "Invalid id",
        success: false,
      });
    }
    const tokenData = { id: user._id };
    const token = await jwt.sign(tokenData, "fscxgeyuvfjknvvfbvbhf", {
      expiresIn: "1d",
    });
    return res
      .status(200)
      .cookie("token", token, { httpOnly: true })
      .json({
        message: `Welcome Back ${user.fullName}`,
        user,
        success: true,
      });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Server Error",
      success: false,
    });
  }
};

//validation for logout

export const Logout = async (req, res) => {
  return res
    .status(200)
    .cookie("token", "", { expiresIn: new Date(Date.now()), httponly: true })
    .json({
      message: "User Logged out Successfullly",
      success: true,
    });
};

//  Code to validate email password and name  while posting data to db
export const Register = async (req, res) => {
  try {
    const { fullName, email, password } = req.body;
    if (!fullName || !email || !password) {
      return res.status(401).json({
        message: "Invalid Data",
        success: false,
      });
    }
    //to check weathe that mail id already exists or not
    const user = await User.findOne({ email });
    if (user) {
      return res.status(401).json({
        message: "This Email is Already used",
        success: false,
      });
    }
    //to hash the password  , 16 =>saltvalue means highest and strong pass
    const hashPassword = await bcryptjs.hash(password, 16);

    // if user does not exist create a new one
    await User.create({
      fullName,
      email,
      password: hashPassword,
    });
    return res.status(201).json({
      message: "Account Created Successfully",
      success: true,
    });
  } catch (error) {
    console.log(error);
  }
};
