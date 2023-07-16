import express from "express";
import dotenv from "dotenv";
dotenv.config();
import authRouter from "./routes/authRouter.js"
import postRouter from "./routes/postRouter.js";
import notificationRouter from "./routes/notificationRouter.js"

const app = express();

app.use("/auth", authRouter);
app.use("/post", postRouter);
app.use("/notification", notificationRouter);


app.listen(process.env.port, () => {
    console.log(`Server listening on port ${process.env.port}...`);
});
