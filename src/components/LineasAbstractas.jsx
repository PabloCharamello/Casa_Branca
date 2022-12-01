import React from "react";
import Lottie from "lottie-react";
import lineasAbstractas from "../assets/lotties/lineasAbstractas.json";

const LineasAbstractas = () => (
  <div className="absolute opacity-20 rotate-[180deg] top-28">
    <Lottie
      animationData={lineasAbstractas}
      loop={true}
      className="w-[315px] sm:w-[380px] sm:mb-3 md:w-[350px] lg:w-[350px] xl:w-[340px]"
    />
  </div>
);

export default LineasAbstractas;
