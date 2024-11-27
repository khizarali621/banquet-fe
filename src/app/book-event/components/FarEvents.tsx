"use client";
import { Container } from "@/components/common";
import ContestDatePicker from "@/components/common/Forms/ContestDatePicker";
import ContestTimePicker from "@/components/common/Forms/ContestTimePicker";
import { Label } from "@/components/common/Forms/Label";
import Select from "@/components/common/Forms/Select";
import React from "react";
import { Controller, useForm, FormProvider } from "react-hook-form";

const FarEvents = () => {
  const methods = useForm();
  const { control } = methods;

  const eventCompany = [
    { id: 1, name: "Gluon" },
    { id: 2, name: "Gluon1" },
    { id: 3, name: "Gluon2" },
    { id: 4, name: "Gluon3" },
    { id: 5, name: "Gluon4" },
  ];
  const eventStation = [
    { id: 1, name: "Lahore" },
    { id: 2, name: "Multan" },
    { id: 3, name: "Islamabad" },
    { id: 4, name: "Karachi" },
    { id: 5, name: "Okara" },
  ];
  const CostCenter = [
    { id: 1, name: "2033202528859652" },
    { id: 2, name: "2033202528859653" },
    { id: 3, name: "2033202528859654" },
    { id: 4, name: "2033202528859655" },
    { id: 5, name: "2033202528859656" },
  ];
  const eventVenue = [
    { id: 1, name: "Main Unit P1" },
    { id: 2, name: "Main Unit P2" },
    { id: 3, name: "Main Unit P3" },
    { id: 4, name: "Main Unit P4" },
    { id: 5, name: "Main Unit P5" },
  ];
  const TypeVenue = [
    { id: 1, name: "Barat" },
    { id: 2, name: "Walima" },
    { id: 3, name: "Mehndi" },
  ];
  const StatueVenue = [
    { id: 1, name: "Confirmed" },
    { id: 2, name: "Not Yet" },
    { id: 3, name: "Pending" },
  ];

  return (
    <FormProvider {...methods}>
      <div className="lg:py-[60px] md:py-12 py-8 relative overflow-hidden px-4">
        <img
          src="/assets/images/hallbg.png"
          alt=""
          className="absolute -left-10 -top-0 -z-10 -translate-y-1/2"
        />
        <h1 className="h2 text-center xl:text-[48px] text-black">
          Receipt Form for Event Booking
        </h1>
        <Container className="border border-[#1A1A1A1A] far-bg-shadow bg-white md:mt-7 mt-5 rounded-3xl md:p-12 p-8">
          <section className="flex lg:gap-10 gap-6 xs:flex-col w-full">
            <div className="flex flex-col gap-2.5 w-full">
              <Label className="!text-base !font-medium">Company</Label>
              <Select options={eventCompany} className="" />
            </div>
            <div className="flex flex-col gap-2.5 w-full">
              <Label className="!text-base !font-medium">Station</Label>
              <Select options={eventStation} className="" />
            </div>
          </section>

          <section className="flex lg:gap-10 gap-6 xs:flex-col w-full md:mt-10 mt-5">
            <div className="flex flex-col gap-2.5 w-full">
              <Label className="!text-base !font-medium">Cost Center</Label>
              <Select options={CostCenter} className="" />
            </div>
            <div className="flex flex-col gap-2.5 w-full">
              <Label className="!text-base !font-medium">Venue</Label>
              <Select options={eventVenue} className="" />
            </div>
          </section>

          <section className="flex lg:gap-10 gap-6 md:flex-row flex-col w-full md:mt-10 mt-5">
            <div className="flex flex-col gap-2.5 w-full">
              <Label>Booking Date</Label>
              <div className="relative">
                <Controller
                  name="startDate"
                  control={control}
                  defaultValue={new Date()}
                  render={({ field }) => (
                    <ContestDatePicker
                      {...field}
                      selected={field.value}
                      onChange={(date) => field.onChange(date)}
                    />
                  )}
                />
              </div>
            </div>
            <div className="flex flex-col gap-2.5 w-full">
              <Label>Event Date</Label>
              <div className="relative">
                <Controller
                  name="startDate"
                  control={control}
                  defaultValue={new Date()}
                  render={({ field }) => (
                    <ContestDatePicker
                      {...field}
                      selected={field.value}
                      onChange={(date) => field.onChange(date)}
                    />
                  )}
                />
              </div>
            </div>
          </section>

          <section className="flex lg:gap-10 gap-6 md:flex-row flex-col w-full md:mt-10 mt-5">
            <div className="flex flex-col gap-2.5 w-full">
              <Label>Time From</Label>
              <div className="relative">
                <Controller
                  name="startTime"
                  control={control}
                  defaultValue={new Date()}
                  render={({ field }) => (
                    <ContestTimePicker
                      {...field}
                      selected={field.value}
                      onChange={(date) => field.onChange(date)}
                    />
                  )}
                />
              </div>
            </div>
            <div className="flex flex-col gap-2.5 w-full">
              <Label>Time To</Label>
              <div className="relative">
                <Controller
                  name="startTime"
                  control={control}
                  defaultValue={new Date()}
                  render={({ field }) => (
                    <ContestTimePicker
                      {...field}
                      selected={field.value}
                      onChange={(date) => field.onChange(date)}
                    />
                  )}
                />
              </div>
            </div>
          </section>

          <section className="flex lg:gap-10 gap-6 xs:flex-col w-full md:mt-10 mt-5">
            <div className="flex flex-col gap-2.5 w-full">
              <Label className="!text-base !font-medium">Type</Label>
              <Select options={TypeVenue} className="" />
            </div>
            <div className="flex flex-col gap-2.5 w-full">
              <Label className="!text-base !font-medium">Status</Label>
              <Select options={StatueVenue} className="" />
            </div>
          </section>
        </Container>
      </div>
    </FormProvider>
  );
};

export default FarEvents;
