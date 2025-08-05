import { useContext, useEffect } from "react";
import myContext from "../../context/data/myContext";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { addToCart } from "../../Redux/cartSlice";

const ProductCard = () => {
  const context = useContext(myContext);
  const { product } = context;

  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart);
  console.log(cartItems);

  // <========= Agregamos productos al carrito ========>
  const addItemToCart = (product) => {
    dispatch(addToCart(product));
    toast.success("Agregaste un producto");
  };

  // <========== Guardamos en el localStorage ========>
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);
  return (
    <section>
      <div className="container px-5 py-8 md:py-16 mx-auto">
        <div className="flex items-center gap-3 lg:w-1/2 w-full mb-6 lg:mb-10">
          <h1 className="sm:text-3xl text-2xl font-semibold font-titleFont text-gray-700">
            Colección
          </h1>
          <div className="h-7 w-1 bg-gray-500"></div>
          <span className="text-2xl sm:text-3xl text-gray-400 font-titleFont font-semibold">
            +1000
          </span>
        </div>

        <div className="h-1 w-24 bg-gray-700 rounded -mt-4 mb-4"></div>

        <div className="flex flex-wrap -m-4 px-4">
          {product.slice(0, 5).map((item, i) => {
            const { image, title, price, logoBrand } = item;
            return (
              <div className="p-4 w-full md:w-1/2 lg:w-1/3 xl:w-1/5" key={i}>
                <div className="h-full border-2 hover:shadow-gray-200 hover:shadow-2xl  transition-shadow duration-300 ease-in-out border-gray-300  border-opacity-75 rounded-2xl overflow-hidden">
                  <div className="flex justify-center cursor-pointer">
                    <img
                      className="rounded-2xl h-44 w-full p-3 hover:scale-110  duration-300 ease-in-out object-contain"
                      src={image}
                      alt={title}
                    />
                  </div>
                  <div className="p-5 border-t-2">
                    <h2 className="tracking-widest text-xs font-titleFont text-gray-400 mb-1 uppercase">
                      combat-airsoft
                    </h2>
                    <h1 className="first-letter:uppercase text-lg font-titleFont font-medium text-gray-900 mb-3">
                      {title.substring(0, 25)}
                    </h1>
                    <p className="leading-relaxed mb-3 first-letter:uppercase flex justify-between items-center">
                      ${price}
                      <img className="w-12" src={logoBrand} alt="" />
                    </p>

                    <div className="flex justify-center">
                      <button
                        className="focus:outline-none text-gray-300 bg-gray-700 hover:bg-gray-900 font-medium rounded-lg w-full py-2 first-letter:uppercase duration-300 transition-all"
                        type="button"
                        onClick={() => addItemToCart(item)}>
                        agregar al carrito
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProductCard;
