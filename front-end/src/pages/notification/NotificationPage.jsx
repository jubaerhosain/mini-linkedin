import { useState } from "react";

const notificationsData = [
  {
    id: 1,
    user: {
      name: "John Doe",
      image: "/blank_person.png",
    },
    message: "You have a new friend request.",
    is_read: false,
  },
  {
    id: 2,
    user: {
      name: "Jane Smith",
      image: "/blank_person.png",
    },
    message: "Your post was liked by someone.",
    is_read: true,
  },
  // Add more notifications here
];

const NotificationsPage = () => {
  const [notifications, setNotifications] = useState(notificationsData);

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
          key={notification.id}
          className={` flex flex-row justify-between notification ${
            notification.is_read ? "" : "bg-gray-300"
          }`}
        >
          <img
            src={notification.user.image}
            alt={notification.user.name}
            className="w-10 h-10 rounded-full mr-4"
          />
          <div>
            <p className="font-bold">{notification.user.name}</p>
            <p className="text-gray-700">{notification.message}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default NotificationsPage;
