import { useState } from "react";
import { motion } from "framer-motion";
import HireTalentModal from "./modals/HireTalentModal";
import { fadeInBottom } from "@/helpers/framerMotionHelper";

const categoriesData = [
  {
    title: "Heavy Equipment Operator",
    img: "heavy-equipment-operator.png",
  },
  {
    title: "Engineers",
    img: "engineers.png",
  },
  {
    title: "CNC Operator",
    img: "cnc-operator.png",
  },
  {
    title: "Machinist",
    img: "machinist.png",
  },
  {
    title: "Welder",
    img: "welder.png",
  },
  {
    title: "Construction Worker",
    img: "construction-worker.png",
  },
  {
    title: "Machine Operator",
    img: "machine-operator.png",
  },
  {
    title: "Industrial Painter",
    img: "industrial-painter.png",
  },
  {
    title: "Electrician",
    img: "electrician.png",
  },
  {
    title: "Others",
    img: "others.png",
  },
];

const Categories = () => {
  const [selectedCategory, setSelectedCategory] = useState("");

  return (
    <>
      <section className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24 overflow-hidden">
        <h2 className="text-3xl font-semibold text-center">
          Hire popular Categories
          <span className="bg-gradient-to-br from-primary to-[#FCAE53] text-transparent bg-clip-text">
            {" "}
            Skilled Workers
          </span>
        </h2>
        <div className="grid grid-cols-12 lg:grid-cols-5 gap-5 sm:gap-5 mt-10">
          {categoriesData.map((data, i) => (
            <motion.div
              className="col-span-6 sm:col-span-4 md:col-span-3 lg:col-span-1 bg-secondary rounded-xl cursor-pointer group shadow-sm hover:shadow-none"
              key={i}
              variants={fadeInBottom()}
              initial="hidden"
              whileInView="visible"
              onClick={() => setSelectedCategory(data.title)}
            >
              <HireTalentModal
                triggerClass={"w-full"}
                selectedCategory={selectedCategory}
                modalTrigger={
                  <>
                    <figure className="h-44 overflow-hidden">
                      <img
                        src={`../../../../images/home/categories/${data.img}`}
                        alt={data.title}
                        className="w-full h-full object-cover rounded-t-xl group-hover:scale-110 transition-all ease-in-out"
                      />
                    </figure>
                    <h4 className="my-5 px-2 text-sm sm:text-md text-center text-white group-hover:text-gray-100">
                      {data.title}
                    </h4>
                  </>
                }
              />
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Categories;
