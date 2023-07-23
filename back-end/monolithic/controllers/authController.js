import { Response } from "../utils/responseUtils.js";
import userRepository from "../repositories/userRepository.js";
import passwordUtils from "../utils/passwordUtils.js";
import jwtUtils from "../utils/jwtUtils.js";
import config from "../config/config.js";

async function register(req, res) {
    try {
        const user = req.body;

        user.password = await passwordUtils.hashPassword(user.password);

        await userRepository.createOne(user);

        res.status(200).json(Response.success("Registration successful"));
    } catch (err) {
        console.log(err);
        res.status(500).json(Response.error("Internal Server Error", Response.SERVER_ERROR));
    }
}

async function login(req, res) {
    try {
        const { email, password } = req.body;
        const user = await userRepository.findOneByEmail(email);

        const isValid = await passwordUtils.verifyPassword(password, user.password);
        if (!isValid) {
            res.status(403).json(
                Response.error("Invalid email or password", Response.UNAUTHORIZED)
            );
            return;
        }

        const token = jwtUtils.generateToken({
            _id: user._id,
            email: user.email,
            name: user.name,
        });

        res.cookie(config.cookie.authCookieName, token, {
            httpOnly: true,
            maxAge: config.jwt.expiry,
            signed: true,
        });

        res.json(Response.success("Login successful"));
    } catch (err) {
        console.log(err);
        res.status(500).json(Response.error("Internal Server Error", Response.SERVER_ERROR));
    }
}

async function logout(req, res) {
    try {
        // do the stuffs in authService.logout if needed

        res.clearCookie(config.cookie.authCookieName);
        res.json(Response.success("Logged out successfully"));
    } catch (err) {
        console.log(err);
        res.status(500).json(Response.error("Internal Server Error", Response.SERVER_ERROR));
    }
}

async function getLoggedInUser(req, res) {
    try {
        const user = req.user;

        res.json(Response.success("User retrieved successfully", user));
    } catch (err) {
        console.log(err);
        res.status(500).json(Response.error("Internal Server Error", Response.SERVER_ERROR));
    }
}

export default {
    register,
    login,
    logout,
    getLoggedInUser,
};
