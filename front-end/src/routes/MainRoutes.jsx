import { Routes, Route } from "react-router-dom";

import PrivateLayout from "./PrivateLayout";
import PublicLayout from "./PublicLayout";

import LoginPage from "../pages/login/LoginPage";

export default function MainRoutes() {
  return (
    <Routes>
      <Route path="/*" element={<PublicLayout />}>
        <Route path="login" element={<LoginPage />} />
        <Route path="register" element={<h1>registration</h1>} />
      </Route>
      <Route path="/*" element={<PrivateLayout />}>
        <Route index element={<h1>home</h1>} />
        <Route path="notifications" element={<h1>notifications</h1>} />
      </Route>
    </Routes>
  );
}
