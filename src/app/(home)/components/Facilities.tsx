import { Container } from "@/components/common";
import ImageComponent from "@/components/common/ImageComponent";
import React from "react";

const FacilitiesCards = [
  {
    src: "/assets/images/Drink.svg",
    name: "Welcome Drinks",
  },
  {
    src: "/assets/images/Car.svg",
    name: "Car Parking Service",
  },
  {
    src: "/assets/images/Spa.svg",
    name: "Resort & Spa",
  },
  {
    src: "/assets/images/Wifi.svg",
    name: "Free WIFI Service",
  },
];

const Facilities = () => {
  return (
    <>
      <div className="md:pt-12 pt-8 lg:pb-[100px] md:pb-20 pb-10 flex justify-center px-4">
        <section className="max-w-[880px] flex flex-wrap xs:grid xs:grid-cols-2 items-center xs:justify-center lg:gap-8 gap-4">
          {FacilitiesCards.map((item, i) => (
            <div className="flex items-center gap-5 xs:gap-3" key={i}>
              <div className="lg:w-[74px] lg:h-[74px] w-16 h-16 xs1:w-12 xs1:h-12 flex justify-center items-center bg-[#FF75000A] rounded-full">
                <ImageComponent
                  src={item.src}
                  fill
                  figClassName="lg:w-12 lg:h-12 w-8 h-8 xs1:w-6 xs1:h-6"
                />
              </div>
              <p className="font-medium font-aeonik text-background max-w-[93px]">
                {item.name}
              </p>
            </div>
          ))}
        </section>
      </div>
    </>
  );
};

export default Facilities;
