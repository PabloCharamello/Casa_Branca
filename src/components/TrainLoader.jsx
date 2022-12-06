import React from "react";
import Lottie from "lottie-react";
import trainLoader from "../assets/lotties/trainLoader.json";

const TrainLoader = () => (
  <div className="">
    <Lottie
      animationData={trainLoader}
      loop={true}
      className="overflow-auto w-[805px] -bottom-[100px] -right-0 sm:w-[768px] sm:right-0 sm:-bottom-[322px] md:w-[1024px] md:right-0 lg:w-[1280px] lg:right-0 lg:-bottom-3 xl:w-[1380px] xl:bottom-[0px] xl:right-[0px] xxl:w-[1920px] xxl:bottom-[0px] xxl:right-0 absolute"
    />
  </div>
);

export default TrainLoader;
