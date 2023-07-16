import User from "../models/User.js";

async function createUser(user) {
    const newUser = new User(user);
    await newUser.save();
}

async function isEmailExists(email) {
    try {
        const existedUser = await User.findOne({ email }).select("email");
        if (existedUser) return true;
        else false;
    } catch (err) {
        console.log(err);
        throw new Error("An error occurred while verifying email");
    }
}

async function getUserByEmail(email) {}

export default {
    createUser,
    isEmailExists,
    getUserByEmail,
};
