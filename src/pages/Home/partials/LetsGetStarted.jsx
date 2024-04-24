/* eslint-disable react/no-unescaped-entities */

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { NavLink } from "react-router-dom";
import { fadeInLeft } from "@/helpers/framerMotionHelper";

const LetsGetStarted = () => {
  return (
    <>
      <section className="bg-[#E6F2F1] overflow-hidden">
        <div className="relative mx-auto max-w-screen-xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
          <motion.div
            className="md:max-w-md text-center md:text-left"
            variants={fadeInLeft()}
            initial="hidden"
            whileInView="visible"
          >
            <h2 className="text-3xl font-semibold text-black mb-3">
              Let's Get Started!
            </h2>
            <Button asChild>
              <NavLink to={"/contact"}>Contact Us</NavLink>
            </Button>
          </motion.div>
          <figure className="hidden md:block absolute bottom-0 right-0">
            <img
              src="../../../../images/home/let-get-started.png"
              alt="Contact Us"
              className="w-[550px] lg:w-full"
            />
          </figure>
        </div>
      </section>
    </>
  );
};

export default LetsGetStarted;
