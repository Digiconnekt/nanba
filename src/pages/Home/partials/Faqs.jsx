import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { fadeInLeft, fadeInRight } from "@/helpers/framerMotionHelper";

const faqsData = [
  {
    que: "What types of workers can I hire through Nanba?",
    ans: "Nanba caters to a wide range of industries and job roles, including engineers, welders, machine operators, electricians, and more. Whether you're in construction, manufacturing, hospitality, or any other sector, Nanba has the talent you need.",
  },
  {
    que: "Is Nanba only for businesses?",
    ans: "While Nanba primarily serves businesses looking to hire skilled workers, it also benefits workers by providing them with verified opportunities from reputable businesses. This ensures greater security and peace of mind throughout the hiring process.",
  },
  {
    que: "How much does it cost to use Nanba?",
    ans: "Nanba offers cost-effective solutions for hiring, helping you save on recruitment and advertising expenses. Our pricing plans are flexible and tailored to suit your specific hiring needs. Contact us to learn more about our pricing options.",
  },
  {
    que: "Can I see examples of Nanba's clients?",
    ans: "Yes, we're proud to have served a diverse range of clients across various industries. You can view a list of Nanba's clients on our website to see the breadth of our expertise and success in connecting businesses with skilled workers.",
  },
  {
    que: "How do I get started with Nanba?",
    ans: "Getting started with Nanba is easy. Simply visit our website, submit your hiring requirements, and let us take care of the rest. Our user-friendly platform ensures a seamless experience from start to finish.",
  },
];

const Faqs = () => {
  return (
    <>
      <section className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24 overflow-hidden">
        <div className="grid grid-cols-12 items-center gap-y-10 md:gap-10">
          <motion.div
            className="col-span-12 lg:col-span-6"
            variants={fadeInLeft()}
            initial="hidden"
            whileInView="visible"
          >
            <h2 className="text-3xl font-semibold mb-5">
              Frequently Asked{" "}
              <span className="bg-gradient-to-br from-primary to-[#FCAE53] text-transparent bg-clip-text">
                {" "}
                Questions
              </span>
            </h2>
            <div className="mt-5">
              <Accordion type="single" collapsible className="w-full">
                {faqsData.map((data, i) => (
                  <AccordionItem value={i + 1} key={i}>
                    <AccordionTrigger>{data.que}</AccordionTrigger>
                    <AccordionContent>{data.ans}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </motion.div>
          <motion.figure
            className="col-span-12 lg:col-span-6 mx-auto"
            variants={fadeInRight()}
            initial="hidden"
            whileInView="visible"
          >
            <img src="../../../../images/home/faq.png" alt="Faqs" />
          </motion.figure>
        </div>
      </section>
    </>
  );
};

export default Faqs;
