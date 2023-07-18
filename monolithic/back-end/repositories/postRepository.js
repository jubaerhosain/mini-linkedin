import Post from "../models/Post.js";

async function createPost(postData) {
    const newPost = new Post(postData);
    await newPost.save();
    return newPost;
}

async function getPosts(user_id) {
    const posts = await Post.find();
    return posts;
}

export default {
    createPost,
    getPosts,
};
