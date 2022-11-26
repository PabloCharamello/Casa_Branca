import React from "react";
import Lottie from "lottie-react";
import upToCloud from "../assets/lotties/upToCloud.json";

const UpToCloud = () => (
  <div className="w-56">
    <Lottie animationData={upToCloud} loop={true} className="" />
  </div>
);

export default UpToCloud;
