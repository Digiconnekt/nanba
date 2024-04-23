import { NavLink } from "react-router-dom";
import { Facebook, Instagram, Linkedin, Youtube } from "lucide-react";

const socialMediaLinks = [
  {
    icon: Facebook,
    link: "https://www.facebook.com/profile.php?id=61559012691667",
  },
  {
    icon: Instagram,
    link: "https://www.instagram.com/nanbajobs?utm_source=qr&igsh=cTNqeW5vcXFrN3h0",
  },
  {
    icon: Linkedin,
    link: "https://www.linkedin.com/company/nanba.co.in/",
  },
  {
    icon: Youtube,
    link: "https://youtube.com/@NANBA-fz8kn?si=_gmWpnV4wh5hib6p",
  },
];

const supportLinks = [
  {
    name: "Privacy Policy",
    link: "/privacy-policy",
  },
];

const index = () => {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <footer className="bg-[#F8FAFC]">
        <div className="mx-auto max-w-screen-xl px-4 pb-6 pt-16 sm:px-6 lg:px-8 lg:pt-24">
          <div className="grid grid-cols-12 gap-y-8 md:gap-8">
            <div className="col-span-12 md:col-span-12 lg:col-span-6">
              <div className="flex justify-center text-teal-600 sm:justify-start">
                <NavLink to={"/"} className={"flex items-center"}>
                  <img src="../../../images/logo.png" alt="Nanba" />
                  <span className="text-4xl mt-1 font-semibold bg-gradient-to-br from-primary to-[#FCAE53] text-transparent bg-clip-text">
                    Nanba
                  </span>
                </NavLink>
              </div>

              <p className="mt-6 sm:max-w-lg text-center leading-relaxed text-gray-500 sm:text-left">
                Follow us on social media
              </p>

              <ul className="mt-3 flex justify-center gap-6 sm:justify-start">
                {socialMediaLinks.map((link, i) => (
                  <li key={i}>
                    <NavLink
                      to={link.link}
                      rel="noreferrer"
                      target="_blank"
                      className="text-primary transition hover:text-primary/75"
                    >
                      <link.icon />
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>

            <div className="col-span-12 sm:col-span-6 lg:col-span-3">
              <div className="text-center sm:text-left">
                <p className="text-lg font-medium text-gray-900">Support</p>

                <ul className="mt-8 space-y-4 text-md">
                  {supportLinks.map((link, i) => (
                    <li key={i}>
                      <NavLink
                        className="text-gray-700 transition hover:text-primary"
                        to={link.link}
                      >
                        {link.name}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="col-span-12 sm:col-span-6 lg:col-span-3">
              <div className="text-center sm:text-left">
                <p className="text-lg font-medium text-gray-900">Address</p>

                <p className="mt-8 space-y-4 text-md">
                  N0 40, First cross, Thangammal Nagar, Ganapathy, Coimbatore -
                  641006
                </p>
              </div>
            </div>
          </div>

          <div className="mt-12 border-t border-gray-100 pt-6">
            <div className="text-center sm:flex sm:justify-between sm:text-left">
              <p className="text-sm text-gray-500">
                <span className="block sm:inline">All rights reserved.</span>
              </p>

              <p className="mt-4 text-sm text-gray-500 sm:order-first sm:mt-0">
                &copy; {currentYear} Nanba
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default index;
