import React from "react";
import Lottie from "lottie-react";
import cellPhonePayment from "../assets/lotties/cellPhonePayment.json";

const CellPhonePayment = () => (
  <div className="">
    <Lottie
      animationData={cellPhonePayment}
      loop={true}
      className="w-[315px] sm:w-[380px] sm:mb-3 md:w-[350px] lg:w-[350px] xl:w-[340px]"
    />
  </div>
);

export default CellPhonePayment;
