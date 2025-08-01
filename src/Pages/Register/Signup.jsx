import { Link, useNavigate } from "react-router-dom";
import Layout from "../../components/Layout/Layout";
import { useContext, useState } from "react";
import myContext from "../../context/data/myContext";
import { toast } from "react-toastify";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, fireDB } from "../../firebase/firebaseConfig";
import { addDoc, collection, Timestamp } from "firebase/firestore";
import Loader from "../../components/Loader/Loader";

const Signup = () => {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const context = useContext(myContext);
  const { loading, setLoading } = context;

  const navegate = useNavigate()

  const signup = async () => {
    setLoading(true)
    if (nombre === "" || apellido === "" || email === "" || password === "") {
      return toast.error("Se requieren todos los campos");
    }

    try {
      const users = await createUserWithEmailAndPassword(auth, email, password);
      console.log(users);

      const user = {
        nombre: nombre,
        apellido: apellido,
        uid: users.user.uid,
        email: users.user.email,
        time: Timestamp.now(),
      };

      const userRef = collection(fireDB, "users");
      await addDoc(userRef, user);
      toast.success("Registro exitoso");
      
      navegate('/login')

      setNombre("");
      setApellido("");
      setEmail("");
      setPassword("");
      setLoading(false)

    } catch (error) {
      console.log(error);
      setLoading(false)
    }
  };

  
  return (
    <Layout>
      <section className="flex justify-center items-center h-screen">
        {loading && <Loader/>}
        <div className="bg-gray-800/75 px-10 py-10 rounded-xl">
          <div>
            <h1 className="text-center text-xl font-bold font-titleFont capitalize text-gray-300 mb-4">
              regístrate
            </h1>
          </div>
          <div>
            <input
              className="bg-gray-300 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-gray-500 font-bodyFont placeholder:text-gray-400 outline-none placeholder:capitalize"
              type="text"
              name="nombre"
              placeholder="nombre"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
            />
          </div>
          <div>
            <input
              className="bg-gray-300 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-gray-500 font-bodyFont placeholder:text-gray-400 outline-none placeholder:capitalize"
              type="text"
              name="apellido"
              placeholder="apellido"
              value={apellido}
              onChange={(e) => setApellido(e.target.value)}
            />
          </div>
          <div>
            <input
              className="bg-gray-300 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-gray-500 font-bodyFont placeholder:text-gray-400 outline-none placeholder:capitalize"
              type="email"
              name="email"
              placeholder="correo electrónico"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <input
              className="bg-gray-300 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-gray-500 font-bodyFont placeholder:text-gray-400 outline-none placeholder:capitalize"
              type="password"
              name="password"
              placeholder="contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="flex justify-center mb-3">
            <button
              className="w-full border text-lg capitalize text-gray-300 py-2 px-2 rounded-lg hover:bg-gray-400 hover:text-gray-600 transition-all duration-300"
              onClick={signup}>
              regístrate
            </button>
          </div>
          <div>
            <h2 className="text-gray-400 first-letter:uppercase text-lg">
              ¿tienes una cuenta? {""}
              <Link
                to={"/login"}
                className="text-gray-200 first-letter:uppercase text-lg">
                Inicar Sesión
              </Link>
            </h2>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Signup;
