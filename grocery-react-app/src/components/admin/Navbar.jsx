import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import AddProduct from "./AddProduct";
import UpdateProduct from "./UpdateProduct";
import AllProducts from "./AllProducts";
import AllEmployees from "./AllEmployees";
import AddEmployee from "./AddEmployee";

const Navbar = () => {
  const handleLogout = () => {};
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-dark bg-danger">
        <div className="container">
          <a className="navbar-brand" href="#">
            Grocery Admin
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo02"
            aria-controls="navbarTogglerDemo02"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarTogglerDemo02"
          >
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="products"
                >
                  Manage Products
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="employees"
                >
                  Manage Employees
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to={handleLogout}
                >
                  Logout
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <Routes>
        <Route exact path="addProduct" element={<AddProduct />} />
        <Route exact path="updateProduct/:id" element={<UpdateProduct />} />
        <Route exact path="products" element={<AllProducts />} />
        <Route exact path="employees" element={<AllEmployees />} />
        <Route exact path="addEmployee" element={<AddEmployee />} />
      </Routes>
    </header>
  );
};

export default Navbar;
