




import User from "../models/user.model.js";
import bcrypt from "bcrypt";

const hashPassword = async function (password) {
  return await bcrypt.hash(password, 10);
};

export const createUser = async ({ email, password }) => {
  if (!email || !password) {
    throw new Error("Email and password are required!");
  }

  const hashedPassword = await hashPassword(password);

  const user = await User.create({
    email,
    password: hashedPassword,
  });

  return user;
};






// import User from "../models/user.model.js"





// export const createUser = async ({
//     email, password
// }) => {

//     if (!email || !password) {
//         throw new Error('Email and password are required!')
//     }
// }



// const hashedPassword = await userModel.hashPassword(password)

// const user = await userModel.create({
//     email,
//     password: hashedPassword
// });

// return user; 

