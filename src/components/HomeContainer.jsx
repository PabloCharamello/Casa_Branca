import React from "react";
import { motion } from "framer-motion";
import Delivery from "../assets/img/delivery.webp";
import HeroBg from "../assets/img/heroBg.webp";
import { heroData } from "../utils/DB";
import GirlThinking from "./GirlThinking";

const HomeContainer = () => {
  return (
    <sectioin className="grid grid-cols-1 md:grid-cols-2 gap-2 w-full">
      <GirlThinking />
      <div className="py-2 flex-1 flex flex-col items-start justify-center gap-6 ">
        <div className="flex items-center gap-2 justify-center bg-orange-100 px-1 py-1 rounded-full">
          <p className="z-10 text-base text-orange-500 font-semibold ml-2 ">
            Bike Delivery
          </p>
          <div className="w-8 h-8 rounded-full overflow-hidden bg-white drop-shadow-sm">
            <img
              src={Delivery}
              alt="delivery"
              className="h-full object-contain"
            />
          </div>
        </div>
        <motion.p
          initial={{ opacity: 0, x: -450 }}
          animate={{ opacity: 1, x: 0 }}
          className="z-10 text-[2.5rem] font-bold tracking-wide  text-headingColor lg:text-[3.8rem]"
        >
          The fastest delivery in
          <span className="text-orange-600 lg:text-7xl text-[3rem] z-10">
            Your City
          </span>
        </motion.p>
        <p className="text-base text-textColor md:w-[88%] z-10">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci
          quam eum dicta illo laudantium amet nulla. Nam nihil eius assumenda
          vero accusamus culpa quae, fugit consectetur quam ab mollitia
          similique.
        </p>
        <button
          type="button"
          className="z-10 md:w-auto bg-gradient-to-br from-orange-400 to-orange-500 w-full px-4 py-2 rounded-lg hover:shadow-lg transition-all ease-in-out duration-200"
        >
          <motion.p whileTap={{ scale: 0.8 }}>Order Now!</motion.p>
        </button>
      </div>
      <div className="py-2 flex flex-1 items-center relative z-10 mb-3 ">
        <img
          src={HeroBg}
          alt="hero-background"
          className="ml-auto h-420 w-full lg:w-auto lg:h-640 md:h-510"
        />
        <div className=" z-10 absolute xxl:w-full top-0 left-0 flex items-center justify-center md:mx-0  lg:px-2 xl:px-12 md:mt-2 gap-2 sm:mt-36 lg:mt-0 flex-wrap py-2 xxl:px-44">
          {heroData &&
            heroData.map((e) => (
              <div
                key={e.id}
                className="w-[150px] xxl:m-2 lg:w-174 lg:h-56 sm:w-40 md:w-150 p-4 xl:w-44 bg-cardOverlay backdrop-blur-md rounded-3xl flex flex-col items-center justify-center drop-shadow-lg md:h-48 md:m-3 "
              >
                <img
                  src={e.imageSrc}
                  className="lg:w-40 -mt-10 lg:-mt-10 xxl:w-72 xxl:-m-10 md:w-40 md:h-190 xl:w-52"
                  alt="I1"
                />
                <p className="text-base lg:text-xl font-semibold  text-textColor mt-2 lg:mt-4">
                  {e.name}
                </p>

                <p className="text-[12px] lg:text-sm text-lighttextGray font-semibold my-1 lg:my-3">
                  {e.descrp}
                </p>

                <p className="text-sm font-semibold text-headingColor">
                  <span className="text-xs text-red-600">$</span> {e.price}
                </p>
              </div>
            ))}
        </div>
      </div>
    </sectioin>
  );
};

export default HomeContainer;
