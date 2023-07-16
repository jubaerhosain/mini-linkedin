import express from "express";
import config from "./config/config.js";
import cookieParser from "cookie-parser";

import authRouter from "./routes/authRouter.js"
import postRouter from "./routes/postRouter.js";
import notificationRouter from "./routes/notificationRouter.js"
import notFoundHandler from "./middlewares/common/notFoundHandler.js";
import defaultErrorHandler from "./middlewares/common/defaultErrorHandler.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser(config.cookie.secret));


app.use("/auth", authRouter);
app.use("/post", postRouter);
app.use("/notification", notificationRouter);

app.use(notFoundHandler);
app.use(defaultErrorHandler);


app.listen(config.port, () => {
    console.log(`Server listening on port ${config.port}...`);
});
