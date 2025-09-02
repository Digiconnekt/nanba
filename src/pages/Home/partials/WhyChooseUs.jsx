import { fadeInLeft, fadeInRight } from "@/helpers/framerMotionHelper";
import { motion } from "framer-motion";
import { Settings } from "lucide-react";

const whyChooseUsData = [
  {
    title: "For Employers",
    desc: "Customized staffing solutions to meet unique business needs and objectives.",
  },
  {
    title: "For Employees",
    desc: "Dedicated support and guidance throughout the hiring journey for a smooth experience.",
  },
];

const WhyChooseUs = () => {
  return (
    <>
      <section className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24 overflow-hidden">
        <div className="grid grid-cols-12 gap-y-10 items-center md:gap-10">
          <motion.figure
            className="col-span-12 md:col-span-6 lg:col-span-4 mx-auto"
            variants={fadeInLeft()}
            initial="hidden"
            whileInView="visible"
          >
            <img
              src={`../../../../images/home/why-choose-us.jpg`}
              alt="Why Choose Us"
            />
          </motion.figure>
          <motion.div
            className="col-span-12 md:col-span-6 lg:col-span-8"
            variants={fadeInRight()}
            initial="hidden"
            whileInView="visible"
          >
            <h2 className="text-3xl font-semibold mb-5">
              Why{" "}
              <span className="bg-gradient-to-br from-primary to-secondary text-transparent bg-clip-text">
                {" "}
                Choose Us
              </span>
            </h2>
            <h3 className="text-lg text-gray-400">
              Nanba Jobs efficiently connects you to a network of pre-vetted,
              highly skilled professionals.Here are just a few reasons why Nanba
              stands out
            </h3>
            <ul className="mt-5">
              {whyChooseUsData.map((data, i) => (
                <li key={i} className="flex gap-x-2 mb-5">
                  <Settings className="text-primary mt-1" size={24} />
                  <div className="flex-1">
                    <p className="text-lg font-semibold">{data.title}</p>
                    <p className="text-md text-gray-400">{data.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default WhyChooseUs;
