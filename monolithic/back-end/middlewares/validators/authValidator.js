import { body } from "express-validator";
import commonValidationHandler from "./commonValidationHandler.js";

const registrationValidator = [
    body("email")
        .trim()
        .notEmpty()
        .withMessage("Email must be provided")
        .isEmail()
        .withMessage("Must be a valid email").custom((email) => {
            // is email exist, if not true
            return true;
        }),
    body("password").trim().notEmpty().withMessage("Password must be provided"),
    commonValidationHandler
];

const loginValidator = [
    body("email")
        .trim()
        .notEmpty()
        .withMessage("Email must be provided")
        .isEmail()
        .withMessage("Must be a valid email").custom((email) => {
            // is email exist, if yes true
            return true;
        }),
    body("password").trim().notEmpty().withMessage("Password must be provided"),
    commonValidationHandler
];

export default {
    registrationValidator,
    loginValidator
}