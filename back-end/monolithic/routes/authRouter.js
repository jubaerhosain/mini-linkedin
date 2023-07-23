import express from "express";
const authRouter = express.Router();

import authValidator from "../middlewares/validators/authValidator.js";
import authController from "../controllers/authController.js";
import authMiddleware from "../middlewares/authMiddleware.js";

authRouter.post("/register", authValidator.registrationValidator, authController.register)

authRouter.post("/login", authValidator.loginValidator, authController.login)

authRouter.delete("/logout", authController.logout)

authRouter.get("/", authMiddleware.checkAuthentication, authController.getLoggedInUser)

export default authRouter;
