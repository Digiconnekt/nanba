import { fadeInBottom } from "@/helpers/framerMotionHelper";
import { motion } from "framer-motion";

const industriesData = [
  {
    title: "Construction & Engineering",
    icon: "construction-&-engineering.png",
  },
  {
    title: "Oil & Gas",
    icon: "oil-&-gas.png",
  },
  {
    title: "Renewable Energy",
    icon: "renewable-energy.png",
  },
  {
    title: "Textiles, Apparels & Accessories",
    icon: "textiles-apparels-&-accessories.png",
  },
  {
    title: "Hospitality",
    icon: "hospitality.png",
  },
  {
    title: "Manufacturing",
    icon: "manufacturing.png",
  },
  {
    title: "Retails",
    icon: "retails.png",
  },
  {
    title: "Healthcare",
    icon: "healthcare.png",
  },
];

const Industries = () => {
  return (
    <>
      <section className="bg-[#E6F2F1] overflow-hidden">
        <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
          <h2 className="text-3xl font-semibold text-center">
            Popular
            <span className="bg-gradient-to-br from-primary to-[#FCAE53] text-transparent bg-clip-text">
              {" "}
              Industries
            </span>
          </h2>
          <div className="grid grid-cols-12 gap-y-10 sm:gap-10 mt-10">
            {industriesData.map((data, i) => (
              <motion.div
                className="col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-3 border rounded-xl bg-white"
                key={i}
                variants={fadeInBottom()}
                initial="hidden"
                whileInView="visible"
              >
                <div className="flex items-center p-5">
                  <figure className="">
                    <img
                      src={`../../../../images/home/industries/${data.icon}`}
                      alt={data.title}
                      className="w-full h-full"
                    />
                  </figure>
                  <h4 className="flex-1 text-center text-md text-black">
                    {data.title}
                  </h4>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Industries;
