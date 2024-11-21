import React from "react";
import { Header } from "@/components/ui";
import { Container } from "@/components/common";

const Banner = () => {
  return (
    <div className="md:pt-8 pt-4 bg-[url('/assets/images/contact-bg.png')] bg-cover relative z-20">
      <Container>
        <Header />
        <div className=" md:pt-[100px] pt-10 md:pb-[174px] pb-10">
          <h1 className="h1 text-center">Contact Us</h1>
        </div>
      </Container>
    </div>
  );
};

export default Banner;
