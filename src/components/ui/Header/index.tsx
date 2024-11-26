"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import Link from "next/link";
import { Button } from "@/components/common/index";

const Navigation = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/" },
  { name: "About us", href: "/" },
  { name: "Contact", href: "/contact-us" },
];

const Header = () => {
  const pathname = usePathname();
  const [navbar, setNavbar] = useState(false);
  const [scrollBackground, setScrollBackground] = useState(false);
  const [isScrolledDown, setIsScrolledDown] = useState(false);
  const [prevScrollY, setPrevScrollY] = useState(0);

  // Add/remove `no-scroll` class to the body when navbar toggles
  useEffect(() => {
    if (navbar) {
      if (typeof window !== "undefined") {
        document.body.classList.add("no-scroll");
      }
    } else {
      if (typeof window !== "undefined") {
        document.body.classList.remove("no-scroll");
      }
    }
  }, [navbar]);

  // Track scrolling to determine up/down scroll state
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = typeof window !== "undefined" ? window.scrollY : 0;

      setIsScrolledDown(currentScrollY > prevScrollY);
      setPrevScrollY(currentScrollY);
    };

    if (typeof window !== "undefined") {
      window.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("scroll", handleScroll);
      }
    };
  }, [prevScrollY]);

  // Handle scroll background appearance
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = typeof window !== "undefined" ? window.scrollY : 0;
      setScrollBackground(scrollPosition > 20);
    };

    if (typeof window !== "undefined") {
      window.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  const pathnameWithHash = `${pathname}${
    typeof window !== "undefined" ? window.location.hash : ""
  }`;
  const pathSegment = pathnameWithHash.slice(1);

  return (
    <div
      className={`${
        isScrolledDown ? `-top-40` : `top-0`
      } fixed z-50 w-full duration-300 ease-linear`}
    >
      <div className={`lg:mt-4`}>
        <div
          className={`justify-between px-3 py-2 max-w-[1172px] lg:mx-auto lg:px-6 lg:flex lg:items-center lg:gap-4  ${
            scrollBackground ? "bg-[#050201CC]/80" : ""
          }`}
        >
          <div
            className={`${
              scrollBackground ? "py-2" : "md:py-2"
            } flex items-center justify-between py-2 lg:block`}
          >
            <Link href="/">
              <img src="/assets/images/Logo.svg" alt="logo" className="" />
            </Link>
            <div className="flex items-center gap-1 lg:hidden">
              <Link href="#" className="">
                <Button className="whitespace-nowrap xs1:!px-2 xs1:!text-sm">
                  Book Now
                </Button>
              </Link>
              <button
                className="p-1.5 text-primary outline-none"
                onClick={() => setNavbar(!navbar)}
              >
                {navbar ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-primary"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <div className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-primary text-3xl text-primary">
                    <HiOutlineMenuAlt3 className="h-6 w-6" />
                  </div>
                )}
              </button>
            </div>
          </div>

          <div
            className={`bgBlur absolute right-0 py-3 duration-300 ease-linear lg:static lg:rounded-full lg:bg-transparent ${
              navbar
                ? "h-screen w-full overflow-auto bg-[#04172B]/80 px-4 py-6 lg:h-auto lg:w-auto"
                : "mt-0 h-screen w-0 overflow-hidden px-0 lg:h-auto lg:w-auto lg:px-7"
            }`}
          >
            <ul className="flex flex-col items-center justify-center gap-3 space-y-8 lg:flex-row lg:space-x-[30px] lg:space-y-0">
              {Navigation.map((item, i) => (
                <Link href={item.href} key={i}>
                  <li
                    role="button"
                    className={`${
                      pathSegment === item.href
                        ? "text-primary"
                        : "border-transparent text-white hover:text-primary"
                    } cursor-pointer text-base font-medium`}
                    onClick={() => setNavbar(false)}
                  >
                    {item.name}
                  </li>
                </Link>
              ))}
            </ul>
          </div>

          <Link href="#" className="hidden lg:block">
            <Button variant="outline">Book Now</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
