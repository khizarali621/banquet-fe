import { Button, Container } from "@/components/common";
import { ContactInput } from "@/components/common/Forms/ContactInput";
import { Input } from "@/components/common/Forms/Input";
import { Label } from "@/components/common/Forms/Label";
import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";

const ContactCards = [
  {
    icon: <FaFacebookF />,
  },
  {
    icon: <FaInstagram />,
  },
  {
    icon: <FaTwitter />,
  },
];

const InpCards = [
  {
    name: "Your Name",
  },
  {
    name: "Email Address",
  },
  {
    name: "Phone Number (optional)",
  },
];

const GetStarted = () => {
  return (
    <div className="lg:py-[60px] md:py-12 py-8 relative overflow-hidden">
      <img
        src="/assets/images/hallbg.png"
        alt=""
        className="absolute -left-10  -top-0 -translate-y-1/2"
      />
      <img
        src="/assets/images/hallbgright.png"
        alt=""
        className="absolute -right-10  bottom-20 translate-y-1/2"
      />
      <Container>
        <div className="flex justify-between items-center">
          <div>
            <p className="md:text-2xl md:pb-8 pb-3">Get Started</p>
            <h1 className="h1 xl:text-[68px] font-bold xl:leading-[100px] text-black">
              Get in touch with us.
            </h1>
            <h1 className="h1 xl:text-[68px] font-bold xl:leading-[100px] text-black">
              We're here to assist you.
            </h1>
          </div>
          <div className="flex flex-col justify-center md:gap-6 gap-3">
            {ContactCards.map((item, i) => (
              <div
                className="md:w-12 md:h-12 w-8 h-8 flex items-center justify-center rounded-full border border-[#B7B7B7] bg-transparent hover:bg-black text-black hover:text-white cursor-pointer"
                key={i}
              >
                {item.icon}
              </div>
            ))}
          </div>
        </div>

        <>
          <section className="lg:mt-32 md:mt-20 mt-10">
            <div className="flex lg:gap-8 gap-5 md:flex-nowrap flex-wrap">
              {InpCards.map((ele, i) => (
                <div className="w-full" key={i}>
                  <Label>{ele.name}</Label>
                  <ContactInput placeholder="" name="" className="!w-full" />
                </div>
              ))}
            </div>
            <div className="lg:mt-12 md:mt-8 mt-5">
              <Label>Message</Label>
              <ContactInput placeholder="" name="" className="!w-full" />
            </div>

            <Button
              arrow
              className="hover:border-2 hover:!border-black hover:!text-black lg:mt-12 md:mt-8 mt-5"
            >
              Leave us a Message
            </Button>
          </section>
        </>
      </Container>
    </div>
  );
};

export default GetStarted;
