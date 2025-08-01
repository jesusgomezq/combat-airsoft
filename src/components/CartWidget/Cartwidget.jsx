import { PiShoppingCartSimpleThin } from "react-icons/pi";
import { Link } from "react-router-dom";

const Cartwidget = () => {
  return (
    <div>
      <div
        className="bg-gradient-to-r from-gray-800 to-gray-700 transition-all
        duration-300 text-white py-1.5 px-3 rounded-full flex items-center gap-2 group">
        <Link to={"/order"}>
          <span
            className="capitalize group-hover:block hidden 
            transition-all duration-300">
            orden
          </span>
        </Link>
        <Link to={"/cart"}>
          <PiShoppingCartSimpleThin className="text-2xl" />
          <span className="relative -top-2.5 left-0  text-xs text-white"></span>
        </Link>
      </div>
    </div>
  );
};

export default Cartwidget;
