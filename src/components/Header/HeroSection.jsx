import Frame from "../../assets/images/frame.png";

const HeroSection = () => {
  return (
    <>
      <section className="pb-4 md:pb-6 lg:pb-8 pt-16 sm:pt-30  md:mt-6">
        <div className="container lg:px-20">
          <div className="grid items-center gap-6 md:grid-cols-2">
            <div className="flex justify-center md:order-2">
              <img
                className="md:w-full w-2/5 lg:w-auto"
                src={Frame}
                width="240"
                height="160"
                alt="frame"
              />
            </div>

            <div>
              <h1 className="text-3xl md:text-5xl font-bold leading-none text-[#F5BF42] lg:text-6xl text-center md:text-left">
                Todo App
              </h1>
              <p className="text-lg my-4 opacity-60 text-justify">
                Effortlessly Organize, Prioritize, and Conquer Tasks with Todo
                App - Your Personal Productivity Ally for Seamless Goal
                Achievement and Stress-Free Task Management.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
