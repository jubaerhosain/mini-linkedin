import express from "express";
const authRouter = express.Router();

import authValidator from "../middlewares/validators/authValidator.js";
import authController from "../controllers/authController.js";

authRouter.post("/register", authValidator.registrationValidator, authController.register)

authRouter.post("/login", authValidator.loginValidator, authController.login)

export default authRouter;
