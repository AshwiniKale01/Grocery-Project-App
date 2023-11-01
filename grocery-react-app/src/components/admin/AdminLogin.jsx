import React, { useState } from "react";
import styles from "./AdminLogin.module.css";
import { useNavigate } from "react-router-dom";
import { login } from "../../services/adminService";

const AdminLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (event) => {
    event.preventDefault();
    console.log("Email ", email);
    console.log("Password ", password);

    login(email, password).then((resp) => {
      navigate("/admin/dashboard");
    });
  };
  return (
    <div className={styles.formContainer}>
      <form
        className={`w-25 mx-auto my-auto shadow p-4 rounded ${styles.formBorders}`}
        onSubmit={handleLogin}
      >
        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label for="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default AdminLogin;
