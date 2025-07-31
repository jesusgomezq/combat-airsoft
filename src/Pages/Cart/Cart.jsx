import { FaRegTrashAlt } from "react-icons/fa";
import Layout from "../../components/Layout/Layout";
import Modal from "../../components/Modal/Modal";

const Cart = () => {
  return (
    <Layout>
      <div className="pt-5 h-screen">
        <h1 className="mb-10 text-center text-2xl font-bold font-titleFont first-letter:uppercase">tus compras</h1>

        <div className="mx-auto md:flex max-w-5xl justify-center md:space-x-6 xl:px-0 px-6">
          <div className="rounded-lg md:w-2/3">
            <div className="sm:flex justify-between sm:justify-start mb-6 rounded-lg border drop-shadow-xl bg-gray-300 p-6">
              <img
                className="w-full rounded-lg sm:w-40"
                src="https://dummyimage.com/400x400"
                alt=""
              />
              <div className="sm:ml-4 sm:flex sm:justify-between sm:w-full">
                <div className="mt-5 sm:mt-0">
                  <h2 className="text-gray-900 font-bold text-lg capitalize first-letter:uppercase">
                    titulo
                  </h2>
                  <h2 className="text-gray-900 font-medium first-letter:uppercase">marca</h2>
                  <p className="text-gray-700 font-semibold text-lg mt-1">
                    $200
                  </p>
                </div>
                <div className="mt-4 flex justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
                  <span className="text-2xl text-red-700 cursor-pointer">
                    <FaRegTrashAlt />
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="h-full rounded-lg border bg-gray-300 p-6 shadow-md md:mt-0 md:w-1/3 mt-6">
            <div className="flex justify-between mb-2">
              <p className="text-gray-700 first-letter:uppercase">subtotal</p>
              <p className="text-gray-700">$200</p>
            </div>

            <div className="flex justify-between">
              <p className="text-gray-700 first-letter:uppercase">descuento</p>
              <p className="text-gray-700">$0</p>
            </div>
            <hr className="my-4" />
            <div className="flex justify-between mb-3">
              <p className="text-lg font-bold first-letter:uppercase">total</p>
              <div>
                <p className="mb-1 text-lg font-bold">$200</p>
              </div>
            </div>
            {/* Modal  */}
            <Modal/>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Cart;
