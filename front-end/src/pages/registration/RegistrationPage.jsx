import { useState } from "react";
import styles from "./RegistrationPage.module.css";
import { useAuthProvider } from "../../contexts/AuthProvider";

export default function SignInForm() {
  const { register } = useAuthProvider();

  const [formData, setFormData] = useState({
    name: "",
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

    console.log("Form data submitted:", formData);

    // try {
    //   const response = await axiosInstance.post("/auth/login", formData);
    //   console.log(response.data);
    // } catch (err) {
    //   console.log(err.response?.data);
    // }

    // await register(formData);
  };

  return (
    <div className={styles.container}>
      <div className={styles.heading}>
        <img src="/logo.png" alt="Mini LinkedIn" />
        <h2>Create your account</h2>
      </div>

      <div className={styles.formContainer}>
        <form className={styles.form} onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name" className={styles.formLabel}>
              Full Name
            </label>
            <div className="mt-2">
              <input
                id="name"
                name="name"
                type="text"
                autoComplete="name"
                required
                value={formData.name}
                onChange={handleChange}
                className={styles.formInput}
              />
            </div>
          </div>

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
                autoComplete="password"
                required
                value={formData.password}
                onChange={handleChange}
                className={styles.formInput}
              />
            </div>
          </div>

          <div className="flex items-start">
            <div className="flex items-center h-5">
              <input
                id="terms"
                aria-describedby="terms"
                type="checkbox"
                className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                required=""
              />
            </div>
            <div className="ml-3 text-sm">
              <label htmlFor="terms" className="font-light text-gray-800 dark:text-gray-300">
                <span className="text-gray-800">I accept the </span>
                <a className="font-medium text-gray-600 hover:underline dark:text-primary-500" href="#">
                  Terms and Conditions
                </a>
              </label>
            </div>
          </div>

          <div>
            <button type="submit" className={styles.loginButton}>
              Create account
            </button>
          </div>
        </form>

        <p className={styles.login}>
          {`Already have an account? `}
          <a href="/login">Login here</a>
        </p>
      </div>
    </div>
  );
}
