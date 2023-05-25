import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper";
import img1 from "../../assets/home/slide1.jpg";
import img2 from "../../assets/home/slide2.jpg";
import img3 from "../../assets/home/slide3.jpg";
import img4 from "../../assets/home/slide4.jpg";
import img5 from "../../assets/home/slide5.jpg";
import SectionTittle from "../Shered/SectionTittle";
const FoodItem = () => {
  return (
    <div className="my-9">
      <SectionTittle
        Header={"From 11:00am to 10:00pm"}
        SubHeader={"ORDER ONLINE"}
      ></SectionTittle>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper py-10"
      >
        <SwiperSlide>
          <img src={img1} alt="" />
          <h1 className="text-white uppercase text-3xl font-semibold -mt-20 text-center shadow-md">
            Salads
          </h1>
        </SwiperSlide>
        <SwiperSlide>
          <img src={img2} alt="" />
          <h1 className="text-white uppercase text-3xl font-semibold -mt-20 text-center shadow-md">
            Soups
          </h1>
        </SwiperSlide>
        <SwiperSlide>
          <img src={img3} alt="" />
          <h1 className="text-white uppercase text-3xl font-semibold -mt-20 text-center shadow-md">
            pizzas
          </h1>
        </SwiperSlide>
        <SwiperSlide>
          <img src={img4} alt="" />
          <h1 className="text-white uppercase text-3xl font-semibold -mt-20 text-center shadow-md">
            desserts
          </h1>
        </SwiperSlide>
        <SwiperSlide>
          <img src={img5} alt="" />
          <h1 className="text-white uppercase text-3xl font-semibold -mt-20 text-center shadow-md">
            Salads
          </h1>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default FoodItem;
