"use client";
import { Button } from "@/components/common";
import ImageComponent from "@/components/common/ImageComponent";
import Head from "next/head";
import Link from "next/link";
import { useEffect, useState } from "react";

const Navigation = [
  {
    name: "Home",
    href: "",
  },
  {
    name: "Services",
    href: "",
  },
  {
    name: "About us",
    href: "",
  },
  {
    name: "Contact",
    href: "/contact-us",
  },
];

const Header = () => {
  const [navbar, setNavbar] = useState(false);
  const [isScrolledDown, setIsScrolledDown] = useState(false);
  const [prevScrollY, setPrevScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > prevScrollY) {
        // Scrolling down
        setIsScrolledDown(true);
      } else {
        // Scrolling up
        setIsScrolledDown(false);
      }

      setPrevScrollY(currentScrollY);
    };

    // Attach the scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollY]);

  return (
    <>
      <Head>
        <meta name="description" content="Navbar" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <nav
        className={`sticky 
          ${isScrolledDown ? "-top-16 " : "top-0"}
         w-full md:py-0 py-2 bg-transparent  z-50 shadow duration-300`}
      >
        <div className="justify-between md:flex md:items-center">
          <div className="flex items-center justify-between md:block">
            <Link href="/">
              <ImageComponent
                src={"/assets/images/Logo.svg"}
                width={123}
                height={40}
              />
            </Link>
            <div className="md:hidden">
              <button
                className="rounded-md p-1.5 text-gray-700 outline-none focus:border focus:border-gray-400"
                onClick={() => setNavbar(!navbar)}
              >
                {navbar ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 text-white"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293
 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
          <div
            className={`overflow-hidden  duration-300 ease-linear ${
              navbar
                ? "h-60  pt-2 md:h-auto md:pb-0 md:pt-0 relative z-20"
                : "mt-0  h-0  md:h-auto"
            }`}
          >
            <ul className="items-center justify-center md:flex md:space-x-6 ">
              {Navigation?.map((item, i) => (
                <Link href={item.href} key={i}>
                  <li className="mb-5 text-white md:mb-0 md:text-base font-medium font-aeonik text-sm">
                    {item.name}
                  </li>
                </Link>
              ))}

              <div className="md:hidden block">
                <Button variant="outline">Book Now</Button>
              </div>
            </ul>
          </div>
          <div className="md:block hidden">
            <Button variant="outline">Book Now</Button>
          </div>
        </div>
      </nav>
    </>
  );
};
export default Header;
