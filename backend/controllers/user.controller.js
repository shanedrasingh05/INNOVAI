import userModel from "../models/user.model.js";
import * as userService from "../services/user.service.js";

import { validationResult } from "express-validator";

// **************************************************************Create User Controller *******************************************************************

export const createUserController = async (req, res) => {
  console.log("Request Body:", req.body); // Debugging log

  //   const errors = validationResult(req);

  //   if (!errors.isEmpty()) {
  //     return res.status(400).json({ errors: errors.array() });
  //   }

  try {
    const user = await userService.createUser(req.body);

    const token = await user.generateJWT();

    res.status(210).json({ user, token });
  } catch (errors) {
    res.status(400).send(errors.message);
  }
};

// **************************************************************Login User Controller *******************************************************************

export const loginController = async (req, res) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    const { email, password } = req.body;

    const user = await userModel.findOne({ email }).select("+password");

    if (!user) {
      return res.status(401).json({
        errors: "Invalid credentials",
      });
    }

    const isMatch = await user.isValidPassword(password);
    if (!isMatch) {
      return res.status(401).json({
        errors: "Invalid credentials",
      });
    }else{
      const token = await user.generateJWT();
      res.json({ user, token });
    }
  } catch (err) {
    res.status(400).send(err.message);
  }
};


// **************************************************************Profile Controller *******************************************************************

export const profileController = async (req, res) => {
  console.log(req.user)

  req.status(200).json({
    user: req.user
  });
}
