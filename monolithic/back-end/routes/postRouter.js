import express from "express";
const postRouter = express.Router();

import authMiddleware from "../middlewares/authMiddleware.js";
import postController from "../controllers/postController.js"

postRouter.post("/", authMiddleware.checkAuthentication, postController.createPost);

postRouter.get("/", authMiddleware.checkAuthentication, postController.getPosts);

export default postRouter;
