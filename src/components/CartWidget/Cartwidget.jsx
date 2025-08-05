import { PiShoppingCartSimpleThin } from "react-icons/pi";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Cartwidget = () => {
  const cartItems = useSelector((state) => state.cart)
  return (
    <div>
      <div
        className="bg-gradient-to-r from-gray-800 to-gray-700 transition-all
        duration-300 text-white py-1.5 px-3 rounded-full flex items-center gap-2 group ">
        <Link to={"/order"}>
          <span
            className="capitalize group-hover:block hidden 
            transition-all duration-300">
            orden
          </span>
        </Link>
        <Link to={"/cart"} className="flex">
          <PiShoppingCartSimpleThin className="text-2xl" />
          <span className="relative -top-1 text-xs text-white">{cartItems.length}</span>
        </Link>
      </div>
    </div>
  );
};

export default Cartwidget;
