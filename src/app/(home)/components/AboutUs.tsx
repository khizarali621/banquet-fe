import { Button } from "@/components/common";
import React from "react";

const AboutUs = () => {
  return (
    <>
      <div className="flex lg:flex-nowrap flex-wrap ">
        <>
          <div className="xl:pl-[150px] xl:pr-[175px] sm:px-10 px-4 xl:py-[162px] lg:py-28 md:py-20 py-10 bg-background w-full">
            <h2 className="h2 text-white">About Us</h2>
            <div className="sm:mt-2.5 mt-1.5 lg:max-w-[140px] md:max-w-[110px] sm:max-w-[80px] max-w-[60px] h-[3px] rounded bg-primary" />
            <p className="font-aeonik md:mt-11 mt-6 xl:max-w-[522px] text-white/40">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequatduis enim. Amet minim mollit non
              deserunt ullamco est sit aliqua dolor do amet sint. Velit officia
              consequatduis enim.
            </p>
            <p className="font-aeonik mt-4 xl:max-w-[522px] text-white/40">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequatduis enim.
            </p>

            <Button className="md:mt-12 mt-8">Explore</Button>
          </div>
        </>
        <img
          src="/assets/images/rendering.png"
          alt=""
          className="xl:w-[592px] lg:w-[400px] w-full md:h-[681px] h-[550px]"
        />
      </div>
    </>
  );
};

export default AboutUs;
