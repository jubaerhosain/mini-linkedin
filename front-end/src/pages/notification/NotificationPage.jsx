import { useEffect, useState } from "react";
import axiosInstance from "../../config/axiosInstance";

const NotificationsPage = () => {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    const getNotifications = async () => {
      try {
        const response = await axiosInstance.get("notification");
        console.log(response.data);
        setNotifications(response.data.data);
      } catch (err) {
        console.log(err);
      }
    };
    getNotifications();
  }, []);

  const markAllAsRead = () => {
    const updatedNotifications = notifications.map((notification) => ({
      ...notification,
      is_read: true,
    }));
    setNotifications(updatedNotifications);
  };

  return (
    <div className="container mx-auto py-6 max-w-md">
      <div className="flex flex-row justify-between">
        <h1 className="text-2xl font-bold mb-4">Notifications</h1>
        <div className="flex justify-end mb-4">
          <button onClick={markAllAsRead} className="bg-blue-500 text-white font-bold py-2 px-4 rounded">
            Mark All as Read
          </button>
        </div>
      </div>
      {notifications.map((notification) => (
        <div
          key={notification._id}
          className={` flex flex-row justify-between notification p-3 my-2 ${
            notification.is_read ? "bg-gray-200" : "bg-gray-300"
          }`}
        >
          {/* <img
            src={notification.user.image}
            alt={notification.user.name}
            className="w-10 h-10 rounded-full mr-4"
          /> */}
          <div>
            <p className="text-gray-700">{notification.message}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default NotificationsPage;
