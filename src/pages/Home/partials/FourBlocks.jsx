import { motion } from "framer-motion";
import { MoveRight } from "lucide-react";
import HireTalentModal from "./modals/HireTalentModal";
import { fadeInBottom } from "@/helpers/framerMotionHelper";
import { useState } from "react";

const FourBlocksData = [
  {
    icon: "icon-1.png",
    title: "Hire for Fulltime",
    desc: "Access a vast pool of skilled professionals vetted for their expertise and experience in various industries.",
  },
  {
    icon: "icon-2.png",
    title: "Seasonal Festive Hire",
    desc: "Scale your workforce as per the fluctuating demands of Indian festivals, ensuring optimal staffing levels without the hassle.",
  },
  {
    icon: "icon-3.png",
    title: "Swift Hire",
    desc: "Minimize disruptions caused by staff shortages by swiftly filling in gaps with our flexible cover staff solutions, ensuring business continuity.",
  },
  {
    icon: "icon-4.png",
    title: "Projects based Hires",
    desc: "Whether you're launching a new outlet, expanding operations, or undertaking a special project, Nanba provides tailored manpower solutions.",
  },
];

const FourBlocks = () => {
  const [selectedCategory, setSelectedCategory] = useState("");

  return (
    <>
      <section className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24 overflow-hidden">
        <div className="grid grid-cols-12 gap-y-10 sm:gap-10">
          {FourBlocksData.map((data, i) => (
            <motion.div
              className="col-span-12 sm:col-span-6 lg:col-span-3 flex flex-col justify-between"
              key={i}
              variants={fadeInBottom()}
              initial="hidden"
              whileInView="visible"
            >
              <div>
                <figure>
                  <img
                    src={`../../../../images/home/four-blocks/${data.icon}`}
                    alt={data.title}
                  />
                </figure>
                <h2 className="mt-3 mb-2 text-xl font-semibold">
                  {data.title}
                </h2>
                <p className="text-md text-gray-500">{data.desc}</p>
              </div>
              <HireTalentModal
                selectedCategory={selectedCategory}
                modalTrigger={
                  <p
                    className="mt-3 text-secondary text-sm flex items-center hover:font-semibold transition-all ease-in-out"
                    onClick={() => setSelectedCategory(data.title)}
                  >
                    Submit requirement
                    <MoveRight size={18} className="ms-2" />
                  </p>
                }
              />
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
};

export default FourBlocks;
