import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getAllEmployees } from "../../services/adminService";

const AllEmployees = () => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    setEmployees(getAllEmployees);
  }, []);

  const handleDeleteEmployee = (id) => {};
  return (
    <div className="container">
      <button className="btn btn-success mt-4 mb-2">
        <Link
          className="nav-link active"
          aria-current="page"
          to="/admin/dashboard/addEmployee"
        >
          Add Employee
        </Link>
      </button>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Employee ID</th>
            <th scope="col">Firstname</th>
            <th scope="col">Lastname</th>
            <th scope="col">Email</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {employees.length > 0 &&
            employees.map((employee, index) => (
              <tr key={index}>
                <th scope="row">{employee.id}</th>
                <td>{employee.firstname}</td>
                <td>{employee.lastname}</td>
                <td>{employee.email}</td>
                <td>
                  <button
                    className="btn btn-danger"
                    onClick={() => handleDeleteEmployee(employee.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllEmployees;
