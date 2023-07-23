import User from "../models/User.js";

async function createOne(user) {
    try {
        const newUser = new User(user);
        await newUser.save();
    } catch (err) {
        console.log(err);
        throw new Error("An error occurred");
    }
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

async function findOneByEmail(email) {
    try {
        const existedUser = await User.findOne({ email });
        return existedUser;
    } catch (err) {
        console.log(err);
        throw new Error("An error occurred getting user information");
    }
}

async function findOneById(_id) {
    try {
        const existedUser = await User.findOne({ _id });
        return existedUser;
    } catch (err) {
        console.log(err);
        throw new Error("An error occurred getting user information");
    }
}

async function findAllFriends(user_id) {
    try {
        const users = await User.find({ _id: { $ne: user_id } });
        return users;
    } catch (err) {
        console.log(err);
        throw new Error("An error occurred");
    }
}

export default {
    createOne,
    isEmailExists,
    findOneByEmail,
    findOneById,
    findAllFriends,
};
