import { Button, Container } from "@/components/common";
import { Input } from "@/components/common/Forms/Input";
import { Facebook, Twitter, Youtube } from "@/components/common/Icons";
import Link from "next/link";
import React from "react";

type Props = {};

const LinkCard = [
  {
    href: "",
    name: "Home",
  },
  {
    href: "",
    name: "Services",
  },
  {
    href: "",
    name: "About us",
  },
  {
    href: "/contact-us",
    name: "Contact",
  },
];
const UsefulCard = [
  {
    href: "",
    name: "Privacy policy",
  },
  {
    href: "",
    name: "Legal",
  },
  {
    href: "",
    name: "FAQ",
  },
  {
    href: "",
    name: "Blogs",
  },
];
const Footer = (props: Props) => {
  return (
    <div className="bg-background pt-14 pb-11">
      <Container className="">
        <>
          <div className="sm:hidden flex flex-col justify-center items-center w-full">
            <h3 className="h3 text-white font-aeonik font-medium text-center">
              Get in Touch
            </h3>
            <p className="text-center text-white/40 font-aeonik mt-2.5">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint.
            </p>

            <div className="mt-8 flex max-w-[345px] ">
              <Input
                placeholder="Enter email"
                name="email"
                className="placeholder:text-white/20 text-white"
              />
              <Button className="!px-4 !py-4 rounded-r-md -ml-0.5 relative z-10 ">
                Subscribe
              </Button>
            </div>
          </div>
        </>

        <section className="flex sm:justify-between justify-center gap-28">
          <>
            <div className="pt-10">
              <h4 className="h4 font-aeonik font-medium text-white">
                Quick link
              </h4>

              <ul className="flex flex-col gap-[22px] pt-6">
                {LinkCard.map((item, i) => (
                  <Link href={item.href}>
                    <li
                      className="text-base xs:text-sm font-normal text-white font-aeonik hover:underline cursor-pointer"
                      key={i}
                    >
                      {item.name}
                    </li>
                  </Link>
                ))}
              </ul>
            </div>
          </>

          <>
            <div className="sm:block hidden">
              <h3 className="h3 text-white font-aeonik font-medium text-center">
                Get in Touch
              </h3>
              <p className="max-w-[313px] text-center text-white/40 font-aeonik mt-2.5">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint.
              </p>

              <div className="mt-8 flex max-w-[345px] ">
                <Input
                  placeholder="Enter email"
                  name="email"
                  className="placeholder:text-white/20 text-white"
                />
                <Button className="!px-4 !py-4 rounded-r-md -ml-1 relative z-10">
                  Subscribe
                </Button>
              </div>
            </div>
          </>

          <>
            <div className="pt-10">
              <h4 className="h4 font-aeonik font-medium text-white">Useful</h4>

              <ul className="flex flex-col gap-[22px] pt-6">
                {UsefulCard.map((item, i) => (
                  <Link href={item.href}>
                    <li
                      className="text-base xs:text-sm font-normal text-white font-aeonik hover:underline cursor-pointer"
                      key={i}
                    >
                      {item.name}
                    </li>
                  </Link>
                ))}
              </ul>
            </div>
          </>
        </section>

        <div className="mt-7 w-full border border-white/10" />
        <div className="flex justify-between pt-6">
          <span className="text-xs text-white">
            Copyright @ All Right Reserved - 2024
          </span>
          <div className="flex items-center gap-4">
            <Twitter className="cursor-pointer" />
            <Youtube className="cursor-pointer" />
            <Facebook className="cursor-pointer" />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
