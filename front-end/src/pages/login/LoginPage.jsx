import { useState } from "react";
import styles from "./LoginPage.module.css";
import { useAuthProvider } from "../../contexts/AuthProvider";

export default function SignInForm() {
  const { login } = useAuthProvider();

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

    // try {
    //   const response = await axiosInstance.post("/auth/login", formData);
    //   console.log(response.data);
    // } catch (err) {
    //   console.log(err.response?.data);
    // }

    await login(formData);
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
            <div className="flex items-center h-5">
              <input
                id="checkbox"
                name="checkbox"
                type="checkbox"
                className="w-4 h-4 mr-2 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                required=""
              />
              <label htmlFor="checkbox" className="block text-sm font-medium leading-6 text-gray-900 text-left">
                Remember me
              </label>
            </div>

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
