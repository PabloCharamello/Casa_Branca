import React from "react";
import Lottie from "lottie-react";
import thanks from "../assets/lotties/thanks";
import gracias from "../assets/lotties/gracias";

const Thanks = () => {
  return (
    <div className="flex justify-center items-center w-full h-[calc(100vh-112px)]">
      <Lottie
        animationData={thanks}
        loop={true}
        className="w-[315px] h-auto sm:w-[280px] sm:mb-3 w-250  md:w-[290px] lg:w-[400px] xl:w-[520px] xxl:w-[650px]"
      />
      <Lottie
        animationData={gracias}
        loop={true}
        className="w-[200px] mb-2 sm:w-[180px] sm:mr-12 mt-2 mr-10 sm:mb-3 md:h-[200px] w-250 md:w-[260px] lg:w-[330px] lg:h-[240px] xl:h-[300px] xxl:h-[450px] xxl:w-[400px]"
      />
      <p className="absolute text-[#FF8013] font-bold cursor-default mt-48 sm:mt-48 md:mt-60 lg:mt-60 xl:mt-[20rem] xxl:mt-[23rem]">
        See you soon!!
      </p>
    </div>
  );
};

export default Thanks;
