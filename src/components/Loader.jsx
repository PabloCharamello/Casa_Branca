import React from "react";
import Lottie from "lottie-react";
import loader from "../assets/lotties/loader.json";

const Loader = () => (
  <div className="">
    <Lottie
      animationData={loader}
      loop={true}
      className="w-[315px] sm:w-[380px] sm:mb-3 md:w-[550px] lg:w-[550px] xl:w-[640px]"
    />
  </div>
);

export default Loader;
