import { NavLink } from "react-router-dom";
import { FaWhatsapp } from "react-icons/fa";
import { Button } from "../ui/button";
import { Phone } from "lucide-react";

const index = () => {
  return (
    <>
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="mx-auto max-w-screen-xl px-4 py-2 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="md:flex md:items-center md:gap-12">
              <NavLink to={"/"} className={"flex items-center"}>
                <img src="../../../images/logo.png" alt="Nanba" />
                <span className="text-4xl mt-1 font-semibold bg-gradient-to-br from-primary to-[#FCAE53] text-transparent bg-clip-text">
                  Nanba
                </span>
              </NavLink>
            </div>

            <div className="flex items-center gap-4">
              <div className="sm:flex sm:gap-4">
                <Button variant="outline" asChild className="hidden sm:block">
                  <NavLink to={"tel:+9999999999"} target="_blank">
                    <Phone size={18} />
                  </NavLink>
                </Button>
                <Button variant="outline" asChild className="hidden sm:block">
                  <NavLink to={"https://wa.me/+9999999999"} target="_blank">
                    <FaWhatsapp size={20} />
                  </NavLink>
                </Button>
                <Button variant="default" asChild>
                  <NavLink to={"/contact"}>Get In Touch</NavLink>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default index;
