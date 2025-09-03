/* eslint-disable react/no-unescaped-entities */
import { motion } from "framer-motion";
import { CircleCheck } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { fadeInBottom } from "@/helpers/framerMotionHelper";

const employersData = [
  {
    title: "Cater to specific needs",
    desc: "Nanba Jobs caters to a wider range of workforce needs than typical recruitment platforms, offering solutions for full-time, seasonal, temporary, and project-based hires. This allows businesses to address staffing fluctuations and seasonal demands more effectively.",
  },
  {
    title: "Focus on fit, not just skills",
    desc: "Nanba's Jobs pre-vetting process goes beyond just skills, ensuring a good cultural fit between workers and businesses. This can lead to increased worker satisfaction, improved retention, and a more positive work environment.",
  },
  {
    title: "Reduced Costs",
    desc: "Save on recruitment and advertising expenses by utilizing Nanba's Jobs flexible platform.",
  },
];

const skilledWorkersData = [
  {
    title: "Flexibility",
    desc: "Nanba Jobs offers flexible employment options, including temporary, part-time, full-time, and project-based roles, allowing employees to choose work arrangements that suit their preferences and lifestyle.",
  },
  {
    title: "Professional Growth",
    desc: "Employees can enhance their skills and experience by working on diverse projects and assignments through Nanba Jobs, fostering continuous professional growth and development.",
  },
  {
    title: "Community Support",
    desc: "Nanba Jobs fosters a supportive online community where skilled professionals can connect, share experiences, and build meaningful connections.",
  },
];

const Benefits = () => {
  return (
    <>
      <section className="lg:relative">
        {/* engineer bg */}
        <figure className="hidden lg:block h-[600px]">
          <img
            src="../../../../images/home/benefits/benefits-bg.jpg"
            alt="Enginner bg"
            className="w-full h-full object-cover"
          />
        </figure>

        {/* benefits */}
        <div className="overflow-hidden">
          <motion.div
            className="lg:absolute -bottom-80 left-0 right-0 lg:px-10 z-30 pb-16 sm:pb-20 lg:pb-0"
            variants={fadeInBottom()}
            initial="hidden"
            whileInView="visible"
          >
            <div className="bg-white rounded-2xl max-w-5xl xl:max-w-screen-xl mx-auto p-10">
              <h2 className="text-3xl font-semibold text-center mb-5 text-neutral-dark">
                Benefits Of
                <span className="bg-brand-gradient text-transparent bg-clip-text">
                  {" "}
                  Nanba Jobs
                </span>
              </h2>
              <Tabs defaultValue="for-employers" className="w-full">
                <TabsList className="grid w-full grid-cols-2 mb-5">
                  <TabsTrigger value="for-employers">For Employers</TabsTrigger>
                  <TabsTrigger value="for-skilled-workers">
                    For Skilled Workers
                  </TabsTrigger>
                </TabsList>
                <TabsContent value="for-employers">
                  <div className="grid grid-cols-12 lg:gap-10 items-center border rounded-xl p-5 sm:p-10">
                    <ul className="col-span-12 lg:col-span-6">
                      {employersData.map((data, i) => (
                        <li key={i} className="mb-5">
                          <div className="flex items-center gap-x-2 mb-2">
                            <CircleCheck className="text-primary" size={22} />
                            <p className="text-lg font-semibold text-neutral-dark">
                              {data.title}
                            </p>
                          </div>
                          <p className="text-md text-neutral-medium">
                            {data.desc}
                          </p>
                        </li>
                      ))}
                    </ul>
                    <figure className="col-span-12 lg:col-span-6 mx-auto">
                      <img
                        src={`../../../../images/home/benefits/employers.jpg`}
                        alt="Employers"
                      />
                    </figure>
                  </div>
                </TabsContent>
                <TabsContent value="for-skilled-workers">
                  <div className="grid grid-cols-12 lg:gap-10 items-center border rounded-xl p-5 sm:p-10">
                    <ul className="col-span-12 lg:col-span-6">
                      {skilledWorkersData.map((data, i) => (
                        <li key={i} className="mb-5">
                          <div className="flex items-center gap-x-2 mb-2">
                            <CircleCheck className="text-primary" size={22} />
                            <p className="text-lg font-semibold text-neutral-dark">
                              {data.title}
                            </p>
                          </div>
                          <p className="text-md text-neutral-medium">
                            {data.desc}
                          </p>
                        </li>
                      ))}
                    </ul>
                    <figure className="col-span-12 lg:col-span-6 mx-auto">
                      <img
                        src={`../../../../images/home/benefits/skilled-workers.jpg`}
                        alt="Skilled Workers"
                      />
                    </figure>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Benefits;
