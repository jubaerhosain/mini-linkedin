import { Outlet, useNavigate } from "react-router-dom";
import { useAuthProvider } from "../contexts/AuthProvider";

export default function PublicLayout() {
  const { loading, user } = useAuthProvider();
  const navigate = useNavigate();

  if (loading) {
    return <h1>Loading....</h1>;
  }

  return user ? navigate("/") : <Outlet />;
}
