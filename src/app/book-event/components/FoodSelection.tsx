"use client";
import React, { useState } from "react";
import { Container } from "@/components/common";
import Tabs from "@/components/ui/Tabs";
import FoodPackages from "./FoodPackages";

const tabData = [
  {
    label: "Food",
    content: <FoodPackages />,
  },
  {
    label: "RCS",
    content: <FoodPackages />,
  },
  {
    label: "Others",
    content: <FoodPackages />,
  },
  {
    label: "Food Suppliers",
    content: <FoodPackages />,
  },
  {
    label: "Labour",
    content: <FoodPackages />,
  },
  {
    label: "Layout",
    content: <FoodPackages />,
  },
  {
    label: "Tracking",
    content: <FoodPackages />,
  },
  {
    label: "Other Info",
    content: <FoodPackages />,
  },
];
const FoodSelection = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="lg:py-[60px] md:py-12 py-8 relative px-4 md:mt-5">
      <img
        src="/assets/images/hallbgright.png"
        alt=""
        className="absolute right-0 -top-16 -z-10"
      />
      <h1 className="h2 text-center xl:text-[48px] text-black">
        Food Selection
      </h1>
      <div className="border border-[#1A1A1A1A] far-bg-shadow bg-white md:mt-7 mt-5 rounded-3xl md:pb-9 pb-5 lg:max-w-[1172px] w-full mx-auto ">
        <Tabs
          tabs={tabData}
          setActiveTab={setActiveTab}
          activeTab={activeTab}
          wallet
          className=""
        />
        <div className="">{tabData[activeTab].content}</div>
      </div>
    </div>
  );
};

export default FoodSelection;
