import React from "react";
import { Header } from "@/components/ui";
import { Container } from "@/components/common";

const Banner = () => {
  return (
    <div className="md:py-[174px] py-[120px] bg-[url('/assets/images/contact-bg.png')] bg-cover relative z-20">
      <Container>
        <div className="">
          <h1 className="h1 text-center">Contact Us</h1>
        </div>
      </Container>
    </div>
  );
};

export default Banner;
