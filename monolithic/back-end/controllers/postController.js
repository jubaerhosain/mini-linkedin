import postRepository from "../repositories/postRepository.js"

async function createPost(req, res) {
    try {
        const user = req.user;

        const postData = req.body;


        console.log(req.file, postData.text)

        res.json(postData);

        console.log(req.body);
    } catch (err) {
        console.log(err);
        res.status(500).json(Response.error("Internal Server Error", Response.SERVER_ERROR));
    }
}

async function getPosts(req, res) {

}

export default {
    createPost,
    getPosts
}