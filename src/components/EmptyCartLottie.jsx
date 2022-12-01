import React from "react";
import Lottie from "lottie-react";
import emptyCartLottie from "../assets/lotties/emptyCartLottie.json";

const EmptyCartLottie = () => (
  <div className="">
    <Lottie
      animationData={emptyCartLottie}
      loop={true}
      className="w-[315px] sm:w-[380px] sm:mb-3 md:w-[350px] lg:w-[350px] xl:w-[340px]"
    />
  </div>
);

export default EmptyCartLottie;
