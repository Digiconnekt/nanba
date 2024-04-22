/* eslint-disable react/no-unescaped-entities */
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay } from "swiper/modules";

const customerSaysData = [
  {
    img: "piyush-mishra.png",
    name: "Piyush Mishra",
    designation: "Buildnetic, Founder",
    title: "Customized Solution",
    message:
      "We were facing a staffing challenge and weren't sure where to turn. Nanba came in with a customized solution and their expertise made the process seamless. We highly recommend them!",
  },
  {
    img: "parthibhan.png",
    name: "Parthibhan",
    designation: "Vice President,DigiConnekt",
    title: "Quality of Hire",
    message:
      "The platform's rigorous screening process ensured that we were presented with highly qualified and experienced technical professionals.",
  },
  {
    img: "saranya.png",
    name: "Saranya",
    designation: "Meriton Technologies,HR",
    title: "I recommend Nanba",
    message:
      "I highly recommend Nanba for both employers and job seekers. They have a great pool of talent and are very efficient in the matching process.",
  },
];

const CustomerSays = () => {
  return (
    <>
      <section className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24 overflow-hidden">
        <h2 className="text-3xl font-semibold text-center text-black">
          What Our
          <span className="bg-gradient-to-br from-primary to-[#FCAE53] text-transparent bg-clip-text">
            {" "}
            Customers Says
          </span>
        </h2>
        <h3 className="text-center text-lg text-gray-400 mt-3 mb-20">
          Don't take our word for it, take theirs!
        </h3>

        <Swiper
          slidesPerView={1}
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
              slidesPerView: 2,
              spaceBetween: 20,
            },
            900: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
          }}
          modules={[Autoplay]}
          className="mySwiper"
        >
          {customerSaysData.map((data, i) => (
            <SwiperSlide key={i}>
              <div className="flex items-center gap-5 mb-5">
                <figure>
                  <img
                    src={`../../../../images/home/customer-says/${data.img}`}
                    alt={data.name}
                  />
                </figure>
                <div className="flex-1">
                  <h4 className="text-lg font-semibold">{data.name}</h4>
                  <p className="text-sm text-gray-500">{data.designation}</p>
                </div>
              </div>
              <h5 className="text-gray-700 text-xl font-semibold mb-3">
                {data.title}
              </h5>
              <p className="text-md text-gray-400">{data.message}</p>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </>
  );
};

export default CustomerSays;
