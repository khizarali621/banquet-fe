import React from "react";
import { Button, Container } from "@/components/common";
import { RightArrow } from "@/components/common/Icons";
import ImageComponent from "@/components/common/ImageComponent";
import { Header } from "@/components/ui";

const BookCards = [
  {
    head: "Book A Our Service",
  },
  {
    head: "Book for a Weeding",
  },
  {
    head: "Book for Other Events",
  },
];
const Banner = () => {
  return (
    <>
      <div className="md:pt-8 pt-4 bg-background">
        <Container className="">
          <Header />
          <section className="flex justify-between md:flex-row flex-col md:pt-16 pt-10 md:pb-[74px] pb-10">
            <div className="lg:max-w-[536px] md:max-w-[490px]">
              <h1 className="h1 lg:leading-[58px]">
                Open The Door For A Unforgettable{" "}
                <span className="text-primary">Events-</span>
              </h1>
              <p className="font-medium text-white/70 md:mt-6 mt-3">
                Make your special events unforgettable with seamless banquet
                booking tailored to your needs.
              </p>
            </div>

            <div className="flex flex-col gap-4 py-9">
              {BookCards.map((item, i) => (
                <div
                  className="flex items-center justify-between border-b border-[#464646] pb-1 cursor-pointer"
                  key={i}
                >
                  <p className="text-white">{item.head}</p>
                  <div className="w-[17px] h-[17px] rounded bg-primary flex justify-center items-center lg:ml-[74px] ml-10">
                    <RightArrow />
                  </div>
                </div>
              ))}
            </div>
          </section>
        </Container>
        <ImageComponent
          src={"/assets/images/elegant-wedding-dishes.png"}
          width={1920}
          height={565}
        />
      </div>
    </>
  );
};

export default Banner;
