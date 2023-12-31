import postRepository from "../repositories/postRepository.js";
import notificationRepository from "../repositories/notificationRepository.js";
import { Response } from "../utils/responseUtils.js";
import userRepository from "../repositories/userRepository.js";

async function createPost(req, res) {
    try {
        const user = req.user;

        const postData = req.body;
        postData.user_id = user._id;

        const newPost = await postRepository.createOne(postData);

        // create notification for all other user except current user
        const friends = await userRepository.findAllFriends(user._id);

        const notifications = [];
        friends.forEach(friend => {
            const notification = {
                user_id: friend._id,
                post_id: newPost._id,
                message: `${user.name} added a post`,
            }
            notifications.push(notification);
        });

        await notificationRepository.createMany(notifications);

        res.json(Response.success("Post added successfully", postData));
    } catch (err) {
        console.log(err);
        res.status(500).json(Response.error("Internal Server Error", Response.SERVER_ERROR));
    }
}

async function getPosts(req, res) {
    try {
        const user = req.user;
        const posts = await postRepository.findAll(user._id);
        res.json(Response.success("Posts are retrieved successfully", posts));
    } catch (err) {
        console.log(err);
        res.status(500).json(Response.error("Internal Server Error", Response.SERVER_ERROR));
    }
}

async function updatePost(req, res) {

}

export default {
    createPost,
    getPosts,
    updatePost,
};
