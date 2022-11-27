import React from "react";
import Lottie from "lottie-react";
import girlThinking from "../assets/lotties/girlThinking.json";
import { motion } from "framer-motion";

const GirlThinking = () => (
  <motion.div
    className="absolute -top-6 fill-zinc-50  sm:ml-95 sm:-top-10 mix-blend-hard-light mt-24 ml-24 lg:ml-56 xxl:ml-96 "
    initial={{ opacity: 0, x: -450 }}
    animate={{ opacity: 1, x: 0 }}
  >
    <p className="text-orange-700 font-semibold ml-20 mt-6 -mb-20 lg:mt-32 lg:ml-28 lg:-mb-32 xxl:ml-72 xxl:mt-60 xxl:-mb-60 xxl:text-4xl z-10 ring-offset-textColor relative rotate-12">
      wHaT dO YoU <br />
      WaNt tO eAt?
    </p>
    <Lottie
      animationData={girlThinking}
      loop={true}
      className=" md:w-[215px] lg:w-[215px] xl:w-[295px] lg:mr-[500px] opacity-80 w-60 xxl:w-[600px]"
    />
  </motion.div>
);

export default GirlThinking;
