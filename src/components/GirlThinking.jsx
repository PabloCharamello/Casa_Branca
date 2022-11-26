import React from "react";
import Lottie from "lottie-react";
import girlThinking from "../assets/lotties/girlThinking.json";
import { motion } from "framer-motion";

const GirlThinking = () => (
  <motion.div
    className="absolute -top-14 fill-zinc-50  sm:ml-95 sm:-top-10 mix-blend-hard-light"
    initial={{ opacity: 0, x: -450 }}
    animate={{ opacity: 1, x: 0 }}
  >
    <Lottie
      animationData={girlThinking}
      loop={true}
      className=" md:w-[215px] lg:w-[215px] xl:w-[215px] lg:mr-[500px]"
    />
  </motion.div>
);

export default GirlThinking;
