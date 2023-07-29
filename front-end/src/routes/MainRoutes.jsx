import { Routes, Route, Outlet } from "react-router-dom";

import PrivateLayout from "./PrivateLayout";
import PublicLayout from "./PublicLayout";

import RegistrationPage from "../pages/registration/RegistrationPage";
import LoginPage from "../pages/login/LoginPage";

import Navbar from "../components/navbar/Navbar";
import HomePage from "../pages/home/HomePage";
import NotificationPage from "../pages/notification/NotificationPage";
import AddPostPage from "../pages/addpost/AddPostPage";

function HomeLayout() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}

export default function MainRoutes() {
  return (
    <Routes>
      <Route path="/*" element={<PublicLayout />}>
        <Route path="login" element={<LoginPage />} />
        <Route path="register" element={<RegistrationPage />} />
      </Route>

      <Route path="/*" element={<PrivateLayout />}>
        <Route element={<HomeLayout />}>
          <Route index element={<HomePage />} />
          <Route path="notifications" element={<NotificationPage />} />
          <Route path="addpost" element={<AddPostPage />} />
        </Route>
      </Route>
    </Routes>
  );
}
