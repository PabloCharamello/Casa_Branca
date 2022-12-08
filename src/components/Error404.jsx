import React from "react";
import Lottie from "lottie-react";
import page404 from "../assets/lotties/page404";

const Error404 = () => {
  return (
    <div className="flex flex-col justify-center items-center w-full h-[calc(100vh-112px)]">
      <Lottie
        animationData={page404}
        loop={true}
        className="w-[315px] h-auto sm:w-[380px] sm:mb-3 w-250 md:w-[350px] lg:w-[400px] xl:w-[540px] xxl:w-[650px]"
      />
      <p className="absolute text-[#FF8013] font-bold cursor-default mt-44 sm:mt-48 md:mt-44 lg:mt-52 xl:mt-[17rem] xxl:mt-[20rem]">
        Page not found!
      </p>
    </div>
  );
};

export default Error404;
