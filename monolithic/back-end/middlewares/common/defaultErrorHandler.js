import { Response } from "../../utils/responseUtils.js";

export default function defaultErrorHandler(err, req, res, next) {
    res.status(500).json(Response.error("Internal Server Error", Response.SERVER_ERROR));
}