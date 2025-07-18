import { Fragment, useContext, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { Link } from "react-router-dom";
import { RxCross2 } from "react-icons/rx";
import logoNav from "../../assets/logoNavbar.avif";
import Cartwidget from "../CartWidget/Cartwidget";
import SearchBar from "../SearchBar/SearchBar";
import { CiLogout } from "react-icons/ci";
import { LuUserPlus, LuUserRoundCheck } from "react-icons/lu";
import { FcMenu } from "react-icons/fc";
export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <div className="sticky top-0 z-50">
      {/* Mobile menu */}
      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="relative z-40 lg:hidden" onClose={setOpen}>
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0">
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 z-40 flex">
            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full">
              <Dialog.Panel className="relative flex w-full max-w-xs flex-col overflow-y-auto bg-white pb-12 shadow-xl">
                <div className="flex px-4 pt-32">
                  <button
                    type="button"
                    className="inline-flex items-center justify-center rounded-md py-2 text-gray-400"
                    onClick={() => setOpen(false)}>
                    <span className="sr-only">Close menu</span>
                    <RxCross2 className="text-2xl text-gray-500" />
                  </button>
                </div>
                <div className="space-y-6 border-t border-gray-200 px-4 py-6 ">
                  <Link
                    to={"/signup"}
                    className="text-sm font-medium text-gray-900 ">
                    Signup
                  </Link>
                  <div className="flow-root">
                    <Link
                      to={"/order"}
                      className="-m-2 block p-2 font-medium text-gray-900">
                      Order
                    </Link>
                  </div>

                  <div className="flow-root">
                    <Link
                      to={"/dashboard"}
                      className="-m-2 block p-2 font-medium text-gray-900">
                      Admin
                    </Link>
                  </div>

                  <div className="flow-root">
                    <Link className="-m-2 block p-2 font-medium text-gray-900 cursor-pointer">
                      Logout
                    </Link>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>

      {/* desktop  */}
      <header className="relative">
        <nav className="bg-gray-600 px-4 py-6 sm:px-6 lg:px-8 shadow-xl">
          <div className="container mx-auto">
            <div className="flex h-16 items-center">
              <button
                type="button"
                className="py-1 text-gray-300 lg:hidden border rounded-lg"
                onClick={() => setOpen(true)}>
                <span className="sr-only">Open menu</span>
                <FcMenu className="text-5xl" />
              </button>

              {/* Logo */}
              <div
                className="lg:flex lg:justify-between items-center 
                py-3 lg:px-3">
                <Link to={"/"} className="flex">
                  <div className="py-3 lg:py-0 flex items-center sm:justify-center">
                    <img className="w-28" src={logoNav} alt="logo" />
                    <h1 className=" text-2xl text-gray-300 font-semibold capitalize font-titleFont">
                      combat-airsoft
                    </h1>
                  </div>
                </Link>
              </div>

              <div className="ml-auto flex items-center gap-4">
                {/* <div className="gap-2 group hidden sm:block">
                  <SearchBar />
                </div> */}
                  <Cartwidget />
                <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
                  <Link
                    to={"/signup"}
                    className="text-sm font-medium text-gray-300 flex flex-col items-center">
                    <LuUserPlus className="text-xl" />
                    signup
                  </Link>
                  <Link
                    to={"/dashboard"}
                    className="text-sm font-medium text-gray-300 flex flex-col items-center">
                    <LuUserRoundCheck className="text-xl" />
                    Admin
                  </Link>

                  <Link className="text-sm font-medium text-gray-300 cursor-pointer flex flex-col items-center">
                    <CiLogout className="text-xl" />
                    Logout
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
}
