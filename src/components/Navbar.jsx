import React, { useState } from "react";
import { MdShoppingBasket, MdAdd, MdLogout } from "react-icons/md";
import { motion } from "framer-motion";

import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { app } from "../firebase.config";

import Logo from "../assets/img/Logo1.png";
import Avatar from "../assets/img/avatar.png";
import { Link } from "react-router-dom";
import { actionType } from "../context/reducer";
import { useStateValue } from "../context/StateProvider";

const Navbar = () => {
  const firebaseAuth = getAuth(app);
  const provider = new GoogleAuthProvider();

  const [{ user }, dispatch] = useStateValue();
  const [visibleMenu, setVisibleMenu] = useState(false);

  const login = async () => {
    if (!user) {
      const {
        user: { refreshToken, providerData },
        // eslint-disable-next-line
      } = await signInWithPopup(firebaseAuth, provider);
      dispatch({
        type: actionType.SET_USER,
        user: providerData[0],
      });
      localStorage.setItem("user", JSON.stringify(providerData[0]));
    } else {
      setVisibleMenu(!visibleMenu);
    }
  };

  const logout = () => {
    setVisibleMenu(false);
    localStorage.removeItem("user");

    dispatch({
      type: actionType.SET_USER,
      user: null,
    });
  };

  return (
    <header className="fixed z-50 w-screen p-2 px-3 md:p-5 md:px-16">
      {/* desktop and tablet */}
      <div className="hidden md:flex w-full h-full items-center justify-between">
        <motion.Link
          to={"/"}
          initial={{ opacity: 0, y: -80, duration: 1500 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 100 }}
          className="flex items-center gap-2"
        >
          <img
            src={Logo}
            alt="ecommerce Logo"
            className="w-10 drop-shadow-lg"
          />
          <p className="text-headingColor text-xl font-bold">Casa Branca</p>
        </motion.Link>
        <div className="flex items-center gap-8">
          <motion.ul
            initial={{ opacity: 0, x: 200, duration: 1500 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 200 }}
            className="flex items-center gap-8"
          >
            <li className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer">
              Home
            </li>
            <li className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer">
              Menu
            </li>
            <li className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer">
              About Us
            </li>
            <li className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer">
              Service
            </li>
          </motion.ul>

          <div className="relative flex items-center justify-center">
            <MdShoppingBasket className="text-textColor text-2xl cursor-pointer" />
            <div className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-cartNumBg flex items-center justify-center ">
              <p className="text-xs text-white font-semibold">2</p>
            </div>
          </div>
          <div className="relative">
            <motion.img
              whileTap={{ scale: 0.7 }}
              src={user ? user.photoURL : Avatar}
              className="w-10 min-w-[40px] h-10 min-h-[40px] shadow-md rounded-full drop-shadow-sm cursor-pointer"
              alt="avatarProfile"
              onClick={login}
            />
            {visibleMenu && (
              <motion.div
                initial={{ opacity: 0, scale: 0.6 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.6 }}
                className="w-36 bg-gray-50 shadow-x1 rounded-lg absolute flex flex-col top-11 right-0"
              >
                {user && user.email === "pablocharamello2@gmail.com" && (
                  <Link to="./createItem">
                    <p className="px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-100 transition-all duration-100 ease-in-out text-textColor text-base">
                      New Item <MdAdd />
                    </p>
                  </Link>
                )}
                <p
                  className="px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-100 transition-all duration-100 ease-in-out text-textColor text-base"
                  onClick={logout}
                >
                  Logout <MdLogout />
                </p>
              </motion.div>
            )}
          </div>
        </div>
      </div>
      {/* mobile */}

      <motion.div
        className="flex md:hidden w-full h-full items-center justify-between"
        initial={{ opacity: 0, y: -80, duration: 1500 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 100 }}
      >
        <Link to={"/"} className="flex items-center gap-2">
          <img
            src={Logo}
            alt="ecommerce Logo"
            className="w-10 drop-shadow-lg"
          />
          <p className="text-headingColor text-xl font-bold">Casa Branca</p>
        </Link>
        <div className="relative">
          <motion.img
            whileTap={{ scale: 0.7 }}
            src={user ? user.photoURL : Avatar}
            className="w-10 min-w-[40px] h-10 min-h-[40px] shadow-md rounded-full drop-shadow-sm cursor-pointer"
            alt="avatarProfile"
            onClick={login}
          />
          {visibleMenu && (
            <motion.div
              initial={{ opacity: 0, scale: 0.6 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.6 }}
              className="w-36 bg-gray-50 shadow-x1 rounded-lg absolute flex flex-col top-11 right-0"
            >
              {user && user.email === "pablocharamello2@gmail.com" && (
                <div className="w-100 flex justify-between items-center hover:bg-slate-100 cursor-pointer transition-all duration-100 hover:shadow-md">
                  <Link
                    to="./createItem"
                    className="flex px-4 items-center gap-3  pt-2 pb-1 transition-all duration-100 ease-in-out text-textColor text-base"
                  >
                    New Item
                    <MdAdd className="ml-2  transition-all duration-100 ease-in-out text-textColor" />
                  </Link>
                </div>
              )}
              <motion.ul
                initial={{ opacity: 0, x: 200, duration: 1500 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 200 }}
                className="flex flex-col"
              >
                <li className="px-4  flex items-center gap-3 cursor-pointer hover:bg-slate-100  pt-1 pb-1 transition-all duration-100 ease-in-out text-textColor text-base hover:shadow-md">
                  Home
                </li>
                <li className="px-4  flex items-center gap-3 cursor-pointer hover:bg-slate-100  pt-1 pb-1 transition-all duration-100 ease-in-out text-textColor text-base hover:shadow-md">
                  Menu
                </li>
                <li className="px-4  flex items-center gap-3 cursor-pointer hover:bg-slate-100  pt-1 pb-1 transition-all duration-100 ease-in-out text-textColor text-base hover:shadow-md">
                  About Us
                </li>
                <li className="px-4  flex items-center gap-3 cursor-pointer hover:bg-slate-100  pt-1 pb-1 transition-all duration-100 ease-in-out text-textColor text-base hover:shadow-md">
                  Service
                </li>
              </motion.ul>
              <div className="w-100 flex justify-between items-center hover:bg-slate-100 cursor-pointer transition-all duration-100 hover:shadow-md">
                <p
                  className="px-4 flex items-center gap-3 pt-1 pb-2  ease-in-out text-textColor text-base"
                  onClick={logout}
                >
                  Logout
                </p>
                <MdLogout className="mr-4 mb-1 transition-all duration-100 ease-in-out text-textColor" />
              </div>
            </motion.div>
          )}
        </div>
      </motion.div>
    </header>
  );
};

export default Navbar;
