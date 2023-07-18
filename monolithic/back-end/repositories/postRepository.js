import Post from "../models/Post.js";

async function createPost(postData) {
    const newPost = new Post(postData);
    await newPost.save();
    return newPost;
}

async function getPosts(user_id) {
    // find all posts excluding this user_id(see doc)
    const posts = await Post.find();
    return posts;
}

async function updatePost(postData) {}

export default {
    createPost,
    getPosts,
    updatePost,
};
