import Notification from "../models/Notification.js";

async function createOne(notification) {
    const newNotification = new Notification(notification);
    await newNotification.save();
    return newNotification;
}

async function createMany(notifications) {
    await Notification.insertMany(notifications);
}

async function findAllByUserId(user_id) {
    const notifications = await Notification.find({ user_id }).sort({ _id: -1 });
    return notifications;
}

async function updateOne(_id, data) {
    await Notification.findOneAndUpdate({ _id: _id }, data);
}

async function updateMany(_ids, data) {
    try {
        await Notification.updateMany({ _id: { $in: _ids } }, data);
    } catch (err) {
        console.log(err);
        throw new Error("An error occured");
    }
}

async function deleteOldNotifications() {
    const maxNotificationCount = 10;

    try {
        const notificationCount = await Notification.countDocuments();

        if (notificationCount > maxNotificationCount) {
            const oldestNotifications = await Notification.find({})
                .sort({ _id: 1 })
                .limit(notificationCount - maxNotificationCount);


            // Delete the oldest notifications
            await Notification.deleteMany({
                _id: { $in: oldestNotifications.map((notification) => notification._id) },
            });

            console.log("Deleted old notifications successfully.");
        } else {
            console.log("No need to delete old notifications.");
        }
    } catch (error) {
        console.error("Error deleting old notifications:", error);
    }
}

export default {
    createOne,
    createMany,
    findAllByUserId,
    updateOne,
    updateMany,
    deleteOldNotifications,
};
