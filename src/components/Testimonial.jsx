import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import quote from "../assets/svg/quote.svg";
import "swiper/css/bundle";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper/modules";

function Testimonial() {
  const [swiperRef, setSwiperRef] = useState(null);

  let appendNumber = 4;
  let prependNumber = 1;
  return (
    <React.Fragment>
      <Swiper
        onSwiper={setSwiperRef}
        slidesPerView={5}
        spaceBetween={30}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="testimonialSwiper"
        breakpoints={{
          1281: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          992: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          576: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          0: {
            slidesPerView: 1,
            spaceBetween: 0,
          },
        }}
      >
        <SwiperSlide>
          <div className="card">
            <div className="card-content">
              <div className="nameCont">
                <div className="left">
                  <div className="profileBox">P</div>
                  <h4>Pratiksha Tambat</h4>
                </div>
                <img src={quote} alt="quote icon" className="quote" />
              </div>
              <p>
                The best german class in Nashik with proper guidance and
                Ms.Rutuja takes in a lot of effort to teach. Each and every
                concept is explained by her in detail without any hesitation.
                And there is a lot of interaction with the other students which
                helps to boost confidence. Would highly recommend.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="card">
            <div className="card-content">
              <div className="nameCont">
                <div className="left">
                  <div className="profileBox">S</div>
                  <h4>Shubham W</h4>
                </div>
                <img src={quote} alt="quote icon" className="quote" />
              </div>
              <p>
                Has best instructors to develop German language skills
                efficiently for beginners as well as professionals. Instructors
                helped me build my confidence during difficulties and kept me
                motivated until I reach my goals!They have flexible schedules,
                affordable courses and interactive sessions. Highly recommended.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="card">
            <div className="card-content">
              <div className="nameCont">
                <div className="left">
                  <div className="profileBox">C</div>
                  <h4>Charul patil</h4>
                </div>
                <img src={quote} alt="quote icon" className="quote" />
              </div>
              <p>
                I have completed my A1 course. It has been a fun learning ride.
                The concepts were eased into us with the help of many
                interactive activities, games and worksheet. Maam has been
                really good with her knowledge and efforts.I would highly
                recommend you if u really wanna learn German.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="card">
            <div className="card-content">
              <div className="nameCont">
                <div className="left">
                  <div className="profileBox">P</div>
                  <h4>Apurva Joshi</h4>
                </div>
                <img src={quote} alt="quote icon" className="quote" />
              </div>
              <p>
                Rutuja mam is great teacher who ensures that all her students
                learn the language. She covers all the factors of the language
                like reading, speaking, writing and listening. Actually german
                grammar is difficult but she breaks it down so easily and makes
                it comprehensible. I highly recommend that you can start your
                journey with Rutuja mam.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="card">
            <div className="card-content">
              <div className="nameCont">
                <div className="left">
                  <div className="profileBox">P</div>
                  <h4>Abhijeet Gaikar</h4>
                </div>
                <img src={quote} alt="quote icon" className="quote" />
              </div>
              <p>
                With the quench for learning a foreign language, I started
                learning German Online at Hyflex Education. The teaching was
                really convincing & interactive. Ma'am is interactive,
                approachable & focuses on learning. If anyone wants to learn a
                foreign language, I highly recommend Hyflex Education.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="card">
            <div className="card-content">
              <div className="nameCont">
                <div className="left">
                  <div className="profileBox">P</div>
                  <h4>Shrirang Pathak</h4>
                </div>
                <img src={quote} alt="quote icon" className="quote" />
              </div>
              <p>
                The instructor is extremely knowledgeable and teaches
                meticulously. Her focus is on not only on grammer but also on
                improving communication skills. She is a great teacher indeed. I
                would really recommend joining her class.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="card">
            <div className="card-content">
              <div className="nameCont">
                <div className="left">
                  <div className="profileBox">P</div>
                  <h4>Sampada Puranik</h4>
                </div>
                <img src={quote} alt="quote icon" className="quote" />
              </div>
              <p>
                a month ago Learning French has always been a goal of mine, and
                you made it possible to get closer to that goal with your
                disciplined yet approachable teaching style, Anushka. Merci
                beaucoup!!!
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="card">
            <div className="card-content">
              <div className="nameCont">
                <div className="left">
                  <div className="profileBox">P</div>
                  <h4>VINITA PATIL</h4>
                </div>
                <img src={quote} alt="quote icon" className="quote" />
              </div>
              <p>
                a month ago Best staff of academy specifically rutuja mam 💫💫💫
                she is very comfortable and cooperative to students. The way she
                teaches which is absolutely best way for students to easily
                understand.Thank you mam 😊
              </p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </React.Fragment>
  );
}

export default Testimonial;
