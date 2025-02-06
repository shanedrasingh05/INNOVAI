import userModel from "../models/user.model.js";
import * as userService from "../services/user.service.js";

import { validationResult} from "express-validator";


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
  } catch (errors){
    res.status(400).send(errors.message);
  }
}