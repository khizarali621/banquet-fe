import React from "react";
import { Header } from "@/components/ui";
import { Container } from "@/components/common";

const Banner = () => {
  return (
    <div className="md:py-[174px] py-[121px] bg-[url('/assets/images/book-bg.png')] bg-cover relative z-20">
      <Container>
        <div className="">
          <h1 className="h1 text-center">Book your event</h1>
        </div>
      </Container>
    </div>
  );
};

export default Banner;
