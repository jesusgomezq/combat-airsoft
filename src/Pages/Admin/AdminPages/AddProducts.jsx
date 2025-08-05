import { useContext } from "react";
import myContext from "../../../context/data/myContext";

const AddProducts = () => {
  const context = useContext(myContext);
  const { products, setProducts, addProduct } = context;
  return (
    <section>
      <div className="flex justify-center items-center h-screen">
        <div className="bg-gray-800 px-10 py-10 rounded-xl">
          <div>
            <h1 className="text-center text-gray-300 text-xl font-bold mb-4 capitalize font-titleFont">
              agregar producto
            </h1>
          </div>
          <div>
            <input
              type="text"
              name="title"
              className="bg-gray-400 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-gray-300 outline-none placeholder:text-gray-500"
              placeholder="Titulo"
              value={products.title}
              onChange={(e) =>
                setProducts({ ...products, title: e.target.value })
              }
            />
          </div>
          <div>
            <input
              type="text"
              name="image"
              className="bg-gray-400 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-gray-300 outline-none placeholder:text-gray-500"
              placeholder="Imagen del producto"
              value={products.image}
              onChange={(e) =>
                setProducts({ ...products, image: e.target.value })
              }
            />
          </div>
          <div>
            <input
              type="text"
              name="logoBrand"
              className="bg-gray-400 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-gray-300 outline-none placeholder:text-gray-500"
              placeholder="Logo del producto"
              value={products.logoBrand}
              onChange={(e) =>
                setProducts({ ...products, logoBrand: e.target.value })
              }
            />
          </div>
          <div>
            <input
              type="text"
              name="price"
              className="bg-gray-400 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-gray-300 outline-none placeholder:text-gray-500"
              placeholder="Precio del producto"
              value={products.price}
              onChange={(e) =>
                setProducts({ ...products, price: e.target.value })
              }
            />
          </div>
          <div>
            <input
              type="text"
              name="category"
              className="bg-gray-400 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-gray-200 outline-none placeholder:text-gray-500"
              placeholder="Categoria"
              value={products.category}
              onChange={(e) =>
                setProducts({ ...products, category: e.target.value })
              }
            />
          </div>
          <div>
            <textarea
              name="description"
              cols="30"
              rows="10"
              className="bg-gray-400 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-gray-200 outline-none placeholder:text-gray-500"
              placeholder="Descripción"
              value={products.description}
              onChange={(e) =>
                setProducts({ ...products, description: e.target.value })
              }></textarea>
          </div>
          
          <div className="flex justify-between mb-3">
            <button
              className="border rounded-xl hover:bg-gray-300 text-gray-300 hover:text-gray-700 font-bold w-full py-2 px-2 capitalize font-titleFont"
              onClick={addProduct}>
              confirmar
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AddProducts;
