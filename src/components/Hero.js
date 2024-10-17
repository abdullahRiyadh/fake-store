import React from "react";

// import woman image
import WomanImg from "../img/woman_hero.png";
// import Link
import { Link } from "react-router-dom";
const Hero = () => {
  return (
    <section className=" h-[380px] bg-hero bg-no-repeat bg-cover bg-center py-24">
      <div className="container mx-auto flex justify-around h-full">
        {/* text */}
        <div className="flex flex-col justify-center">
          {/* pre title */}
          <div className="font-semibold flex items-center uppercase">
            <div className="w-20 h-[2px] bg-red-500 mr-3"></div>New Trend
          </div>
          {/* title */}
          <h1 className="text-[35px] leading-[1.5] font-light mb-4">
            AUTUMN SALE STYLISH <br />
            <span className="font-semibold">FAKE STORE</span>
          </h1>
          <Link
            to={"/"}
            className="self-start uppercase font-semibold border-b-2 border-primary"
          >
            Discover More
          </Link>
        </div>
        {/* image */}
        <div className="hidden md:block">
          <img className="h-[285px]" src={WomanImg} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
