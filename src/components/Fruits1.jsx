import React from "react";
import Lottie from "lottie-react";
import fruits from "../assets/lotties/fruits.json";

const Fruits1 = () => (
  <div className="absolute -top-20 sm:ml-95 w-full">
    <Lottie
      animationData={fruits}
      loop={true}
      className=" md:w-[215px] lg:w-[215px] xl:w-[215px] lg:mr-[500px]"
    />
  </div>
);

export default Fruits1;
