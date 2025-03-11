import mongoose from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
        trime: true,
        lowercase: true,
        minLength: [6, 'Email must be atleat 6 characters long' ],
        maxLength: [50, 'Email must be longer than 50 charecters' ],
    },

    password: {
        type: String,
        select: false,  
    }
})



// userSchema.methods.hashPassword = async function(password){
//     return await bcrypt.hash(password, 10)
// }

userSchema.methods.isValidPassword = async function (password){
    console.log(password, this.password)


    return await bcrypt.compare(password, this.password)
}

userSchema.methods.generateJWT = function () {
    return jwt.sign({ email: this.email }, process.env.JWT_SECRET);
}

const User = mongoose.model('User', userSchema);

export default User;

