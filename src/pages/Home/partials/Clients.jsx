import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay } from "swiper/modules";

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
      <section className="bg-[#E6F2F1] lg:pt-72 overflow-hidden">
        <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
          <h2 className="text-3xl font-semibold text-center mb-5">
            Trusted By Top{" "}
            <span className="bg-gradient-to-br from-primary to-secondary text-transparent bg-clip-text">
              {" "}
              Companies
            </span>
          </h2>

          <Swiper
            slidesPerView={2}
            spaceBetween={10}
            pagination={{
              clickable: true,
            }}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            breakpoints={{
              640: {
                slidesPerView: 4,
                spaceBetween: 20,
              },
              900: {
                slidesPerView: 5,
                spaceBetween: 40,
              },
            }}
            modules={[Autoplay]}
            className="mySwiper mt-10"
          >
            {companiesData.map((data, i) => (
              <SwiperSlide className="" key={i}>
                <div className="bg-white h-24 flex items-center justify-center rounded-xl">
                  <figure>
                    <img
                      src={`../../../../images/home/companies/${data.logo}`}
                      alt="companies"
                      className="w-full h-full object-cover"
                    />
                  </figure>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    </>
  );
};

export default Clients;
