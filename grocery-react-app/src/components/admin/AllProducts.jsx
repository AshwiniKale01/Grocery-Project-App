import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { deleteProduct, getAllProducts } from "../../services/adminService";

const AllProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(getAllProducts);
  }, []);

  const handleDeleteProduct = (id) => {
    deleteProduct(id);
  };
  return (
    <div className="container">
      <button className="btn btn-success mt-4 mb-2">
        <Link
          className="nav-link active"
          aria-current="page"
          to="/admin/dashboard/addProduct"
        >
          Add Product
        </Link>
      </button>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Product Id</th>
            <th scope="col">Name</th>
            <th scope="col">Price</th>
            <th scope="col">Quantity</th>
            <th scope="col">Image</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <tr key={index}>
              <th scope="row">{product.id}</th>
              <td>{product.name}</td>
              <td>{product.price}</td>
              <td>{product.quantity}</td>
              <td>
                <img
                  src={product.image}
                  alt={product.name}
                  className="img img-thumbnail"
                  width={45}
                />
              </td>
              <td>
                <button className="btn btn-primary">
                  <Link
                    className="nav-link active"
                    aria-current="page"
                    to="/admin/dashboard/updateProduct"
                  >
                    Update
                  </Link>
                </button>
                &nbsp;
                <button
                  className="btn btn-danger"
                  onClick={() => handleDeleteProduct(product.id)}
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

export default AllProducts;
