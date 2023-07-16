import express from "express";
const postRouter = express.Router();

import authMiddleware from "../middlewares/authMiddleware.js";

postRouter.post("/", authMiddleware.checkAuthentication, (req, res) => {
    console.log(req.user);
    res.json(req.user);
});

postRouter.get("/", authMiddleware.checkAuthentication, (req, res) => {});

export default postRouter;
