import React from "react";
import Lottie from "lottie-react";
import girlThinking from "../assets/lotties/girlThinking.json";
import { motion } from "framer-motion";

const GirlThinking = () => (
  <motion.div
    className="absolute -top-6 fill-zinc-50 lg:-top-60 sm:ml-95 sm:-top-20 mix-blend-hard-light mt-24 ml-[70px] lg:ml-56 xxl:ml-96  lg:w-40 "
    initial={{ opacity: 0, x: -450 }}
    animate={{ opacity: 1, x: 0 }}
  >
    <p className="text-orange-700 font-semibold ml-28 mt-6 -mb-16 lg:mt-44 lg:ml-40 lg:-mb-32 xl:ml-60 xxl:ml-96 md:-pb-6 md:mt-20 xxl:mt-60 xxl:-mb-60 xxl:text-4xl z-10 ring-offset-textColor relative rotate-[30deg] sm:mt-20 lg:top-12">
      <span className="text-headingColor">
        w<span className="text-orange-800 text-xl">H</span>aT
      </span>{" "}
      dO{" "}
      <span className="text-headingColor text-xl">
        {" "}
        Yo<span className="text-orange-800 text-[1.5rem]">U</span>{" "}
      </span>
      <br />
      <span className="text-headingColor">
        <span className="text-orange-800 text-[1.5rem]">W</span>aNt
      </span>{" "}
      To{" "}
      <span className="text-headingColor text-xl xxl:text-[2.5rem]">EaT?</span>
    </p>
    <Lottie
      animationData={girlThinking}
      loop={true}
      className=" md:w-[215px] lg:w-[215px] xl:w-[295px] lg:mr-[500px] opacity-80 w-64 xxl:w-[600px]"
    />
  </motion.div>
);

export default GirlThinking;
