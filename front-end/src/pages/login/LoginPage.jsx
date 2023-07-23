import { useState } from "react";
import styles from "./LoginPage.module.css";
import axiosInstance from "../../config/axiosInstance";

export default function SignInForm() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // console.log("Form data submitted:", formData);

    try {
      const response = await axiosInstance.post("/auth/login", formData);
      console.log(response.data);
    } catch (err) {
      console.log(err.response?.data);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.heading}>
        <img src="/logo.png" alt="Mini LinkedIn" />
        <h2>Login to your account</h2>
      </div>

      <div className={styles.formContainer}>
        <form className={styles.form} onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email" className={styles.formLabel}>
              Email address
            </label>
            <div className="mt-2">
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                value={formData.email}
                onChange={handleChange}
                className={styles.formInput}
              />
            </div>
          </div>

          <div>
            <label htmlFor="password" className={styles.formLabel}>
              Password
            </label>
            <div className="mt-2">
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                value={formData.password}
                onChange={handleChange}
                className={styles.formInput}
              />
            </div>
          </div>

          <div className={styles.rememberForgot}>
            <label className="block text-sm font-medium leading-6 text-gray-900 text-left">Remember me</label>
            <div>
              <a href="#">Forgot password?</a>
            </div>
          </div>

          <div>
            <button type="submit" className={styles.loginButton}>
              Login
            </button>
          </div>
        </form>

        <p className={styles.register}>
          {`Don't have an account yet? `}
          <a href="/register">Register</a>
        </p>
      </div>
    </div>
  );
}
