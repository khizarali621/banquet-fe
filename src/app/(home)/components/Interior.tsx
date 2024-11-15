import { Container } from "@/components/common";
import ImageComponent from "@/components/common/ImageComponent";
import React from "react";

const Stars = [
  {
    src: "/assets/images/Star.svg",
  },
  {
    src: "/assets/images/Star.svg",
  },
  {
    src: "/assets/images/Star.svg",
  },
  {
    src: "/assets/images/Star.svg",
  },
  {
    src: "/assets/images/Star.svg",
  },
];
const InteriorCards = [
  {
    src: "/assets/images/resturant.svg",
    name: "Restaurant Service",
    dec: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do",
  },
  {
    src: "/assets/images/parking.svg",
    name: "Parking Service",
    dec: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do",
  },
  {
    src: "/assets/images/besthalls.svg",
    name: "The Best Halls",
    dec: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do",
  },
  {
    src: "/assets/images/bar.svg",
    name: "Lounge Bar",
    dec: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do",
  },
];
const Interior = () => {
  return (
    <>
      <Container className="py-[100px] flex justify-between lg:flex-row flex-col xl:gap-[100px] lg:gap-16 gap-5">
        <section className="lg:max-w-[285px]">
          <h1 className="h3 font-bold text-secondary">
            Classic Halls and Interior
          </h1>

          <div className="mt-6 flex items-center gap-1">
            {Stars.map((item) => (
              <ImageComponent src={item.src} width={21} height={21} />
            ))}
          </div>
          <p className="mt-2 font-medium lg:text-lg text-secondary">
            Excellent 5000+reviews
          </p>

          <div className="lg:mt-20 mt-10">
            <ImageComponent
              src={"/assets/images/team.svg"}
              width={225}
              height={57}
            />
            <p className="mt-2 text-secondary font-aeonik">
              Peoples successsfully got this dream place
            </p>
          </div>
        </section>
        <>
          <div className="relative w-full">
            <div className="lg:absolute bottom-10 w-full">
              <div className="grid grid-cols-2 xs:grid-cols-1 md:gap-10 gap-6">
                {InteriorCards.map((item, i) => (
                  <div
                    className="pt-10 pb-9 pl-6 pr-2.5 interior-shadow rounded bg-white"
                    key={i}
                  >
                    <ImageComponent src={item.src} width={56} height={56} />
                    <h4 className="h4 font-medium font-aeonik mt-4">
                      {item.name}
                    </h4>
                    <p className="mt-2 max-w-[303px] text-secondary">
                      {item.dec}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </>
      </Container>
    </>
  );
};

export default Interior;
