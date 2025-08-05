import { useEffect, useState } from "react";
import MyContext from "./myContext";
import { toast } from "react-toastify";
import { fireDB } from "../../firebase/firebaseConfig";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  onSnapshot,
  orderBy,
  query,
  setDoc,
  Timestamp,
} from "firebase/firestore";

const myState = (props) => {
  const [loading, setLoading] = useState(false);

  // <=========== Estado de productos =========>
  const [products, setProducts] = useState({
    title: "",
    price: "",
    image: "",
    logoBrand: "",
    category: "",
    description: "",
    time: Timestamp.now(),
    date: new Date().toLocaleDateString("en-US", {
      month: "short",
      day: "2-digit",
      year: "numeric",
    }),
  });

  // <========== Función para agregar prodcutos ========>
  const addProduct = async () => {
    if (
      products.title == "" ||
      products.price == "" ||
      products.image == "" ||
      products.logoBrand == "" ||
      products.category == "" ||
      products.description == ""
    ) {
      return toast.error("Requiere todos los campos");
    }
    setLoading(true);
    try {
      const productRef = collection(fireDB, "products");
      await addDoc(productRef, products);
      toast.success("Producto Agregado");
      getProductData();
      setTimeout(() => {
        window.location.href = "/dashboard";
      }, 700);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
    setProducts("");
  };
  // <======= Seteo de producto =====>
  const [product, setProduct] = useState([]);

  // <======= Obtenemos los prodcutos ======>
  const getProductData = async () => {
    setLoading(true);
    try {
      const q = query(collection(fireDB, "products"), orderBy("time"));
      const data = onSnapshot(q, (QuerySnapshot) => {
        const listArray = [];
        QuerySnapshot.forEach((doc) => {
          listArray.push({ ...doc.data(), id: doc.id });
        });
        setProduct(listArray);
        setLoading(false);
      });
      return () => data;
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getProductData();
  }, []);

  // <========== Función para editar productos =========>
  const handleEdit = (item) => {
    setProducts(item);
  };

  // <======== Actualización del producto ======>
  const updateProduct = async (item) => {
    setLoading(true);
    try {
      await setDoc(doc(fireDB, "products", products.id), products);
      toast.success("Se actualizo un producto correctamente");
      setTimeout(() => {
        window.location.href = "/dashboard";
      }, 700)
      getProductData();
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
    setProducts("");
  };

  // <====== Borramos producto de la tabla =====>
  const deleteProductTab = async (item) => {
    try {
      setLoading(true);
      await deleteDoc(doc(fireDB, "products", item.id));
      toast.success("Producto eliminado correctamente");
      setLoading(false);
      getProductData();
    } catch (error) {
      setLoading(false);
    }
  };
  return (
    <MyContext.Provider
      value={{
        loading,
        setLoading,
        addProduct,
        products,
        setProducts,
        product,
        handleEdit,
        updateProduct,
        deleteProductTab
      }}>
      {props.children}
    </MyContext.Provider>
  );
};

export default myState;
