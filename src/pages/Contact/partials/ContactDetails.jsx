import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import { Mail, MapPin, Phone } from "lucide-react";
import { fadeInBottom } from "@/helpers/framerMotionHelper";

const ContactDetails = () => {
  return (
    <>
      <section className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-24 overflow-hidden">
        <div className="grid grid-cols-12 gap-y-10 sm:gap-10">
          <motion.div
            className="col-span-12 sm:col-span-6 lg:col-span-4 border p-10 rounded-2xl shadow-sm flex flex-col justify-center"
            variants={fadeInBottom()}
            initial="hidden"
            whileInView="visible"
          >
            <div className="bg-primary text-white mx-auto w-16 h-16 flex items-center justify-center rounded-full mb-5">
              <MapPin />
            </div>
            <p className="text-center text-gray-500">
              N0 40, First cross, Thangammal Nagar, Ganapathy, Coimbatore -
              641006
            </p>
          </motion.div>
          <motion.div
            className="col-span-12 sm:col-span-6 lg:col-span-4 border p-10 rounded-2xl shadow-sm flex flex-col justify-center"
            variants={fadeInBottom()}
            initial="hidden"
            whileInView="visible"
          >
            <div className="bg-primary text-white mx-auto w-16 h-16 flex items-center justify-center rounded-full mb-5">
              <Phone />
            </div>
            <NavLink
              to={"tel:+918148466924"}
              className="block text-center text-gray-500 hover:text-primary"
            >
              +91 81484 66924
            </NavLink>
          </motion.div>
          <motion.div
            className="col-span-12 sm:col-span-6 lg:col-span-4 border p-10 rounded-2xl shadow-sm flex flex-col justify-center"
            variants={fadeInBottom()}
            initial="hidden"
            whileInView="visible"
          >
            <div className="bg-primary text-white mx-auto w-16 h-16 flex items-center justify-center rounded-full mb-5">
              <Mail />
            </div>
            <NavLink
              to={"mailto:movin@nanba.co.in"}
              className="block text-center text-gray-500 hover:text-primary"
            >
              movin@nanba.co.in
            </NavLink>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default ContactDetails;
