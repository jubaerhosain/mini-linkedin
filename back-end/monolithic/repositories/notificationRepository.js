import Notification from "../models/Notification.js";

async function createOne(notification) {
    try {
        const newNotification = new Notification(notification);
        await newNotification.save();
        return newNotification;
    } catch (err) {
        console.log(err);
        throw new Error("An error occurred");
    }
}

async function createMany(notifications) {
    try {
        await Notification.insertMany(notifications);
    } catch (err) {
        console.log(err);
        throw new Error("An error occured");
    }
}

async function findAllByUserId(user_id) {
    try {
        const notifications = await Notification.find({ user_id }).sort({ _id: -1 });
        return notifications;
    } catch (err) {
        console.log(err);
        throw new Error("An error occured");
    }
}

async function updateOne(_id, data) {
    try {
        await Notification.findOneAndUpdate({ _id: _id }, data);
    } catch (err) {
        console.log(err);
        throw new Error("An error occured");
    }
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
    const maxNotificationCount = 5;

    try {
        const notificationCount = await Notification.countDocuments({is_read: true});

        if (notificationCount > maxNotificationCount) {
            const oldestNotifications = await Notification.find({ is_read: true })
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
    } catch (err) {
        console.error("Error deleting old notifications:", err);
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
