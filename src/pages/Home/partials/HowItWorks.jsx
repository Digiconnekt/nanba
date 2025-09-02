import { fadeInLeft, fadeInRight } from "@/helpers/framerMotionHelper";
import { motion } from "framer-motion";

const cardsData = [
  {
    icon: "icon-1.png",
    title: "Submit your requirement",
    desc: "Share your specific requirements by clicking on the 'Submit Requirement' option",
  },
  {
    icon: "icon-2.png",
    title: "Get shortlisted candidates",
    desc: "We will carefully pick skilled workers as per your requirement.",
  },
  {
    icon: "icon-3.png",
    title: "Hire Immediately",
    desc: "Select and onboard swiftly.",
  },
];

const HowItWorks = () => {
  return (
    <>
      <section className="bg-gradient-to-r from-primary to-secondary overflow-hidden">
        <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
          <h2 className="text-3xl font-semibold text-center text-white">
            How It Works
          </h2>
          <h3 className="text-center text-lg text-gray-100 mt-3">
            Hiring skilled workers by simply submitting your request
          </h3>

          <div className="grid grid-cols-12 gap-y-10 sm:gap-10 mt-10">
            {cardsData.map((data, i) => (
              <motion.div
                className="col-span-12 sm:col-span-6 lg:col-span-4 rounded-xl p-8 bg-gradient-to-tr from-[#EDEDED] to-[#96E9E3]"
                key={i}
                variants={i === 0 ? fadeInLeft() : i === 2 && fadeInRight()}
                initial="hidden"
                whileInView="visible"
              >
                <figure>
                  <img
                    src={`../../../../images/home/how-it-works/${data.icon}`}
                    alt={data.title}
                  />
                </figure>
                <h4 className="mt-3 mb-2 text-xl font-semibold">
                  {data.title}
                </h4>
                <p className="text-md text-gray-500">{data.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default HowItWorks;
