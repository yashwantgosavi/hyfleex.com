import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { motion, useScroll } from "framer-motion";
import member1 from "../assets/png/aboutImg.png";
import member2 from "../assets/jpg/member2.jpg";
import member3 from "../assets/jpg/member3.jpg";
import member4 from "../assets/jpg/member4.jpg";
import member5 from "../assets/jpg/member5.jpg";
import "swiper/css/bundle";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper/modules";

export default function App() {
  const [swiperRef, setSwiperRef] = useState(null);

  let appendNumber = 4;
  let prependNumber = 1;

  return (
    <React.Fragment>
      <section className="teamSec sectionPadding">
        <div className="container" id="teamCont">
          <div className="sliderHead">
              <motion.h3
               initial={{ translateY: -100 }}
               whileInView={{ translateY: 0 }}
               transition={{
                 duration: 0.8,
               }}
              >Key Persons</motion.h3>
              <motion.h2
               initial={{ translateY: -100 }}
               whileInView={{ translateY: 0 }}
               transition={{
                 duration: 0.8,
               }}
              >Meet our teachers</motion.h2>
          </div>
          <Swiper
            onSwiper={setSwiperRef}
            slidesPerView={5}
            spaceBetween={30}
            navigation={true}
            modules={[Pagination, Navigation]}
            breakpoints={{
              1281: {
                slidesPerView: 5,
                spaceBetween: 30,
              },
              992: {
                slidesPerView: 4,
                spaceBetween: 20,
              },
              576: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
              0: {
                slidesPerView: 1,
                spaceBetween: 0,
              },
            }}
          >
            <SwiperSlide>
              <div className="teamImgCont first">
                <img src={member1} alt="team member pic" />
              </div>
              <div>
                <h4>Rutuja Hardas</h4>
                <h6>German</h6>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="teamImgCont">
                <img src={member2} alt="team member pic" />
              </div>
              <div>
                <h4>Sakshi Garge</h4>
                <h6>French</h6>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="teamImgCont">
                <img src={member3} alt="team member pic" />
              </div>
              <div>
                <h4>Sanket parnerkar</h4>
                <h6>English & IELTs</h6>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="teamImgCont">
                <img src={member4} alt="team member pic" />
              </div>
              <div>
                <h4>ketaki Gorhe</h4>
                <h6>Spanish</h6>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="teamImgCont">
                <img src={member5} alt="team member pic" />
              </div>
              <div>
                <h4>Archana wadekar</h4>
                <h6>Japanese</h6>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="teamImgCont first">
                <img src={member1} alt="team member pic" />
              </div>
              <div>
                <h4>Rutuja Hardas</h4>
                <h6>German</h6>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
    </React.Fragment>
  );
}
