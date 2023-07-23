import Post from "../models/Post.js";

async function createOne(postData) {
    const newPost = new Post(postData);
    await newPost.save();
    return newPost;
}

async function findAll(user_id) {
    // find all posts excluding this user_id(see doc)
    // const posts = await Post.find();
    const posts = await Post.find({ user_id: { $ne: user_id } });

    return posts;
}

async function updatePost(postData) {}

export default {
    createOne,
    findAll,
    updatePost,
};
