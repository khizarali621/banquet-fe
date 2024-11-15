import { Container } from "@/components/common";
import ImageComponent from "@/components/common/ImageComponent";
import React from "react";

const Halls = () => {
  return (
    <>
      <div className="lg:pb-[100px] md:pb-20 pb-10 relative">
        <img
          src="/assets/images/hallbg.png"
          alt=""
          className="absolute left-0  -top-20 -translate-y-1/2"
        />
        <Container className="">
          <h6 className="md:text-2xl sm:text-xl text-lg text-[#A9A9A9] text-center">
            Our Halls
          </h6>
          <h2 className="h2 text-center mt-2">
            A World Of <span className="text-primary">Choice</span>
          </h2>
          <p className="font-aeonik font-normal max-w-[443px] mt-2 text-center mx-auto text-[#000000]/50">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat.
          </p>

          <>
            <section className="mt-11 xs:mt-8 md:flex lg:gap-10 md:gap-6 grid grid-cols-2 gap-5">
              <>
                <div className="flex flex-col lg:gap-9 md:gap-5 gap-3">
                  <div>
                    <ImageComponent
                      src={"/assets/images/normalhall.png"}
                      width={320}
                      height={222}
                    />
                    <h4 className="h4 lg:text-[22px] text-secondary lg:mt-3.5 mt-2.5">
                      Normal Hall
                    </h4>
                  </div>

                  <div>
                    <ImageComponent
                      src={"/assets/images/birthdayhall.png"}
                      width={320}
                      height={222}
                    />
                    <h4 className="h4 lg:text-[22px] text-secondary lg:mt-3.5 mt-2.5">
                      Birthday Hall
                    </h4>
                  </div>
                </div>
              </>

              <>
                <div className="md:block hidden">
                  <ImageComponent
                    src={"/assets/images/luxuryhall.png"}
                    width={420}
                    height={548}
                  />
                  <h4 className="h4 lg:text-[22px] text-secondary lg:mt-3.5 mt-2.5">
                    Luxury Hall
                  </h4>
                </div>
              </>

              <>
                <div className="flex flex-col lg:gap-9 md:gap-5 gap-3">
                  <div>
                    <ImageComponent
                      src={"/assets/images/bigevents.png"}
                      width={320}
                      height={222}
                    />
                    <h4 className="h4 lg:text-[22px] text-secondary lg:mt-3.5 mt-2.5">
                      Big Events
                    </h4>
                  </div>

                  <div className="">
                    <ImageComponent
                      src={"/assets/images/corporatehall.png"}
                      width={320}
                      height={222}
                    />
                    <h4 className="h4 lg:text-[22px] text-secondary lg:mt-3.5 mt-2.5">
                      Corporate Events
                    </h4>
                  </div>
                </div>
              </>
            </section>
            <>
              <div className="md:hidden block mt-5">
                <ImageComponent
                  src={"/assets/images/luxuryhall.png"}
                  width={420}
                  height={548}
                  figClassName="md:w-[420px] w-full"
                />
                <h4 className="h4 lg:text-[22px] text-secondary lg:mt-3.5 mt-2.5">
                  Luxury Hall
                </h4>
              </div>
            </>
          </>
        </Container>
      </div>
    </>
  );
};

export default Halls;
