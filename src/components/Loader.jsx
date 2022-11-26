import React from "react";
import Lottie from "lottie-react";
import loader from "../assets/lotties/loader.json";

const Loader = () => (
  <div className="overflow-clip">
    <Lottie
      animationData={loader}
      loop={true}
      className="w-508 h-640 shadow-lg -mt-16"
    />
  </div>
);

export default Loader;
