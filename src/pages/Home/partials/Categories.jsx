import { useState } from "react";
import HireTalentModal from "./modals/HireTalentModal";

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
      <section className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-24">
        <h2 className="text-3xl font-semibold text-center">
          Hire popular Categories
          <span className="bg-gradient-to-br from-primary to-[#FCAE53] text-transparent bg-clip-text">
            {" "}
            Skilled Workers
          </span>
        </h2>
        <div className="grid grid-cols-12 gap-y-10 sm:gap-10 mt-10">
          {categoriesData.map((data, i) => (
            <div
              className="col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-3 bg-secondary rounded-xl cursor-pointer"
              key={i}
              onClick={() => setSelectedCategory(data.title)}
            >
              <HireTalentModal
                triggerClass={"w-full"}
                selectedCategory={selectedCategory}
                modalTrigger={
                  <>
                    <figure className="h-60">
                      <img
                        src={`../../../../images/home/categories/${data.img}`}
                        alt={data.title}
                        className="w-full h-full object-cover rounded-t-xl"
                      />
                    </figure>
                    <h2 className="my-5 px-2 text-md text-center text-white">
                      {data.title}
                    </h2>
                  </>
                }
              />
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Categories;