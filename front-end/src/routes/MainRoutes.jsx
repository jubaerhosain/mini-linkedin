import { Routes, Route, Outlet } from "react-router-dom";

import PrivateLayout from "./PrivateLayout";
import PublicLayout from "./PublicLayout";

import LoginPage from "../pages/login/LoginPage";

import Navbar from "../components/navbar/Navbar";
import HomePage from "../pages/home/HomePage";

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
        <Route path="register" element={<h1>registration</h1>} />
      </Route>

      <Route path="/*" element={<PrivateLayout />}>
        <Route element={<HomeLayout />}>
          <Route index element={<HomePage />} />
          <Route path="notifications" element={<h1>notifications</h1>} />
        </Route>
      </Route>
    </Routes>
  );
}
