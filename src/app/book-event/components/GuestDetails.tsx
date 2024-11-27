import React from "react";
import { Container } from "@/components/common";
import { Input } from "@/components/common/Forms/Input";
import { Label } from "@/components/common/Forms/Label";
import Select from "@/components/common/Forms/Select";
const GuestDetails = () => {
  const eventGuest = [
    { id: 1, name: "Groom" },
    { id: 2, name: "Groom1" },
    { id: 3, name: "Groom2" },
    { id: 4, name: "Groom3" },
  ];

  return (
    <div className="lg:py-[60px] md:py-12 py-8 relative px-4 md:mt-5">
      <img
        src="/assets/images/hallbg.png"
        alt=""
        className="absolute left-0 -bottom-1/2 -z-10"
      />
      <h1 className="h2 text-center xl:text-[48px] text-black">
        Guest Details
      </h1>
      <Container className="border border-[#1A1A1A1A] far-bg-shadow bg-white md:mt-7 mt-5 rounded-3xl md:p-12 p-8">
        <section className="flex lg:gap-10 gap-6 xs:flex-col w-full">
          <div className="flex flex-col gap-2.5 w-full">
            <Label className="!text-base !font-medium">Guest Type</Label>
            <Select options={eventGuest} className="" />
          </div>
          <div className="flex flex-col gap-2.5 w-full">
            <Label className="!text-base !font-medium">Guest Name</Label>
            <Input
              placeholder="Ahmad Jamal"
              name="Guest Name"
              className="placeholder:!text-black w-full rounded-xl border border-[#CBD5E1] !bg-white md:!py-4 py-3 px-5 md:text-xl text-base text-black focus-visible:!border-2 focus-visible:!border-primary "
            />
          </div>
        </section>

        <section className="flex lg:gap-10 gap-6 xs:flex-col w-full md:mt-10 mt-5">
          <div className="flex flex-col gap-2.5 w-full">
            <Label className="!text-base !font-medium">Contact Number</Label>
            <Input
              placeholder="0300-7878987"
              name="Contact"
              className="placeholder:!text-black w-full rounded-xl border border-[#CBD5E1] !bg-white md:!py-4 py-3 px-5 md:text-xl text-base text-black focus-visible:!border-2 focus-visible:!border-primary "
            />
          </div>
          <div className="flex flex-col gap-2.5 w-full">
            <Label className="!text-base !font-medium">Guest Remarks</Label>
            <Input
              placeholder=""
              name="Guest Remarks"
              className="placeholder:!text-black w-full rounded-xl border border-[#CBD5E1] !bg-white md:!py-4 py-3 px-5 md:text-xl text-base text-black focus-visible:!border-2 focus-visible:!border-primary "
            />
          </div>
        </section>
      </Container>
    </div>
  );
};

export default GuestDetails;
