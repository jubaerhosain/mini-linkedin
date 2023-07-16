import { Response } from "../utils/responseUtils.js";
import userRepository from "../repositories/userRepository.js";
import passwordUtils from "../utils/passwordUtils.js";
import jwtUtils from "../utils/jwtUtils.js";
import config from "../config/config.js";

async function register(req, res) {
    try {
        const user = req.body;

        user.password = await passwordUtils.hashPassword(user.password);

        await userRepository.createUser(user);

        res.status(200).json(Response.success("Registration successful"));
    } catch (err) {
        console.log(err);
        res.status(500).json(Response.error("Internal Server Error", Response.SERVER_ERROR));
    }
}

async function login(req, res) {
    try {
        const { email, password } = req.body;
        const user = await userRepository.getUserByEmail(email);

        const isValid = await passwordUtils.verifyPassword(password, user.password);
        if (!isValid) {
            res.status(403).json(
                Response.error("Invalid email or password", Response.UNAUTHORIZED)
            );
            return;
        }

        const token = jwtUtils.generateToken({
            id: user._id,
            email: user.email,
            name: user.name,
        });

        console.log(user);

        res.cookie(process.env.AUTH_COOKIE_NAME, token, {
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

export default {
    register,
    login,
};
