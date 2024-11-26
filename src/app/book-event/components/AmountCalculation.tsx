import React from "react";
import { Button, Container } from "@/components/common";
import { Input } from "@/components/common/Forms/Input";
import { Label } from "@/components/common/Forms/Label";

const GuestCards = [
  {
    name: "Guests",
    placeholder: "270.00",
  },
  {
    name: "Basic Menu PH",
    placeholder: "1850.00",
  },
  {
    name: "Final Menu PH",
    placeholder: "2357.00",
  },
  {
    name: "Amount",
    placeholder: "636,625.00",
  },
  {
    name: "RCS Charges",
    placeholder: "77,000.00",
  },
  {
    name: "Other Charges",
    placeholder: "500.00",
  },
  {
    name: "Food Suppliers",
    placeholder: "20,000",
  },
  {
    name: "Labour",
    placeholder: "18,000",
  },
  {
    name: "Layout",
    placeholder: "55,000",
  },
  {
    name: "Additional",
    placeholder: "0.00",
  },
  {
    name: "Discount",
    placeholder: "0.00",
  },
  {
    name: "Total",
    placeholder: "758,600.00",
  },
];
const AmountCalculation = () => {
  return (
    <div className="lg:py-[60px] md:py-12 py-8 relative px-4 md:mt-5">
      <h1 className="h2 text-center xl:text-[48px] text-black">
        Total Amount Calculation
      </h1>
      <Container className="border border-[#1A1A1A1A] far-bg-shadow bg-white md:mt-7 mt-5 rounded-3xl md:p-12 p-8">
        <section className="grid lg:grid-cols-4 lg:gap-4 gap-10 xs:gap-4 grid-cols-2 w-full">
          {GuestCards.map((item, i) => (
            <div className="flex flex-col gap-2.5 w-full" key={i}>
              <Label className="!text-base !font-medium">{item.name}</Label>
              <Input
                placeholder={item.placeholder}
                name=""
                className={`${
                  i == 11
                    ? "!bg-[#2222221A] !font-bold border-none placeholder:!text-black !text-black"
                    : "!bg-white "
                }placeholder:!text-black w-full rounded-xl border border-[#CBD5E1] md:!py-4 py-3 px-5 md:text-xl text-base text-black focus-visible:!border-2 focus-visible:!border-primary`}
              />
            </div>
          ))}
        </section>

        <div className="flex pt-12 w-full justify-end">
          <Button className="hover:border-2 hover:!border-black hover:!text-black">
            Check Availability
          </Button>
        </div>
      </Container>
    </div>
  );
};

export default AmountCalculation;
