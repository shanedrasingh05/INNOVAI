import { Router } from "express";
import * as userController from "../controllers/user.controller.js"
import { body } from "express-validator";
import * as authMiddleware from "../middleware/auth.middleware.js";



const   router = Router();






router.post('/register',
    body('email').isEmail().withMessage('Email must be valid email email address'),
    body( 'password').isLength({min: 3}).withMessage('Password must be Three digits'),
    userController.createUserController);



router.post('/login',
    body('email').isEmail().withMessage('Email must be valid email email address'),
    body( 'password').isLength({min: 3}).withMessage('Password must be Three digits'),
    userController.loginController);


router.get('/profile', authMiddleware.authUser, userController.profileController)


export default router;
