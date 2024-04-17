import HireTalentModal from "./HireTalentModal";
import SubmitResumeModal from "./SubmitResumeModal";

const Hero = () => {
  return (
    <>
      {" "}
      <section>
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
            <div className="lg:order-last">
              <img
                src="../../../../images/home/hero.png"
                alt="Hero Section"
                className="h-full lg:w-full mx-auto object-cover"
              />
            </div>

            <div className="lg:py-24">
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-br from-primary to-[#FCAE53] text-transparent bg-clip-text">
                Nanba
              </h1>

              <p className="mt-4 text-2xl text-gray-600">
                Quickly connect with skilled workers,
                <br /> ready to work
              </p>

              <div className="mt-5 flex items-center gap-3 sm:gap-5">
                <HireTalentModal />
                <SubmitResumeModal />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
