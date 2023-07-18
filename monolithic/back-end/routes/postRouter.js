import express from "express";
import multer from "multer";

import authMiddleware from "../middlewares/authMiddleware.js";
import postController from "../controllers/postController.js"

const postRouter = express.Router();
const upload = multer({ dest: 'uploads/' });

// postRouter.post("/", authMiddleware.checkAuthentication, postController.createPost);
postRouter.post("/", upload.single("image"), postController.createPost);


postRouter.get("/", authMiddleware.checkAuthentication, postController.getPosts);

export default postRouter;
