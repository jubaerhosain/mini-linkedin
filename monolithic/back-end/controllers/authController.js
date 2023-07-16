import { Response } from "../utils/responseUtils.js";
import userRepository from "../repositories/userRepository.js";
import passwordUtils from "../utils/passwordUtils.js";

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

async function login(req, res) {}

export default {
    register,
    login,
};
