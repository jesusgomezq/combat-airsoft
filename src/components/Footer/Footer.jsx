import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import logoNav from "../../assets/logoNavbar.avif";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer>
      <div className="font-titleFont py-24 px-5 mx-auto container">
        <div className="flex flex-wrap md:text-left sm:text-center text-center order-first">
          <div className="px-4 xl:w-1/4 md:w-1/2 w-full">
            <h2 className="text-lg uppercase font-titleFont font-medium tracking-widest mb-1">
              categorias
            </h2>
            <ul className=" mb-10 font-bodyFont">
              <li className="first-letter:uppercase">
                <a
                  className=" text-gray-500 hover:text-gray-800 transition-all duration-300"
                  href="">
                  inicio
                </a>
              </li>
              <li className="first-letter:uppercase">
                <a
                  className=" text-gray-500 hover:text-gray-800 transition-all duration-300"
                  href="">
                  orden
                </a>
              </li>
              <li className="first-letter:uppercase">
                <a
                  className=" text-gray-500 hover:text-gray-800 transition-all duration-300"
                  href="">
                  conoce nuesto local
                </a>
              </li>
              <li className="first-letter:uppercase">
                <a
                  className=" text-gray-500 hover:text-gray-800 transition-all duration-300"
                  href="">
                  carrito
                </a>
              </li>
            </ul>
          </div>
          <div className="px-4 xl:w-1/4 md:w-1/2 w-full">
            <h2 className="text-lg uppercase font-titleFont font-medium tracking-widest  mb-1">
              servico al cliente
            </h2>
            <ul className="mb-10 font-bodyFont">
              <li className="first-letter:uppercase">
                <a
                  className=" text-gray-500 hover:text-gray-800 transition-all duration-300"
                  href="">
                  devoluciones
                </a>
              </li>
              <li className="first-letter:uppercase">
                <a
                  className="text-gray-500 hover:text-gray-800 transition-all duration-300"
                  href="">
                  about
                </a>
              </li>
              <li className="first-letter:uppercase">
                <a
                  className="text-gray-500 hover:text-gray-800 transition-all duration-300"
                  href="">
                  contactanos
                </a>
              </li>
            </ul>
          </div>
          <div className="px-4 xl:w-1/4 md:w-1/2 w-full">
            <h2 className="text-lg uppercase font-titleFont font-medium tracking-widest  mb-1">
              servicios
            </h2>
            <ul className="first-letter:uppercase mb-10 font-bodyFont">
              <li>
                <a
                  className="text-gray-500 hover:text-gray-800 transition-all duration-300"
                  href="">
                  privacidad
                </a>
              </li>
            </ul>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <img src="https://ecommerce-sk.vercel.app/pay.png" alt="" />
          </div>
        </div>
      </div>
      <div className="bg-gray-600">
        <div className="px-5 py-3 flex items-center sm:flex-row flex-col container mx-auto">
          <div className="flex justify-center items-center">
            <img className="w-28" src={logoNav} alt="logo" />
            <h1 className="text-2xl font-bold py-1 rounded uppercase text-gray-300">
              combat-airsoft
            </h1>
          </div>
          <p className="text-sm text-gray-400 sm:ml-6 sm:mt-0 mt-4">
            © 2025 COMBAT-AIRSOFT —{" "}
            <a className="text-gray-300 ml-1" href="">
              www.combat-airsoft.com
            </a>
          </p>
          <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
            <a className="text-gray-400 ml-3 text-3xl" href="">
              <FaFacebookF />
            </a>
            <a className="text-gray-400 ml-3 text-3xl" href="">
              <FaXTwitter />
            </a>
            <a className="text-gray-400 ml-3 text-3xl" href="">
              <FaInstagram />
            </a>
            <a className="text-gray-400 ml-3 text-3xl" href="">
              <FaLinkedinIn />
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
