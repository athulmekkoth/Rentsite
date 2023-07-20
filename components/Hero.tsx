"use client";

import Image from "next/image";

import CustomButton from "./CustomButton";

const Hero = () => {
  const handleScroll = () => {
    const nextSection = document.getElementById("discover");

    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="hero ">
      <div className="flex-1 pt-36 padding-x ">
        <h1 className="hero__title">
          Find Your Dream House Now 
        </h1>

        <p className="hero__subtitle">
          Streamline your car rental experience with our effortless booking
          process.
        </p>
<div>
  
</div>
        <CustomButton
          title="Explore Cars"
          containerStyles="bg-primary-blue text-white rounded-full mt-10"
          handleClick={handleScroll}
        />
      </div>
      <div className="xl: mt-32 xl:flex-[1.5] flex justify-end items-end w-full xl:h-screen">
        <div className= "relative xl:w-full w-[90%] xl:h-full h-[590px] z-0">
        <Image className="rounded-xl" src="/home.jpg" width={600} height={400} alt="home"/>
        </div>

       
      
      </div>
    </div>
  );
};

export default Hero;