import { useAuthProvider } from "../../contexts/AuthProvider";
import styles from "./Navbar.module.css";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  const { logout, user } = useAuthProvider();

  const handleLogout = async () => {
    await logout();
  };

  return (
    <nav className={styles.nav}>
      <div>
        <div className={styles.container}>
          <div className={styles.logo}>
            <img src="/logo.png" alt="Mini LinkedIn" />
            <p>{user.name}</p>
          </div>

          <div className={styles.links}>
            <div>
              <NavLink to="/" className={styles.navLink}>
                Home
              </NavLink>
              <NavLink to="/notifications" className={styles.navLink}>
                Notifications
              </NavLink>
            </div>
          </div>

          <div className={styles.logout}>
            <button onClick={handleLogout}>Logout</button>
          </div>
        </div>
      </div>
    </nav>
  );
}
