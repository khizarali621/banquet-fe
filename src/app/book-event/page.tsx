import React from "react";
import Banner from "./components/Banner";
import FarEvents from "./components/FarEvents";
import CustomerDetails from "./components/CustomerDetails";
import GuestDetails from "./components/GuestDetails";
import AmountCalculation from "./components/AmountCalculation";
import FoodSelection from "./components/FoodSelection";
import SaveButtons from "./components/SaveButtons";

const BookEvents = () => {
  return (
    <>
      <Banner />
      <FarEvents />
      <CustomerDetails />
      <GuestDetails />
      <AmountCalculation />
      <FoodSelection />
      <SaveButtons />
    </>
  );
};

export default BookEvents;
