"use client";

import AboutUs from "./components/AboutUs";
import Banner from "./components/Banner";
import BookHere from "./components/BookHere";
import Facilities from "./components/Facilities";
import Halls from "./components/Halls";
import Interior from "./components/Interior";

const Home = () => {
  return (
    <>
      <Banner />
      <Facilities />
      <BookHere />
      <Halls />
      <AboutUs />
      <Interior />
    </>
  );
};

export default Home;
