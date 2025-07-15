import { BrowserRouter, Route, Routes } from "react-router-dom";
import Order from "./Pages/Order/Order";
import Cart from "./Pages/Cart/Cart";
import Dashboard from "./Pages/Admin/Dashboard/Dashboard";
import HomePage from "./Pages/HomePage/HomePage";
import Error from "./Pages/Error/Error";
import MyState from "./context/data/myState";

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
        </Routes>
      </BrowserRouter>
    </MyState>
  );
};

export default App;
