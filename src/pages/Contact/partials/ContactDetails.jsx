import { Mail, MapPin, Phone } from "lucide-react";
import { NavLink } from "react-router-dom";

const ContactDetails = () => {
  return (
    <>
      <section className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-24">
        <div className="grid grid-cols-12 gap-y-10 sm:gap-10">
          <div className="col-span-12 sm:col-span-6 lg:col-span-4 border p-10 rounded-2xl shadow-sm flex flex-col justify-center">
            <div className="bg-[#00BAC6] text-white mx-auto w-16 h-16 flex items-center justify-center rounded-full mb-5">
              <MapPin />
            </div>
            <p className="text-center text-gray-500">
              N0 40, First cross, Thangammal Nagar, Ganapathy, Coimbatore -
              641006
            </p>
          </div>
          <div className="col-span-12 sm:col-span-6 lg:col-span-4 border p-10 rounded-2xl shadow-sm flex flex-col justify-center">
            <div className="bg-[#00BAC6] text-white mx-auto w-16 h-16 flex items-center justify-center rounded-full mb-5">
              <Phone />
            </div>
            <NavLink
              to={"tel:+4934090020"}
              className="block text-center text-gray-500 hover:text-primary"
            >
              +49 340 90020
            </NavLink>
          </div>
          <div className="col-span-12 sm:col-span-6 lg:col-span-4 border p-10 rounded-2xl shadow-sm flex flex-col justify-center">
            <div className="bg-[#00BAC6] text-white mx-auto w-16 h-16 flex items-center justify-center rounded-full mb-5">
              <Mail />
            </div>
            <NavLink
              to={"mailto:movin@nanba.co.in"}
              className="block text-center text-gray-500 hover:text-primary"
            >
              movin@nanba.co.in
            </NavLink>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactDetails;
