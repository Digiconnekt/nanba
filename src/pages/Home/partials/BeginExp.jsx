import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import HireTalentModal from "./modals/HireTalentModal";
import { fadeInLeft, fadeInRight } from "@/helpers/framerMotionHelper";

const beginExpData = [
  {
    title: "Hire the right Candidate with Nanba Jobs",
    img: "hire-candidate.png",
    bg: "bg-[#E94057]",
    btnText: "Hire A Talent",
    resumeBuilder: false,
  },
  {
    title: "Free Service, We will build your resume",
    img: "build-resume.png",
    bg: "bg-[#FF6F91]",
    btnText: "Reach Out",
    resumeBuilder: true,
  },
];

const BeginExp = () => {
  return (
    <>
      <section className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24 overflow-hidden">
        <h2 className="text-3xl font-semibold text-center">
          Begin your
          <span className="bg-gradient-to-br from-primary to-secondary text-transparent bg-clip-text">
            {" "}
            Nanba Jobs{" "}
          </span>
          Experience Today!
        </h2>
        <h3 className="text-center text-lg text-gray-400 mt-3 max-w-4xl mx-auto">
          Start your journey with us today and discover a world of seamless
          staffing solutions tailored to your needs. From skilled workers to
          project-based hires, Nanba Jobs is your partner in success. Join us
          now and experience the difference!
        </h3>
        <div className="grid grid-cols-12 gap-y-10 sm:gap-10 mt-20">
          {beginExpData.map((data, i) => (
            <motion.div
              className={`col-span-12 md:col-span-6 ${data.bg} p-10 rounded-2xl h-60 relative flex items-center`}
              key={i}
              variants={i === 0 ? fadeInLeft() : fadeInRight()}
              initial="hidden"
              whileInView="visible"
            >
              <div className="lg:max-w-[200px] xl:max-w-[300px] ">
                <h4 className="text-white text-2xl mb-5">{data.title}</h4>
                <HireTalentModal
                  resumeBuilder={data.resumeBuilder}
                  modalTrigger={
                    <Button
                      asChild
                      className="bg-white text-primary hover:bg-white/90"
                    >
                      <span>{data.btnText}</span>
                    </Button>
                  }
                />
              </div>
              <figure className="hidden lg:block absolute right-5 bottom-0">
                <img
                  src={`../../../../images/home/begin-exp/${data.img}`}
                  alt={data.title}
                />
              </figure>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
};

export default BeginExp;
