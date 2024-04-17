import { NavLink } from "react-router-dom";
import { FaWhatsapp } from "react-icons/fa";
import { Button } from "../ui/button";
import { Phone } from "lucide-react";

const index = () => {
  return (
    <>
      <header className="bg-white shadow-sm sticky top-0">
        <div className="mx-auto max-w-screen-xl px-4 py-2 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="md:flex md:items-center md:gap-12">
              <NavLink to={"/"}>
                <img src="../../../images/logo-with-name.png" alt="Nanba" />
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
