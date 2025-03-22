import React from "react";
import Lottie from "lottie-react";
import {animationData} from "./SplashAnimation.jsx"; // Import your Lottie file

const SplashScreen = () => {
  return (
    <div className="h-screen w-screen bg-[#1E143B] flex justify-center items-center">
        <div className="w-[300px] h-[300px] m-auto">
      <Lottie animationData={animationData} loop={true}  />
    </div>
    </div>
  );
};

export default SplashScreen;