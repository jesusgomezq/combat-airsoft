import { useContext, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import myContext from "../../../context/data/myContext";
import { FaUser, FaCartPlus } from "react-icons/fa";
import { BsCartCheck } from "react-icons/bs";
import { IoBagAddOutline } from "react-icons/io5";
import { FiEdit } from "react-icons/fi";
import { FaRegTrashCan } from "react-icons/fa6";
import { Link } from "react-router-dom";

function DashboardTab() {
  const context = useContext(myContext);
  const { product, handleEdit, deleteProductTab } = context;
  console.log(product);

  const [open, setOpen] = useState(false);

  const closeModal = () => {
    setOpen(false);
  };

  const openModal = () => {
    setOpen(true);
  };

  const addItem = () => {
    window.location.href = "/addproduct";
  };
  return (
    <>
      <div className="container mx-auto">
        <div className=" container mx-auto ">
          <Tabs defaultIndex={0} className=" ">
            <TabList className="md:flex md:space-x-8 grid grid-cols-2 text-center gap-4  md:justify-center mb-10 ">
              <Tab>
                <button
                  type="button"
                  className="font-medium bg-gray-700 hover:bg-gray-900 text-gray-300 rounded-lg text-xl  px-5 py-1.5 text-center transition-all duration-300">
                  <div className="flex gap-2 items-center">
                    <BsCartCheck />
                    Productos
                  </div>{" "}
                </button>
              </Tab>
              <Tab>
                <button
                  type="button"
                  className="font-medium bg-gray-700 hover:bg-gray-900 text-gray-300  rounded-lg text-xl px-5 py-1.5 text-center transition-all duration-300">
                  <div className="flex gap-2 items-center">
                    <IoBagAddOutline /> Ordenes
                  </div>
                </button>
              </Tab>
              <Tab>
                <button
                  type="button"
                  className="font-medium text-gray-300 bg-gray-700 hover:bg-gray-900 rounded-lg text-xl  px-5 py-1.5 text-center transition-all duration-300">
                  <div className="flex gap-2 items-center">
                    <FaUser /> Usuarios
                  </div>
                </button>
              </Tab>
            </TabList>

            {/* <========== Tabla de oproductos =======> */}
            <TabPanel>
              <div className="px-4 md:px-0 mb-16">
                <h1 className=" first-letter:uppercase text-center mb-5 text-3xl font-semibold underline">
                  detalles de productos
                </h1>
                <div className=" flex justify-end">
                  <button
                    type="button"
                    className="text-gray-300 bg-gray-700 shadow- border hover:bg-gray-900 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 capitalize"
                    onClick={addItem}>
                    {" "}
                    <div className="flex gap-2 items-center">
                      agregar producto <FaCartPlus size={20} />
                    </div>
                  </button>
                </div>
                <div className="relative overflow-x-auto ">
                  <table className="w-full text-sm text-left text-gray-500">
                    <thead className="text-xs text-gray-800 uppercase bg-gray-300">
                      <tr>
                        <th scope="col" className="px-6 py-3">
                          S.No
                        </th>
                        <th scope="col" className="px-6 py-3">
                          Imagen
                        </th>
                        <th scope="col" className="px-6 py-3">
                          marca
                        </th>
                        <th scope="col" className="px-6 py-3">
                          Titulo
                        </th>
                        <th scope="col" className="px-6 py-3">
                          Precio
                        </th>
                        <th scope="col" className="px-6 py-3">
                          Categoria
                        </th>
                        <th scope="col" className="px-6 py-3">
                          fehca
                        </th>
                        <th scope="col" className="px-6 py-3">
                          acción
                        </th>
                      </tr>
                    </thead>
                    {product.map((item, i) => {
                      const { title, image, logoBrand, price, category, date } =
                        item;
                      return (
                        <tbody className="" key={i}>
                          <tr className="bg-gray-50 border-b border-gray-700">
                            <td className="px-6 py-4 text-gray-800">
                              {i + 1}.
                            </td>
                            <th
                              scope="row"
                              className="px-6 py-4 font-medium text-black whitespace-nowrap">
                              <img className="w-16" src={image} alt="img" />
                            </th>
                            <td className="px-6 py-4 text-gray-800">
                              <img src={logoBrand} alt="" className="w-10" />
                            </td>
                            <td className=" first-letter:uppercase px-6 py-4 text-gray-800">
                              {title}
                            </td>
                            <td className="px-6 py-4 text-gray-800">
                              ${price}
                            </td>
                            <td className=" first-letter:uppercase px-6 py-4 text-gray-800">
                              {category}
                            </td>
                            <td className="px-6 py-4 text-gray-800">{date}</td>
                            <td className="px-6 py-4">
                              <div className=" flex gap-2">
                                <div className=" flex gap-2 cursor-pointer text-black ">
                                  <div onClick={() => deleteProductTab(item)}>
                                    <FaRegTrashCan
                                      size={23}
                                      className="text-gray-700"
                                    />
                                  </div>
                                  <Link to={'/updateproduct'}>
                                  <div onClick={()=>handleEdit(item)}>
                                    <FiEdit
                                      size={23}
                                      className="text-gray-700"
                                    />
                                  </div>
                                  </Link>
                                </div>
                              </div>
                            </td>
                          </tr>
                        </tbody>
                      );
                    })}
                  </table>
                </div>
              </div>
            </TabPanel>

            {/* <========= Tabla de ordenes =========> */}
            <TabPanel>
              {/* <Order order={order} setOrder={setOrder} setLoading={setLoading} /> */}
              <div className="relative overflow-x-auto mb-16">
                <h1 className=" capitalize text-center mb-5 text-3xl font-semibold underline">
                  detalle de ordenes
                </h1>
                <table className="w-full text-sm text-left text-gray-500">
                  <thead className="text-xs text-gray-900 uppercase bg-gray-200 ">
                    <tr>
                      <th scope="col" className="px-6 py-3">
                        orden Id
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Imagen
                      </th>
                      <th scope="col" className="px-6 py-3">
                        marca
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Titulo
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Precio
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Categoria
                      </th>
                      <th scope="col" className="px-6 py-3">
                        nombre
                      </th>
                      <th scope="col" className="px-6 py-3">
                        direccion
                      </th>
                      <th scope="col" className="px-6 py-3">
                        celular
                      </th>
                      <th scope="col" className="px-6 py-3">
                        email
                      </th>
                      <th scope="col" className="px-6 py-3">
                        fecha
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="bg-gray-50 border-b border-gray-700">
                      <td className="px-6 py-4 text-gray-900 ">3393939</td>
                      <th
                        scope="row"
                        className="px-6 py-4 font-medium text-gray-800 whitespace-nowrap">
                        <img
                          className="w-16"
                          src="https://dummyimage.com/720x400"
                          alt="img"
                        />
                      </th>
                      <td className="px-6 py-4 text-gray-800">marca</td>
                      <td className="px-6 py-4 text-gray-800">Title</td>
                      <td className="px-6 py-4 text-gray-800">$100</td>
                      <td className="px-6 py-4 text-gray-800">algo</td>

                      <td className="px-6 py-4 text-gray-800">juan</td>
                      <td className="px-6 py-4 text-gray-800">argentina</td>
                      <td className="px-6 py-4 text-gray-800">+5491122222</td>
                      <td className="px-6 py-4 text-gray-800">
                        chucahuama@gmail.com
                      </td>
                      <td className="px-6 py-4 text-gray-800 ">12 Aug 2026</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </TabPanel>

            {/* <=============== Tabla de usuarios ============> */}
            <TabPanel>
              {/* <User addressInfo={addressInfo} setAddressInfo={setAddressInfo} setLoading={setLoading} /> */}
              <div className="relative overflow-x-auto mb-10">
                <h1 className="capitalize text-center mb-5 text-3xl font-semibold underline">
                  detalle de usuario
                </h1>
                <table className="w-full text-sm text-left text-gray-500">
                  <thead className="text-xs text-gray-800 uppercase bg-gray-200 ">
                    <tr>
                      <th scope="col" className="px-6 py-3">
                        S.No
                      </th>

                      <th scope="col" className="px-6 py-3">
                        nombre
                      </th>
                      <th scope="col" className="px-6 py-3">
                        direccion
                      </th>

                      <th scope="col" className="px-6 py-3">
                        celular
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Email
                      </th>
                      <th scope="col" className="px-6 py-3">
                        fecha
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="bg-gray-50 border-b border-gray-700">
                      <td className="px-6 py-4 text-gray-800">1.</td>
                      <td className="px-6 py-4 text-gray-900">juan</td>
                      <td className="px-6 py-4 text-gray-800">argentina</td>

                      <td className="px-6 py-4 text-gray-800">+5401133333</td>
                      <td className="px-6 py-4 text-gray-800">
                        kuga@gmail.com
                      </td>
                      <td className="px-6 py-4 text-gray-800">12 Aug 2019</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </TabPanel>
          </Tabs>
        </div>
      </div>
    </>
  );
}

export default DashboardTab;
