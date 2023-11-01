import React, { useState } from "react";
import styles from "./AdminLogin.module.css";
import { addEmployee } from "../../services/adminService";

const AddEmployee = () => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleAddEmp = (event) => {
    addEmployee({ firstname, lastname, email, password }).then((resp) => {
      window.alert("Employee added - ", resp);
    });
  };
  return (
    <div style={{ paddingTop: "150px" }}>
      <form
        className={`w-25 mx-auto my-auto shadow p-4 rounded ${styles.formBorders}`}
        onSubmit={handleAddEmp}
      >
        <div className="mb-3">
          <label for="firstname" className="form-label">
            Firstname
          </label>
          <input
            type="text"
            className="form-control"
            id="firstname"
            aria-describedby="emailHelp"
            value={firstname}
            onChange={(event) => setFirstname(event.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label for="lastname" className="form-label">
            Lastname
          </label>
          <input
            type="text"
            className="form-control"
            id="lastname"
            value={lastname}
            onChange={(event) => setLastname(event.target.value)}
            required
            min={0}
          />
        </div>
        <div className="mb-3">
          <label for="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
            min={0}
          />
        </div>

        <div className="mb-3">
          <label for="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            required
          />
        </div>

        <button type="submit" className="btn btn-danger">
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddEmployee;
