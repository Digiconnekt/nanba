const companiesData = [
  {
    logo: "1.png",
  },
  {
    logo: "2.png",
  },
  {
    logo: "3.png",
  },
  {
    logo: "4.png",
  },
  {
    logo: "5.png",
  },
  {
    logo: "6.png",
  },
  {
    logo: "7.png",
  },
  {
    logo: "8.png",
  },
  {
    logo: "9.png",
  },
];

const Clients = () => {
  return (
    <>
      <section className="bg-[#E6F2F1] lg:pt-72">
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-24">
          <h2 className="text-3xl font-semibold text-center mb-5">
            Trusted By Top{" "}
            <span className="bg-gradient-to-br from-primary to-[#FCAE53] text-transparent bg-clip-text">
              {" "}
              Companies
            </span>
          </h2>

          <div className="grid grid-cols-12 items-center gap-5 sm:gap-10 mt-10">
            {companiesData.map((data, i) => (
              <div
                className="col-span-6 sm:col-span-4 lg:col-span-3 bg-white h-24 flex items-center justify-center rounded-xl"
                key={i}
              >
                <figure>
                  <img
                    src={`../../../../images/home/companies/${data.logo}`}
                    alt="companies"
                    className="w-full h-full object-cover"
                  />
                </figure>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Clients;
