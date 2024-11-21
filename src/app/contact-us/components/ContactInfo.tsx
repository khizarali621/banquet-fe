import { Container } from "@/components/common";
import React from "react";

const InfoCard = [
  {
    name: " Email Address",
    contact: "help@info.com",
  },
  {
    name: " Number",
    contact: "(808) 998-34256",
  },
];

const ContactInfo = () => {
  return (
    <div className="md:py-20 sm:py-12 py-8 relative z-20 info-bg">
      <Container className="flex justify-between lg:flex-row flex-col md:gap-10 gap-6">
        <div>
          <p className="md:text-2xl md:pb-6 pb-3">Get Started</p>
          <h1 className="h2 lg:text-5xl text-black md:max-w-[475px]">
            We are always happy to assist you
          </h1>
        </div>
        <div className="flex md:flex-nowrap flex-wrap md:gap-16 gap-6">
          {InfoCard.map((e, i) => (
            <div className="md:py-8">
              <h4 className="h4 md:!text-[22px] font-semibold text-black">
                {e.name}
              </h4>
              <div className="w-7 h-[3px] bg-black mt-6" />
              <h4 className="h4 md:!text-[22px] font-semibold text-black mt-7">
                {e.contact}
              </h4>
              <p className="md:text-xl leading-[32px] mt-6 lg:max-w-[246px] w-full">
                Assistance hours: Monday - Friday 6 am to 8 pm EST
              </p>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default ContactInfo;
