import { Container } from "@/components/common";
import { Input } from "@/components/common/Forms/Input";
import { Label } from "@/components/common/Forms/Label";
import Select from "@/components/common/Forms/Select";
import React from "react";

const CustomerDetails = () => {
  const eventCustomer = [
    { id: 1, name: "Walk in Customer" },
    { id: 2, name: "Walk in Customer1" },
    { id: 3, name: "Walk in Customer2" },
    { id: 4, name: "Walk in Customer3" },
  ];

  const eventCity = [
    { id: 1, name: "Lahore, Punjab, Pakistan" },
    { id: 2, name: "Okara, Punjab, Pakistan" },
    { id: 3, name: "Multan, Punjab, Pakistan" },
    { id: 4, name: "Islamabad, Punjab, Pakistan" },
    { id: 5, name: "Karachi, Sindh, Pakistan" },
  ];

  return (
    <div className="lg:py-[60px] md:py-12 py-8 relative overflow-hidden px-4 md:mt-5">
      <img
        src="/assets/images/hallbgright.png"
        alt=""
        className="absolute right-0 -top-16 "
      />
      <h1 className="h2 text-center xl:text-[48px] text-black">
        Customer Details
      </h1>
      <Container className="border border-[#1A1A1A1A] far-bg-shadow bg-white md:mt-7 mt-5 rounded-3xl md:p-12 p-8">
        <section className="flex lg:gap-10 gap-6 xs:flex-col w-full">
          <div className="flex flex-col gap-2.5 w-full">
            <Label className="!text-base !font-medium">Customer</Label>
            <Select options={eventCustomer} />
          </div>
          <div className="flex flex-col gap-2.5 w-full">
            <Label className="!text-base !font-medium">Customer Name</Label>
            <Input
              placeholder="Customer Name"
              name="CustomerName"
              className="placeholder:!text-black w-full rounded-xl border border-[#CBD5E1] !bg-white md:!py-4 py-3 px-5 md:text-xl text-base text-black focus-visible:!border-2 focus-visible:!border-primary "
            />
          </div>
        </section>

        <section className="flex lg:gap-10 gap-6 xs:flex-col w-full md:mt-10 mt-5">
          <div className="flex flex-col gap-2.5 w-full">
            <Label className="!text-base !font-medium">City</Label>
            <Select options={eventCity} />
          </div>
          <div className="flex flex-col gap-2.5 w-full">
            <Label className="!text-base !font-medium">Address</Label>
            <Input
              placeholder="Street no 01, Phase 1, Model Town"
              name="Address"
              className="placeholder:!text-black w-full rounded-xl border border-[#CBD5E1] !bg-white md:!py-4 py-3 px-5 md:text-xl text-base text-black focus-visible:!border-2 focus-visible:!border-primary "
            />
          </div>
        </section>

        <section className="flex lg:gap-10 gap-6 xs:flex-col w-full md:mt-10 mt-5">
          <div className="flex flex-col gap-2.5 w-full">
            <Label className="!text-base !font-medium">Town</Label>
            <Input
              placeholder="Model Town"
              name="town"
              className="placeholder:!text-black w-full rounded-xl border border-[#CBD5E1] !bg-white md:!py-4 py-3 px-5 md:text-xl text-base text-black focus-visible:!border-2 focus-visible:!border-primary "
            />
          </div>

          <div className="flex flex-col gap-2.5 w-full">
            <Label className="!text-base !font-medium">Contact No</Label>
            <Input
              placeholder="0333-6868686"
              name="Contact No"
              className="placeholder:!text-black w-full rounded-xl border border-[#CBD5E1] !bg-white md:!py-4 py-3 px-5 md:text-xl text-base text-black focus-visible:!border-2 focus-visible:!border-primary "
            />
          </div>
        </section>

        <section className="flex lg:gap-10 gap-6 xs:flex-col w-full md:mt-10 mt-5">
          <div className="flex flex-col gap-2.5 w-full">
            <Label className="!text-base !font-medium">Reference</Label>
            <Input
              placeholder=""
              name="Reference"
              className="placeholder:!text-black w-full rounded-xl border border-[#CBD5E1] !bg-white md:!py-4 py-3 px-5 md:text-xl text-base text-black focus-visible:!border-2 focus-visible:!border-primary "
            />
          </div>
          <div className="flex flex-col gap-2.5 w-full">
            <Label className="!text-base !font-medium">Note</Label>
            <Input
              placeholder=""
              name="Note"
              className="placeholder:!text-black w-full rounded-xl border border-[#CBD5E1] !bg-white md:!py-4 py-3 px-5 md:text-xl text-base text-black focus-visible:!border-2 focus-visible:!border-primary "
            />
          </div>
        </section>
      </Container>
    </div>
  );
};

export default CustomerDetails;
