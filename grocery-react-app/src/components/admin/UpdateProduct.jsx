import React, { useEffect, useState } from "react";
import styles from "./AdminLogin.module.css";
import { getProductById, updateProduct } from "../../services/adminService";

const AddProduct = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [quantity, setQuantity] = useState(0);
  const [image, setImage] = useState("");
  const [productId, setProductId] = useEffect("");

  useEffect(() => {
    setProductId("");
    getProductById(productId).then((product) => {
      setName(product.name);
      setPrice(product.price);
      setQuantity(product.quantity);
      setImage(product.imaage);
    });
  }, []);

  const handleAddProduct = (event) => {
    event.preventDefault();
    updateProduct(productId, {
      id: productId,
      name,
      price,
      quantity,
      image,
    }).then((resp) => {
      window.alert("Product Updated - ", resp);
    });
  };
  return (
    <div style={{ paddingTop: "150px" }}>
      <form
        className={`w-25 mx-auto my-auto shadow p-4 rounded ${styles.formBorders}`}
        onSubmit={handleAddProduct}
      >
        <div className="mb-3">
          <label for="name" className="form-label">
            Product Name
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            aria-describedby="emailHelp"
            value={name}
            onChange={(event) => setName(event.target.value)}
            required
            disabled
          />
        </div>
        <div className="mb-3">
          <label for="price" className="form-label">
            Price
          </label>
          <input
            type="number"
            className="form-control"
            id="price"
            value={price}
            onChange={(event) => setPrice(event.target.value)}
            required
            min={0}
          />
        </div>
        <div className="mb-3">
          <label for="quantity" className="form-label">
            Quantity
          </label>
          <input
            type="number"
            className="form-control"
            id="quantity"
            value={quantity}
            onChange={(event) => setQuantity(event.target.value)}
            required
            min={0}
          />
        </div>

        <div className="mb-3">
          <label for="image" className="form-label">
            Image Url
          </label>
          <input
            type="text"
            className="form-control"
            id="image"
            value={image}
            onChange={(event) => setImage(event.target.value)}
            required
            disabled
          />
        </div>

        <button type="submit" className="btn btn-danger">
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddProduct;
