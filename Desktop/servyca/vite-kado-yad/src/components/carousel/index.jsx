import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { Link } from "react-router-dom";
import "swiper/swiper-bundle.css";
import APP_CONFIG from "../../@core/constants/app-config";

import { ArrowRight } from "react-bootstrap-icons";

function Carousel({ store, data }) {
  console.log("data", data);
  const myData = data?.images ? data?.images : data;
  return (
    <div className={`${store ? "" : "p-5 pb-0"} container relative`}>
      <Swiper
        spaceBetween={4}
        slidesPerView={1}
        loop={true}
        pagination={{
          clickable: true,
          dynamicBullets: true,
          renderBullet: (index, className) =>
            `<span class="${className} bg-primary"></span>`,
        }}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Pagination]}
        className={`h-[17rem] w-full relative`}
      >
        {myData?.map((item, index) => (
          <SwiperSlide key={index}>
            <div
              className={`${
                store ? "h-[223px]" : "h-[223px] lgh[23rem]"
              } w-full relative`}
            >
              {item?.link && (
                <div
                  dir=""
                  className=" text-left bg-black/40 px-4 left-0 right-0 rounded-b-xl py-2 absolute bottom-0 flex items-center justify-between"
                >
                  <div>
                    <div className="font-bold  text-[white] my-0 text-[21px]">
                      {item?.header}
                    </div>
                    <div className="text-s my-0 text-[white]">
                      {item?.description}
                    </div>
                  </div>
                  <Link
                    to={item?.link}
                    className="button !h-min !w-fit text-[18px] !my-0 !py-0 !px-4"
                  >
                    <ArrowRight />
                    مشاهده
                  </Link>
                </div>
              )}
              <div>
                <img
                  src={APP_CONFIG.apiBaseUrl + item?.image}
                  alt={`slides ${index}`}
                  layout="fill"
                  className={`${
                    item.link ? "rounded-xl" : ""
                  } absolute h-[223px] w-full -z-10`}
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Carousel;
