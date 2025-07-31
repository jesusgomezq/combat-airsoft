import { BrowserRouter, Route, Routes } from "react-router-dom";
import Order from "./Pages/Order/Order";
import Cart from "./Pages/Cart/Cart";
import Dashboard from "./Pages/Admin/Dashboard/Dashboard";
import HomePage from "./Pages/HomePage/HomePage";
import Error from "./Pages/Error/Error";
import MyState from "./context/data/myState";
import Login from "./Pages/Register/Login";
import Signup from "./Pages/Register/Signup";
import ProductInfo from "./Pages/ProductInfo/ProductInfo";
import AddProducts from "./Pages/Admin/AdminPages/AddProducts";
import UpdateProducts from "./Pages/Admin/AdminPages/UpdateProducts";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'

const App = () => {
  return (
    <MyState>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/order" element={<Order />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/*" element={<Error />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/productinfo/:id" element={<ProductInfo />} />
          <Route path="/addproduct" element={<AddProducts />} />
          <Route path="/updateproduct" element={<UpdateProducts />} />
        </Routes>
        <ToastContainer/>
      </BrowserRouter>
    </MyState>
  );
};

export default App;
