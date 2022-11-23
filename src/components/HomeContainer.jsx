import React from "react";
import Delivery from "../assets/img/delivery.webp";
import { motion } from "framer-motion";

const HomeContainer = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-2 w-full  ">
      <div className="py-2 gap-6 flex-1 flex flex-col items-start justify-center">
        <div className="flex items-center gap-2 justify-center bg-orange-100 px-1 py-1 rounded-full">
          <p className="text-base text-orange-500 font-semibold ml-2">
            Bike Delivery
          </p>
          <div className="w-8 h-8 rounded-full overflow-hidden bg-white drop-shadow-sm">
            <img
              src={Delivery}
              alt="delivery"
              className=" h-full object-contain"
            />
          </div>
        </div>
        <p className="text-[2.5rem] font-bold tracking-wide text-headingColor lg:text-[4.5rem]">
          The fastest delivery in
          <span className="text-orange-600 text-[3rem] lg:text-[5-rem]">
            Your City
          </span>
        </p>
        <p className="text-base text-textColor md:w-[88%]">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci
          quam eum dicta illo laudantium amet nulla. Nam nihil eius assumenda
          vero accusamus culpa quae, fugit consectetur quam ab mollitia
          similique.
        </p>
        <button
          type="button"
          className="md:w-auto bg-gradient-to-br from-orange-400 to-orange-500 w-full px-4 py-2 rounded-lg hover:shadow-lg transition-all ease-in-out duration-200"
        >
          <motion.p whileTap={{ scale: 0.8 }}>Order Now!</motion.p>
        </button>
      </div>
      <div className="py-2 flex-1  bg-blue-500"></div>
    </div>
  );
};

export default HomeContainer;
