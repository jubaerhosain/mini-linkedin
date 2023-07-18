import Notification from "../models/Notification.js";

async function createNotification(notification) {
    const newNotification = new Notification(notification);
    await newNotification.save();
    return newNotification;
}

async function getNotifications(user_id) {
    const notifications = await Notification.find();
    return notifications;
}

export default {
    createNotification,
    getNotifications,
};
