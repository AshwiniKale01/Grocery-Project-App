import { Provider } from "react-redux";
import store from "./redux/store";
import { Routes, Route } from "react-router-dom";
import {
  Home,
  Product,
  Products,
  Cart,
  Login,
  Register,
  Checkout,
  PageNotFound,
} from "./pages";
import { Navbar } from "./components";
import AdminLogin from "./components/admin/AdminLogin";
import AdminDashboard from "./components/admin/AdminDashboard";

function App() {
  return (
    <>
      <Provider store={store}>
        {window.location.href.search("admin") <= 0 && <Navbar />}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard/:emailId" element={<Home />} />
          <Route path="/product" element={<Products />} />
          <Route path="/product/:id" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="*" element={<PageNotFound />} />
          <Route path="/product/*" element={<PageNotFound />} />
          <Route path="admin/login" element={<AdminLogin />} />
          <Route path="admin/dashboard/*" element={<AdminDashboard />} />
        </Routes>
      </Provider>
    </>
  );
}

export default App;
