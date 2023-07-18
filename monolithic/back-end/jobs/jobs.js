import cron from "node-cron";
import notificationRepository from "../repositories/notificationRepository.js";

function startDeleteNotificationJob() {
    cron.schedule("*/1 * * * *", notificationRepository.deleteOldNotifications);
    console.log("Delete old notifications job started...");
}

export default {
    startDeleteNotificationJob,
};
