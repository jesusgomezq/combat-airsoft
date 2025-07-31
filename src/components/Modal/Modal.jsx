import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";

const Modal = () => {
  // Estado del modal
  let [open, setOpen] = useState(false);

  // Iniciamos funcion para abrir el modal
  function closeModal() {
    setOpen(false);
  }

  // Iniciamos funcion para cerrar el modal
  function openModal() {
    setOpen(true);
  }

  return (
    <>
      <div>
        <button
              className="w-full bg-blue-900 py-2 text-center rounded-lg font-bold text-white hover:bg-blue-700 transition-all duration-300 first-letter:uppercase"
              type="button"
              onClick={openModal}>
              comparar ahora
            </button>
      </div>

      <Transition appear show={open} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0">
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95">
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl p-2  text-left align-middle shadow-xl transition-all bg-gray-50">
                  <section className="">
                    <div className="flex flex-col items-center justify-center py-8 mx-auto  lg:py-0">
                      <div className="w-full  rounded-lg md:mt-0 sm:max-w-md xl:p-0 ">
                        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                          <form className="space-y-4 md:space-y-6" action="#">
                            <div>
                              <label
                                htmlFor="nombre"
                                className="block mb-2 text-sm font-medium text-gray-900 first-letter:uppercase">
                                nombre
                              </label>
                              <input
                                type="name"
                                name="nombre"
                                id="name"
                                className=" border outline-0 border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-100"
                                required
                              />
                            </div>
                            <div>
                              <label
                                htmlFor="apellido"
                                className="block mb-2 text-sm font-medium text-gray-900 first-letter:uppercase">
                                apellido
                              </label>
                              <input
                                type="text"
                                name="apellido"
                                id="apellido"
                                className=" border outline-0 border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-100"
                                required
                              />
                            </div>
                            <div>
                              <label
                                htmlFor="celular"
                                className="block mb-2 text-sm font-medium text-gray-900 first-letter:uppercase">
                                celular
                              </label>
                              <input
                                type="text"
                                name="celular"
                                id="celulcar"
                                className=" border outline-0 border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-100"
                                required
                              />
                            </div>
                            <div>
                              <label
                                htmlFor="documento"
                                className="block mb-2 text-sm font-medium text-gray-900 first-letter:uppercase">
                                documento
                              </label>
                              <input
                                type="text"
                                name="documento"
                                id="documento"
                                className=" border outline-0 border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-100"
                                required
                              />
                            </div>
                            <div>
                              <label
                                htmlFor="email"
                                className="block mb-2 text-sm font-medium text-gray-900 first-letter:uppercase">
                                email
                              </label>
                              <input
                                type="text"
                                name="email"
                                id="email"
                                className=" border outline-0 border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-100"
                                required
                              />
                            </div>
                          </form>
                          <button
                            onClick={closeModal}
                            type="button"
                            className="focus:outline-none w-full text-white bg-blue-900 hover:bg-blue-700 transition-all duration-300  outline-0 font-medium rounded-lg text-sm px-5 py-2.5 ">
                            Order Now
                          </button>
                        </div>
                      </div>
                    </div>
                  </section>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default Modal;
