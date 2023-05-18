import React from "react";
import { MdShoppingBasket } from "react-icons/md";
import { getAuth, getRedirectResult, GoogleAuthProvider, signInWithCredential, signInWithPopup } from "firebase/auth";
import { app } from "../../firebase.config";

import Logo from "../../img/logo.png";
import Avatar from "../../img/avatar.png";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function Header() {
const firebaseAuth = getAuth(app)
const provider = new GoogleAuthProvider()

  const login = async() => {
    const response = await signInWithPopup(firebaseAuth,provider)
    console.log(response);
  };

  return (
    <header className="fixed z-50 w-screen  p-6 px-16">
      {/* {dekstop & tablet} */}
      <Link to={"/"} className="hidden md:flex w-full h-full">
        <div className="flex items-center gap-2 mr-auto">
          <img src={Logo} className="w-8 object-cover" alt="logo" />
          <p className="text-headingColor text-xl font-bold">City</p>
        </div>

        <ul className="flex items-center gap-8">
          <li className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer">
            Home
          </li>
          <li className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer">
            Menu
          </li>
          <li className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer">
            About us
          </li>
          <li className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer">
            Service
          </li>
        </ul>
        <div className="relative flex items-center justify-center">
          <MdShoppingBasket className="text-textColor text-2xl ml-8 cursor-pointer" />
          <div className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-cartNumBg flex items-center justify-center">
            <p className="text-xs text-white font-semibold">2</p>
          </div>
        </div>

        <div className="relative">
          <motion.img
            whileTap={{ scale: 0.6 }}
            onClick={login}
            src={Avatar}
            className="w-10 min-w-[40px] min-h-[40px] ml-8 drop-shadow-xl cursor-pointer"
            alt="userProfile"
          />
        </div>
      </Link>

      {/* {mobile} */}
      <div className="flex md:hidden w-full h-full p-4"></div>
    </header>
  );
}

export default Header;
