import ImageComponent from "@/components/common/ImageComponent";
import React from "react";

const BookCards = [
  {
    num: "1",
    name: " Provide the best choice for Event.",
    dec: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat.",
  },
  {
    num: "2",
    name: "Low price with Best Quality",
    dec: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat.",
  },
  {
    num: "3",
    name: "Restaurant Service",
    dec: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat.",
  },
];

const BookHere = () => {
  return (
    <>
      <div className="lg:pb-[100px] md:pb-20 pb-10 relative px-4">
        <h2 className="h2 text-center">
          Why You Should <span className="text-primary">Book Here</span>
        </h2>
        <p className="font-aeonik font-normal max-w-[443px] mt-2 text-center mx-auto text-[#000000]">
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat.
        </p>

        <section className="xl:pl-[150px] mt-7 flex justify-between items-center lg:flex-nowrap flex-wrap">
          <>
            <div className="flex flex-col gap-11 xs:gap-8">
              {BookCards.map((item, i) => (
                <div className="" key={i}>
                  <div className="w-[50px] h-[50px] xs:w-10 xs:h-10 rounded-full bg-primary flex justify-center items-center">
                    <h3 className="h4 text-white">{item.num}</h3>
                  </div>

                  <h4 className="h4 text-secondary mt-3">{item.name}</h4>
                  <p className="font-aeonik font-normal xl:max-w-[443px] lg:max-w-[360px] mt-2 text-secondary">
                    {item.dec}
                  </p>
                </div>
              ))}
            </div>
          </>

          <div className="lg:w-auto w-full flex justify-center lg:py-0 py-12">
            <div className="bg-[url('/assets/images/cattering.png')] bg-cover lg:w-[482px] md:w-[400px] w-[350px] xs:w-[300px] lg:h-[636px] md:h-[590px] h-[500px] xs:h-[450px] relative">
              <div className="py-2.5 md:px-5 px-2 bg-white book-shadow absolute left-1/2 -translate-x-1/2 -top-8 rounded-md">
                <div className="flex items-center gap-2">
                  <ImageComponent
                    src={"/assets/images/zain.png"}
                    width={45}
                    height={45}
                  />
                  <div>
                    <p className="font-bold text-secondary">Zain Saeed</p>
                    <p className="!text-xs text-secondary-foreground whitespace-nowrap">
                      Give Rating{" "}
                      <span className="text-primary font-medium">4.5</span>
                    </p>
                  </div>
                </div>
              </div>

              <div className="md:py-3.5 py-2.5 md:pl-7 md:pr-5 px-2 bg-white book-shadow absolute top-16 sm:-left-1/2 left-1/2 -translate-x-1/2 sm:translate-x-1/2 rounded-md">
                <div className="flex items-center gap-2">
                  <ImageComponent
                    src={"/assets/images/salman.png"}
                    width={58}
                    height={58}
                    figClassName="md:w-[58px] w-11 md:h-[58px] h-11"
                  />
                  <div>
                    <h4 className="h5 sm:text-base text-sm text-secondary">
                      Salman Hanif
                    </h4>
                    <p className="lg:!text-lg text-secondary-foreground whitespace-nowrap">
                      Give Rating{" "}
                      <span className="text-primary font-medium">4.2</span>
                    </p>
                  </div>
                </div>
              </div>

              <div className="hidden md:block absolute bottom-44 xl:-left-[233px] -left-[160px]">
                <ImageComponent
                  src={"/assets/images/dinnerhall.png"}
                  fill
                  figClassName="xl:w-[467px] xl:h-[233px] w-[367px] h-[180px]"
                />
              </div>

              <div className="md:py-3.5 py-2.5 md:pl-7 md:pr-5 px-2 bg-white book-shadow absolute -bottom-8 left-1/2 -translate-x-1/2 rounded-md">
                <div className="flex items-center gap-2">
                  <ImageComponent
                    src={"/assets/images/rida.png"}
                    width={58}
                    height={58}
                    figClassName="md:w-[58px] w-11 md:h-[58px] h-11"
                  />
                  <div>
                    <h4 className="h5 sm:text-base text-sm text-secondary">
                      Rida Naeem
                    </h4>
                    <p className="lg:!text-lg text-secondary-foreground whitespace-nowrap">
                      Give Rating{" "}
                      <span className="text-primary font-medium">4.8</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default BookHere;
