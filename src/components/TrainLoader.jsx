import React from "react";
import Lottie from "lottie-react";
import trainLoader from "../assets/lotties/trainLoader.json";

const TrainLoader = () => (
  <div className="">
    <Lottie
      animationData={trainLoader}
      loop={true}
      className=" w-[805px] -bottom-[100px] -right-1 sm:w-[768px] sm:-bottom-[322px] md:w-[1024px] lg:w-[1280px] lg:right-0 lg:-bottom-3 xl:w-[1380px] xl:bottom-[0px] xl:right-[0px] xxl:w-[1920px] xxl:bottom-[75px] xxl:right-3 absolute"
    />
  </div>
);

export default TrainLoader;
