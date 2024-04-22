const index = ({ title, subTitle }) => {
  return (
    <>
      <section className="bg-[#E6F2F1]">
        <div className="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
          <h2 className="text-5xl font-bold text-center bg-gradient-to-br from-primary to-[#FCAE53] text-transparent bg-clip-text">
            {title}
          </h2>
          <h3 className="max-w-2xl mx-auto text-center text-lg text-gray-500 mt-3">
            {subTitle}
          </h3>
        </div>
      </section>
    </>
  );
};

export default index;
