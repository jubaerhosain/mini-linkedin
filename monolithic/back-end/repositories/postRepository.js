import Post from "../models/Post.js";

async function createPost(postData) {
    const newPost = new Post(postData);
    await newPost.save();
}

async function getPosts(user_id) {}

export default {
    createPost,
    getPosts,
};
