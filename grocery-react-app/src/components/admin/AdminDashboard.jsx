import React from "react";
import Navbar from "./Navbar";
import { Route, Routes } from "react-router-dom";
import AddProduct from "./AddProduct";

const AdminDashboard = () => {
  return (
    <>
      <Navbar />
      <div>
        <h1 className="text-center mt-5">Admin Dashboard</h1>
      </div>
    </>
  );
};

export default AdminDashboard;
