import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import HireTalentModal from "./modals/HireTalentModal";
import SubmitResumeModal from "./modals/SubmitResumeModal";
import { fadeInLeft, fadeInRight } from "../../../helpers/framerMotionHelper";

const hireTalentModalTrigger = (
  <>
    <div className="flex items-center gap-2 justify-center">
      <span className="block text-xl font-caveat text-center mb-1">
        for employer
      </span>
      <img
        src="../../../../images/home/curved-arrow.png"
        alt="Arrow"
        className="w-5 h-3"
      />
    </div>
    <span>
      <Button asChild>
        <span>Hire A Talent</span>
      </Button>
    </span>
  </>
);

const Hero = () => {
  return (
    <>
      <section>
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16 overflow-hidden">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
            <motion.div
              className="lg:order-last"
              variants={fadeInRight()}
              initial="hidden"
              whileInView="visible"
            >
              <img
                src="../../../../images/home/hero.png"
                alt="Hero Section"
                className="h-full lg:w-full mx-auto object-cover"
              />
            </motion.div>

            <motion.div
              className="lg:py-24"
              variants={fadeInLeft()}
              initial="hidden"
              whileInView="visible"
            >
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-br from-primary to-[#FCAE53] text-transparent bg-clip-text">
                Nanba
              </h1>

              <p className="mt-4 text-2xl text-gray-600">
                Quickly connect with skilled workers,
                <br /> ready to work
              </p>

              <div className="mt-5 flex items-center gap-3 sm:gap-5">
                <HireTalentModal modalTrigger={hireTalentModalTrigger} />
                <SubmitResumeModal />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
