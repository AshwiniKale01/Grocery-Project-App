import axios from "axios";

const products = [
  {
    id: 2,
    name: "Mobile Phone",
    price: 442425,
    quantity: 4,
    image:
      "https://images.philips.com/is/image/PhilipsConsumer/CTW3500BK_94-RTP-global-001?$jpglarge$&wid=1250",
  },
  {
    id: 542,
    name: "Mobile Phone",
    price: 442425,
    quantity: 4,
    image:
      "https://images.philips.com/is/image/PhilipsConsumer/CTW3500BK_94-RTP-global-001?$jpglarge$&wid=1250",
  },
];

const employees = [
  {
    id: 1,
    firstname: "Mohit",
    lastname: "Thakur",
    email: "thakur@123",
  },
];

export const login = async (email, password) => {
  // const resp = axios
  //   .post("http://localhost:9091/admin/login", email, password)
  //   .then((resp) => resp.data);
  return true;
};

export const addProduct = async (productObj) => {
  // const resp = axios
  //   .post("http://localhost:9091/admin/add-product", productObj)
  //   .then((resp) => resp.data);
  return true;
};

export const updateProduct = async (productObj) => {
  // const resp = axios
  //   .put(
  //     "http://localhost:9091/admin/products/update/" + productObj.id,
  //     productObj
  //   )
  //   .then((resp) => resp.data);

  return true;
};

export const getAllProducts = () => {
  // const resp = axios.get("http://localhost:9091/admin/products");
  return products;
};

export const getProductById = (id) => {
  // const resp = axios.get("http://localhost:9091/admin/products/" + id);
  return products[0];
};

export const deleteProduct = (id) => {
  console.log("Delete ", id);
  return true;
};

export const getAllEmployees = () => {
  return employees;
};
