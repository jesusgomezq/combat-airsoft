import { FaFacebookF, FaStar } from "react-icons/fa";
import Layout from "../../components/Layout/Layout";
import { FaXTwitter } from "react-icons/fa6";
import { IoIosChatboxes } from "react-icons/io";
import { FcLike } from "react-icons/fc";

const ProductInfo = () => {
  return (
    <Layout>
      <section className="text-gray-600 font-bodyFont overflow-hidden">
        <div className="container px-5 py-20 mx-auto">
          <div className="lg:w-4/5 mx-auto flex flex-wrap">
            <img
              className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
              src="https://dummyimage.com/400x400"
              alt="productInfo"
            />
            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              <h2 className="text-sm font-titleFont tracking-widest text-gray-400">
                marca del producto
              </h2>
              <h1 className="text-gray-700 text-3xl font-medium mb-1 capitalize">
                nombre del producto
              </h1>
              <div className="flex mb-4">
                <span className="flex items-center text-xl">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar className="text-gray-400"/>
                </span>
                <span className="text-gray-600 ml-3 border-l-2 border-gray-300 py-2 pl-3 text-xl">
                  4 comentarios
                </span>

                <span className="flex ml-3 pl-3 py-2 border-l-2 space-x-2 border-gray-300 text-xl">
                  <a href="#" className="text-gray-500">
                    <FaFacebookF />
                  </a>
                  <a href="#" className="text-gray-500">
                    <FaXTwitter />
                  </a>
                  <a href="#" className="text-gray-500">
                    <IoIosChatboxes />
                  </a>
                </span>
              </div>
              <p className="leading-relaxed border-b-2 mb-5 pb-5">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde
                fugit, cum ut velit quisquam vel a aperiam maiores modi vero
                ullam impedit commodi ex voluptatem illum nam eius excepturi
                quibusdam!
              </p>
              <div className="flex">
                <span className="font-medium text-2xl text-gray-700">$60</span>

                <button className="focus:outline-none text-gray-300 bg-gray-700 hover:bg-gray-900 font-medium rounded-lg py-2 px-6 duration-300 transition-all ml-auto flex first-letter:uppercase"
                type="button">
                  <span className="first-letter:uppercase">agregar al carrito</span>
                </button>

                <button className="rounded-full w-10 h-10 bg-gray-300 p-0 border-0 inline-flex items-center justify-center ml-4 text-xl">
                  <span>
                    <FcLike />
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ProductInfo;
