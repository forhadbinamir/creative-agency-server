import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import carousel from '../../images/carousel/carousel-1.png'
import carousel2 from '../../images/carousel/carousel-2.png'
import carousel3 from '../../images/carousel/carousel-3.png'
import carousel4 from '../../images/carousel/carousel-4.png'
import carousel5 from '../../images/carousel/carousel-5.png'
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import "./style.css";
import "./Slider.css";

// import required modules
import { Pagination } from "swiper";

const Slider = () => {
    return (
        <div className="p-20 bg-slate-900">
            <Swiper
                slidesPerView={4}
                centeredSlides={true}
                spaceBetween={30}
                grabCursor={true}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                <SwiperSlide><img src={carousel} alt="" /></SwiperSlide>
                <SwiperSlide><img src={carousel2} alt="" /></SwiperSlide>
                <SwiperSlide><img src={carousel3} alt="" /></SwiperSlide>
                <SwiperSlide><img src={carousel4} alt="" /></SwiperSlide>
                <SwiperSlide><img src={carousel5} alt="" /></SwiperSlide>
            </Swiper>
        </div>
    );
}
export default Slider;
