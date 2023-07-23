import notificationRepository from "../repositories/notificationRepository.js";
import { Response } from "../utils/responseUtils.js"

async function getNotifications(req, res) {
    try {
        const user = req.user;
        const notifications = await notificationRepository.findAllByUserId(user._id);

        res.json(Response.success("Notifications are retrieved successfully.", notifications));
    } catch (err) {
        console.log(err);
        res.status(500).json(Response.error("Internal Server Error", Response.SERVER_ERROR));
    }
}

async function markAsRead(req, res) {
    try {
        const user = req.user;
        
        // const { _ids } = req.body;
        // await notificationRepository.updateMany(_ids, {is_read: true});

        const { _id } = req.query;
        await notificationRepository.updateOne(_id.trim(), { is_read: true });

        res.json(Response.success("Notifications are marked as read"));
    } catch (err) {
        console.log(err);
        res.status(500).json(Response.error("Internal Server Error", Response.SERVER_ERROR));
    }
}

export default {
    getNotifications,
    markAsRead
};
