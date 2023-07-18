import postRepository from "../repositories/postRepository.js";
import notificationRepository from "../repositories/notificationRepository.js";
import { Response } from "../utils/responseUtils.js";

async function createPost(req, res) {
    try {
        const user = req.user;

        const postData = req.body;
        postData.user_id = user.id;

        const newPost = await postRepository.createPost(postData);
        const newNotification = await notificationRepository.createNotification({
            user_id: user.id,
            post_id: newPost._id,
            message: `${user.name} added a post`,
        });
        // add a notification

        res.json(Response.success("Post added successfully", postData));
    } catch (err) {
        console.log(err);
        res.status(500).json(Response.error("Internal Server Error", Response.SERVER_ERROR));
    }
}

async function getPosts(req, res) {
    try {
        const user = req.user;
        const posts = await postRepository.getPosts(user.id);
        res.json(Response.success("Posts are retrieved successfully", posts));
    } catch (err) {
        console.log(err);
        res.status(500).json(Response.error("Internal Server Error", Response.SERVER_ERROR));
    }
}

async function updatePost(req, res) {}

export default {
    createPost,
    getPosts,
    updatePost,
};
