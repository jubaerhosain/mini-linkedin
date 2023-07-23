import Post from "../models/Post.js";

async function createOne(postData) {
    try {
        const newPost = new Post(postData);
        await newPost.save();
        return newPost;
    } catch (err) {
        console.log(err);
        throw new Error("An error occured");
    }
}

async function findAll(user_id) {
    try {
        // find all posts excluding this user_id(see doc)
        // const posts = await Post.find();
        const posts = await Post.find({ user_id: { $ne: user_id } });
    
        return posts;
    } catch (err) {
        console.log(err);
        throw new Error("An error occured");
    }
}

async function updatePost(postData) {
    try {
        
    } catch (err) {
        console.log(err);
        throw new Error("An error occured");
    }
}

export default {
    createOne,
    findAll,
    updatePost,
};
