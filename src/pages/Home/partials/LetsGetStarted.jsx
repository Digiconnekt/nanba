/* eslint-disable react/no-unescaped-entities */

import { Button } from "@/components/ui/button";
import { NavLink } from "react-router-dom";

const LetsGetStarted = () => {
  return (
    <>
      <section className="bg-[#E6F2F1]">
        <div className="relative mx-auto max-w-screen-xl px-4 pt-8 sm:px-6 sm:pt-12 lg:px-8 lg:pt-24 pb-12 md:pb-56 lg:pb-24">
          <div className="max-w-lg">
            <h2 className="text-3xl font-semibold text-black">
              Let's Get Started!
            </h2>
            <h3 className="text-lg text-gray-500 my-3">
              Nanba caters to a wider range of workforce needs than typical
              recruitment platforms, offering solutions for full-time,
            </h3>
            <Button asChild>
              <NavLink to={"/contact"}>Contact Us</NavLink>
            </Button>
          </div>
          <figure className="hidden md:block absolute bottom-0 right-0">
            <img
              src="../../../../images/home/let-get-started.png"
              alt="Contact Us"
            />
          </figure>
        </div>
      </section>
    </>
  );
};

export default LetsGetStarted;
