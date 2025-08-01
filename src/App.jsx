import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
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
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <MyState>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/order"
            element={
              <ProtectedRouter>
                <Order />
              </ProtectedRouter>
            }
          />
          <Route path="/cart" element={<Cart />} />
          <Route
            path="/dashboard"
            element={
              <ProtectedRouterAdmin>
                <Dashboard />
              </ProtectedRouterAdmin>
            }
          />
          <Route path="/*" element={<Error />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/productinfo/:id" element={<ProductInfo />} />
          <Route
            path="/addproduct"
            element={
              <ProtectedRouterAdmin>
                <AddProducts />
              </ProtectedRouterAdmin>
            }
          />
          <Route
            path="/updateproduct"
            element={
              <ProtectedRouterAdmin>
                <UpdateProducts />
              </ProtectedRouterAdmin>
            }
          />
        </Routes>
        <ToastContainer />
      </BrowserRouter>
    </MyState>
  );
};

export default App;

// <======= Protección de usuarios ======>
export const ProtectedRouter = ({ children }) => {
  const user = localStorage.getItem("user");
  if (user) {
    return children;
  } else {
    return <Navigate to={"/login"} />;
  }
};

// <======== Protrección de administrador =======>
const ProtectedRouterAdmin = ({ children }) => {
  const admin = JSON.parse(localStorage.getItem("user"));
  if (admin.user.email === "test@gmail.com") {
    return children;
  } else {
    return <Navigate to={"/login"} />;
  }
};
