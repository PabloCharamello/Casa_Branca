import React from "react";
import Lottie from "lottie-react";
import chekOutLoader from "../assets/lotties/loader.json";

const ChekOutLoader = () => (
  <div className="">
    <Lottie
      animationData={chekOutLoader}
      loop={true}
      className="w-[315px] sm:w-[380px] sm:mb-3 md:w-[550px] lg:w-[550px] xl:w-[640px]"
    />
  </div>
);

export default ChekOutLoader;
