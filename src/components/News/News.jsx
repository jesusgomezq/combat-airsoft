import { FcCheckmark, FcCustomerSupport } from "react-icons/fc"
import { TbTruckDelivery } from "react-icons/tb"

const News = () => {
  return (
    <div>
        <section className="text-gray-600 font-medium">
            <div className="px-5 md:py-5 mx-auto container bg-gray-300 rounded-lg">
                <h1 className="text-center text-gray-900 font-bold text-3xl first-letter:uppercase">
            servicios
          </h1>
          <h2 className="text-center text-2xl font-semibold mb-10 first-letter:uppercase">
            nuestro <span className="text-indigo-950">equipo</span> de trabajo
          </h2>
                <div className="flex flex-wrap -m-4 text-center">
                    <div className="p-4 md:w-full sm:1/2 lg:w-1/3 w-full">
                        <div className="border-2 hover:shadow-xl border-gray-400 px-4 py-6 rounded-xl border-opacity-25 mb-3">
                            <span className="text-5xl inline-block"><FcCheckmark className="mb-3"/></span>
                            <h2 className="font-titleFont font-medium text-xl text-gray-900 first-letter:uppercase">las mejores marcas</h2>
                            <p className="leading-relaxed text-lg first-letter:uppercase">nuestros prodcutos 100% grarantizados</p>
                        </div>
                    </div>
                    <div className="p-4 md:w-full sm:1/2 lg:w-1/3 w-full">
                        <div className="border-2 hover:shadow-xl border-gray-400 px-4 py-6 rounded-xl border-opacity-25 mb-3">
                            <span className="text-5xl inline-block text-green-600"><TbTruckDelivery className="mb-3"/></span>
                            <h2 className="font-titleFont font-medium text-xl text-gray-900 first-letter:uppercase">envios</h2>
                            <p className="leading-relaxed text-lg first-letter:uppercase">entregas en 48h en todo el país</p>
                        </div>
                    </div>
                    <div className="p-4 md:w-full lg:w-1/3 w-full">
                        <div className="border-2 hover:shadow-xl border-gray-400 px-4 py-6 rounded-xl border-opacity-25 mb-3">
                            <span className="text-5xl inline-block"><FcCustomerSupport className="mb-3"/></span>
                            <h2 className="font-titleFont font-medium text-xl text-gray-900 first-letter:uppercase">soporte 24/7</h2>
                            <p className="leading-relaxed text-lg">Atención al cliente especializada</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}

export default News