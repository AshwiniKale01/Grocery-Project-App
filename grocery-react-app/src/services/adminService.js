import axios from "axios";

export const login = async (email, password) => {
  return await axios
    .post("http://localhost:9091/admin/login", email, password)
    .then((resp) => resp.data);
};

export const addProduct = async (productObj) => {
  return await axios
    .post("http://localhost:9091/admin/add-product", productObj)
    .then((resp) => resp.data);
};

export const updateProduct = async (productObj) => {
  return await axios
    .put(
      "http://localhost:9091/admin/products/update/" + productObj.id,
      productObj
    )
    .then((resp) => resp.data);
};

export const getAllProducts = async () => {
  return await axios
    .get("http://localhost:9091/admin/getAallProducts")
    .then((resp) => resp.data);
};

export const getProductById = async (id) => {
  const res = await axios
    .get("http://localhost:9091/admin/getAallProducts")
    .then((resp) => resp.data);

  return res.find((ele) => ele.id === id);
};

export const deleteProduct = async (id) => {
  return await axios
    .delete("http://localhost:9091/admin/products/delete/" + id)
    .then((resp) => resp.data);
};

export const getAllEmployees = async () => {
  return await axios
    .get("http://localhost:9091/admin/getAllEmployees")
    .then((resp) => resp.data);
};

export const addEmployee = async (employee) => {
  return await axios
    .post("http://localhost:9091/admin//add-employee", employee)
    .then((resp) => resp.data);
};

export const deleteEmployee = async (id) => {
  return await axios
    .delete("http://localhost:9091/admin/delete-employee/" + id)
    .then((resp) => resp.data);
};
