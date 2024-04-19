const cardsData = [
  {
    icon: "icon-1.png",
    title: "Subit your requirement",
    desc: "Share your specific requirements by clicking on the 'Submit Requirement' option",
  },
  {
    icon: "icon-2.png",
    title: "Get shortlisted candidates",
    desc: "We will carefully pick skilled workers as per your requirement.",
  },
  {
    icon: "icon-3.png",
    title: "Hire Immediately",
    desc: "Select and onboard swiftly.",
  },
];

const HowItWorks = () => {
  return (
    <>
      <section className="bg-gradient-to-r from-[#ED4882] to-[#FFC34B]">
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-24">
          <h2 className="text-3xl font-semibold text-center text-white">
            How It Works
          </h2>
          <h3 className="text-center text-lg text-gray-100 mt-3">
            Hiring skilled workers by simply submitting your request
          </h3>

          <div className="grid grid-cols-12 gap-y-10 md:gap-10 mt-10">
            {cardsData.map((data, i) => (
              <div
                className="col-span-12 sm:col-span-6 lg:col-span-4 rounded-xl p-8 bg-gradient-to-tr from-[#EDEDED] to-[#96E9E3]"
                key={i}
              >
                <figure>
                  <img
                    src={`../../../../images/home/how-it-works/${data.icon}`}
                    alt={data.title}
                  />
                </figure>
                <h4 className="mt-3 mb-2 text-xl font-semibold">
                  {data.title}
                </h4>
                <p className="text-md text-gray-500">{data.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default HowItWorks;
