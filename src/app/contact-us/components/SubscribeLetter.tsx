import { Button, Container } from "@/components/common";
import { Input } from "@/components/common/Forms/Input";
import React from "react";

const SubscribeLetter = () => {
  return (
    <div className="bg-primary py-[120px]">
      <Container>
        <h2 className="h2 lg:text-[40px] text-center text-white">
          Subcribe to our Newsletter
        </h2>
        <p className="lg:text-xl md:text-lg text-white text-center mt-4">
          Subscribe for Updates: Stay informed about the latest investor
          updates, financial results,and announcements by subscribing to our
          newsletter.{" "}
        </p>

        <div className="lg:mt-20 md:mt-14 mt-8 flex max-w-[583px] mx-auto">
          <Input
            placeholder="Enter your email"
            name="email"
            className="placeholder:text-white !border-none text-white bg-[#FFFFFF33]"
          />
          <Button className="!px-4 !py-5 rounded-r-md -ml-1 relative z-10 !border-white">
            Subscribe
          </Button>
        </div>
      </Container>
    </div>
  );
};

export default SubscribeLetter;
