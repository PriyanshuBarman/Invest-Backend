import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

import { userRepository } from "../../user/repositories/user.repository.js";
import { apiError } from "../../../utils/apiError.js";

export const register = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const existingUser = await userRepository.findByEmail(email);
    if (existingUser) {
      throw new apiError(400, "User Already Exists");
    }

    const hashPassword = await bcrypt.hash(password, 10);
    const newUser = await userRepository.create({ name, email, hashPassword });

    const token = jwt.sign({ id: newUser.insertId }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });

    return res
      .cookie("token", token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "strict",
        maxAge: 7 * 24 * 60 * 60 * 1000,
      })
      .status(201)
      .json({
        success: true,
        message: "User Created Successfully",
      });
  } catch (error) {
    res.status(error.statusCode || 500).json({ message: error.message });
  }
};

export const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const existingUser = await userRepository.findByEmail(email);
    if (!existingUser) {
      throw new apiError(400, "email or password is invalid");
    }

    const isMatch = await bcrypt.compare(password, existingUser.password);
    if (!isMatch) {
      throw new apiError(400, "email or password is invalid");
    }

    const token = jwt.sign({ id: existingUser.id }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });

    return res
      .cookie("token", token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "strict",
        maxAge: 7 * 24 * 60 * 60 * 1000,
      })
      .status(200)
      .json({ success: true, message: "User Logged In Successfully" });
  } catch (error) {
    res.status(error.statusCode || 500).json({ message: error.message });
  }
};

export const logout = (req, res) => {
  try {
    return res
      .clearCookie("token", {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
      })
      .status(200)
      .json({ success: true, message: "User Logged Out Successfully" });
  } catch (error) {
    res.status(error.statusCode || 500).json({ message: error.message });
  }
};
