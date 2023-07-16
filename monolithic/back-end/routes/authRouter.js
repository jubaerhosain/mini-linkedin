import express from "express";
const authRouter = express.Router();

authRouter.post("/register", (req, res) =>  {
    console.log(req.body)
})

authRouter.post("/login", (req, res) =>  {

})

export default authRouter;
