import { Link, useNavigate } from "react-router-dom";
import Layout from "../../components/Layout/Layout";
import { useContext, useState } from "react";
import myContext from "../../context/data/myContext";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase/firebaseConfig";
import { toast } from "react-toastify";
import Loader from "../../components/Loader/Loader";

const Login = () => {
  const context = useContext(myContext)
  const {loader, setLoader} = context

  // <============== Hacemos seteo de email y contraseña ===========>
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    // <========= Navegacion ==========>
      const navegate = useNavigate()

    const login = async () => {
      const ressp = await signInWithEmailAndPassword(auth, email, password)
      toast.success('Sesión iniciada',{
        position:'top-center',
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'colored'
      })
      localStorage.setItem('user', JSON.stringify(ressp))
      navegate('/')
      setLoader(false)
    
      try {
        
      } catch (error) {
        console.log(error);
        setLoader(false)
      }
    }

  return (
    <Layout>
      <section className="flex justify-center items-center h-screen ">
        {loader && <Loader/>}
        <div className="bg-gray-800/75 px-10 py-10 rounded-xl">
          <div>
            <h1 className="text-center text-xl font-bold font-titleFont capitalize text-gray-300 mb-4">
              iniciar sesión
            </h1>
          </div>
          <div>
            <input
              className="bg-gray-300 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-gray-500 font-bodyFont placeholder:text-gray-400 outline-none placeholder:capitalize"
              name="email"
              type="email"
              placeholder="correo electrónico"
              value={email}
              onChange={(e)=> setEmail(e.target.value)}
            />
          </div>
          <div>
            <input
              className="bg-gray-300 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-gray-500 font-bodyFont placeholder:text-gray-400 outline-none placeholder:capitalize"
              name="password"
              type="password"
              placeholder="contraseña"
              value={password}
              onChange={(e)=> setPassword(e.target.value)}
            />
          </div>
          <div className="flex justify-center mb-3">
            <button className="w-full border text-lg capitalize text-gray-300 py-2 px-2 rounded-lg hover:bg-gray-400 hover:text-gray-600 transition-all duration-300"
            onClick={login}>
              iniciar sesión
            </button>
          </div>
          <div>
            <h2 className="text-gray-400 first-letter:uppercase text-lg">
              ¿aun no tienes cuenta? {""}
              <Link
                to={"/signup"}
                className="text-gray-200 first-letter:uppercase text-lg">
                Regístrate
              </Link>
            </h2>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Login;
