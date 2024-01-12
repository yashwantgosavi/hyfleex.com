import React, { useState, useRef, useEffect } from "react";
import { HashLink } from "react-router-hash-link";
import { motion, useScroll } from "framer-motion";
import coursesData from "../data/courseData.json";
import address from "../assets/svg/address.svg";
import blueDot from "../assets/svg/blueDots.svg";
import pinkDot from "../assets/svg/pinkDots.svg";
import whatsapp from "../assets/png/whatsapp.png";
import phone from "../assets/svg/phone.svg";
import mail from "../assets/svg/mail.svg";
import play from "../assets/png/Play.png";
import send from "../assets/png/Send.png";
import paper from "../assets/png/Paper.png";
import emoji from "../assets/png/imoji.png";
import aboutback from "../assets/png/aboutback.png";
import aboutImg from "../assets/png/aboutImg.png";
import courseImg from "../assets/png/course.png";
import trophy from "../assets/png/trophy.png";
import award from "../assets/png/awards.png";
import headerVideo from "../assets/header-media/pexels-rodnae-productions-7647691 (Original).mp4";
import playBtn from "../assets/svg/playbtn.svg";
import Nav from "../layout/Nav/Nav";
import google from "../assets/png/image 12.png";
import review from "../assets/png/review.png";
import review2 from "../assets/jpg/girl.jpg";
import review3 from "../assets/jpg/pic4.jpg";
import googlelogo from "../assets/png/googlelogo.png";
import stars from "../assets/png/stars.png";
import arrow from "../assets/svg/arrow.svg";
import TeamSlider from "../components/TeamSlider";
import ContactForm from "../components/contactForm/ContactForm";
import Testimonial from "../components/Testimonial";

function Home() {
  const [showAns, setShowAns] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const videoRef = useRef(null);

  const [courseInfo, setCourseInfo] = useState(coursesData[0]);
  const [activeCourse, setActiveCourse] = useState(coursesData[0].courseName);

  console.log(courseInfo);
  const handleCourse = (course) => {
    setCourseInfo(course);
    setActiveCourse(course.courseName);
  };

  function faqToggler(event) {
    const question = event.currentTarget;
    //   const answer = question.nextElementSibling;
    const parent = question.parentNode;
    const icon = parent.querySelector(".icon");

    setShowAns((prevShowAns) => !prevShowAns);
    if (!showAns) {
      // setShowAns(true);
      parent.classList.add("activeAns");
      icon.textContent = "-";
    } else {
      // setShowAns(false);
      parent.classList.remove("activeAns");
      icon.textContent = "+";
    }
  }

  const toggleVideo = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const showContactForm = () => {
    setShowForm(!showForm);
  };

  return (
    <React.Fragment>
      <header>
        <div className="chatbox">
          <a href="https://wa.me/919922185551" target="_blank">
            <img src={whatsapp} alt="WhatsApp Icon" />
          </a>
        </div>
        <Nav getForm={showContactForm} />
        {showForm && <ContactForm />}
        {/* <ContactForm displayStatus={showForm} /> */}
        <div className="bigCircle"></div>
        <div className="container" id="headerSec">
          <div className="headerTextCont">
            <img src={pinkDot} alt="Pink ballons pic" className="pinkBall" />
            <motion.h1
              initial={{ translateY: -100 }}
              whileInView={{ translateY: 0 }}
              transition={{
                duration: 0.8,
              }}
            >
              Become Fluent in <br />
              <span>Foreign Language</span>
              <br />
              with Hyfleex
            </motion.h1>
            <motion.p
              initial={{ translateX: -100 }}
              whileInView={{ translateX: 0 }}
              transition={{
                duration: 0.8,
              }}
            >
              Discover Spanish, German, English, IELTS, Japanese, and more
              languages <br /> with Hyfleex. Break barriers, build
              connections—start your multilingual journey!
            </motion.p>
            <motion.h5
              initial={{ translateX: -100 }}
              whileInView={{ translateX: 0 }}
              transition={{
                duration: 0.8,
              }}
            >
              <HashLink to="#courseSec">Explore courses</HashLink>
              <div id="pin"></div>
            </motion.h5>
          </div>
          <div className="headerMediaCont">
            <img src={blueDot} alt="blue ballons pic" className="blueBall" />
            <motion.div
              initial={{ translateX: 200 }}
              whileInView={{ translateX: 0 }}
              transition={{
                duration: 0.8,
              }}
              className="videoCont"
            >
              <div className="videoHeaderBox">
                <div className="threeDots">
                  <div className="red"></div>
                  <div className="yellow"></div>
                  <div className="green"></div>
                </div>
              </div>
              <div className="videoBoxCont">
                <div className="videoBox">
                  <video ref={videoRef} id="video" loop muted autoPlay={true}>
                    <source src={headerVideo} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
                <img
                  src={playBtn}
                  className="playBtn"
                  alt="Play Button"
                  onClick={toggleVideo}
                />
                <h4>LOREM</h4>
                <div className="bar1"></div>
                <div className="bar2"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </header>
      <section className="featureSec sectionPadding">
        <div className="container" id="featureSec">
          <motion.div className="ratingBar">
            <div className="innerCont" id="ratingInner">
              <div className="ratingTextBox">
                <div className="ratebox">
                  <h3>4.9</h3>
                  <p>Rated on</p>
                  <img src={google} alt="google logo" />
                </div>
                <p>
                  We help 1500+ students to <br />
                  Achieve their goals
                </p>
              </div>
              <div className="reviewBoxCont">
                <motion.div
                  initial={{ translateY: -100 }}
                  whileInView={{ translateY: 0 }}
                  transition={{
                    duration: 0.8,
                  }}
                  className="reviewBox"
                >
                  <img
                    src={review2}
                    alt="student profile"
                    className="profilePic"
                  />
                  <h5>Rucha Kulkarni</h5>
                  <div>
                    <img
                      src={googlelogo}
                      alt="googleLogo"
                      className="googlelogo"
                    />
                    <img src={stars} alt="rating star" />
                  </div>
                </motion.div>
                <motion.div
                  initial={{ translateY: -100 }}
                  whileInView={{ translateY: 0 }}
                  transition={{
                    duration: 0.8,
                  }}
                  className="reviewBox"
                >
                  <img
                    src={review}
                    alt="student profile"
                    className="profilePic"
                  />
                  <h5>Shubham W</h5>
                  <div>
                    <img
                      src={googlelogo}
                      alt="googleLogo"
                      className="googlelogo"
                    />
                    <img src={stars} alt="rating star" />
                  </div>
                </motion.div>
                <motion.div
                  initial={{ translateY: -100 }}
                  whileInView={{ translateY: 0 }}
                  transition={{
                    duration: 0.8,
                  }}
                  className="reviewBox"
                >
                  <img
                    src={review3}
                    alt="student profile"
                    className="profilePic"
                  />
                  <h5>Charul Patil</h5>
                  <div>
                    <img
                      src={googlelogo}
                      alt="googleLogo"
                      className="googlelogo"
                    />
                    <img src={stars} alt="rating star" className="star" />
                  </div>
                </motion.div>
              </div>
              <img src={arrow} alt="arrow" id="arrow" />
            </div>
          </motion.div>
          <div className="innerCont" id="featureInner">
            <motion.h3
              initial={{ translateY: -100 }}
              whileInView={{ translateY: 0 }}
              transition={{
                duration: 0.8,
              }}
            >
              Why choose us
            </motion.h3>
            <motion.h2
              initial={{ translateY: -100 }}
              whileInView={{ translateY: 0 }}
              transition={{
                duration: 0.8,
              }}
            >
              Our Values{" "}
            </motion.h2>
            <div className="featureBoxCont">
              <motion.div
                initial={{ translateX: -200 }}
                whileInView={{ translateX: 0 }}
                transition={{
                  duration: 0.8,
                }}
                className="featureBox"
              >
                <img src={play} alt="play button logo" />
                <h4>Proven Success</h4>
                <p>
                  Join us for a track record of student success, proving our
                  commitment to helping you achieve your language goals.
                </p>
              </motion.div>
              <div className="featureBox">
                <img src={send} alt="send logo" />
                <h4>Innovative Teaching</h4>
                <p>
                  Experience a modern approach to learning with a mix of
                  traditional methods and cutting-edge techniques for an
                  engaging language journey.
                </p>
              </div>
              <motion.div
                initial={{ translateX: 200 }}
                whileInView={{ translateX: 0 }}
                transition={{
                  duration: 0.8,
                }}
                className="featureBox"
              >
                <img src={paper} alt="paper logo" />
                <h4>Community Support</h4>
                <p>
                  Join a supportive language-learning community, emphasizing
                  collaboration, cultural exchange, and constant motivation for
                  language proficiency.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
      <section className="courseSec sectionPadding">
        <div className="container" id="courseSec">
          <motion.div
            initial={{ translateX: -200 }}
            whileInView={{ translateX: 0 }}
            transition={{
              duration: 0.8,
            }}
            className="courseImgBox"
          >
            <div className="courseImgCont">
              <img src={courseImg} alt="about us img" className="courseImg" />
              <div className="courseNameBox">
                <div className="dot"></div>
                <img src={award} alt="rating" />
                <div>
                  <h5>300+</h5>
                  <h6>
                    Students <br /> Achieve Their <br /> Dreams with Us!
                  </h6>
                </div>
              </div>
            </div>
            <img src={aboutback} className="courseBack" />
          </motion.div>
          <div className="courseTextCont">
            <motion.h3
              initial={{ translateY: -100 }}
              whileInView={{ translateY: 0 }}
              transition={{
                duration: 0.8,
              }}
            >
              Our Courses
            </motion.h3>
            <motion.h2
              initial={{ translateY: -100 }}
              whileInView={{ translateY: 0 }}
              transition={{
                duration: 0.8,
              }}
            >
              Explore our courses <br />
              Your Multilingual Journey Begins Here
            </motion.h2>
            <motion.div
              initial={{ translateX: 200 }}
              whileInView={{ translateX: 0 }}
              transition={{
                duration: 0.8,
              }}
              className="courseInfoCont"
            >
              <div className="courseBoxCont">
                {coursesData.map((course, index) => (
                  <div
                    key={index}
                    onClick={() => handleCourse(course)}
                    className={`courseBox ${
                      course.courseName === activeCourse ? "activeCourse" : ""
                    }`}
                  >
                    <img src={course.coursePic} alt={course.courseName} />
                    <h5
                      dangerouslySetInnerHTML={{ __html: course.courseName }}
                    ></h5>
                  </div>
                ))}
              </div>
              <div className="courseDetailCont">
                <div className="courseHeader">
                  <div className="levelBox">
                    <h6>Level</h6>
                  </div>
                  <div className="aboutBox">
                    <h6>About</h6>
                  </div>
                </div>
                <div className="courseDescCont">
                  {courseInfo.courseData.map((myCourse, index) => (
                    <div className="courseRow">
                      <div className="courselevel">
                        <div className="levelImgBox">
                          <img src={myCourse.courseIcon} />
                        </div>
                        <div className="levelname">
                          <h5>{myCourse.courseLevel}</h5>
                          {myCourse.check && <p>Check Syllabus</p>}
                        </div>
                      </div>
                      <div className="courseDesc">
                        <div className="about1">
                          <p>{myCourse.courseDesc[0].levelOneInfo}</p>
                        </div>
                        <div className="about2">
                          <p>{myCourse.courseDesc[1].levelTwoInfo}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      <section className="aboutSec sectionPadding">
        <div className="container" id="aboutSec">
          <div className="aboutTextBox">
            <motion.h3
              initial={{ translateY: -100 }}
              whileInView={{ translateY: 0 }}
              transition={{
                duration: 0.8,
              }}
            >
              About Us
            </motion.h3>
            <motion.h2
              initial={{ translateY: -100 }}
              whileInView={{ translateY: 0 }}
              transition={{
                duration: 0.8,
              }}
            >
              Promoting global connectivity
              <span>
                <img src={emoji} />
              </span>
              <br /> through language and culture.
            </motion.h2>
            <motion.p
              initial={{ translateX: -100 }}
              whileInView={{ translateX: 0 }}
              transition={{
                duration: 0.8,
              }}
            >
              The mission of Hyfleex is to provide students with the opportunity
              to learn about different languages and cultures. The classes aim
              to promote an understanding and appreciation of the languages and
              cultures among students. Additionally, the types seek to prepare
              students for future academic and professional opportunities in
              which they may encounter the language.
            </motion.p>
          </div>
          <motion.div
            initial={{ translateX: 200 }}
            whileInView={{ translateX: 0 }}
            transition={{
              duration: 0.8,
            }}
            className="aboutImgBox"
          >
            <div className="aboutImgCont">
              <img src={aboutImg} alt="about us img" className="aboutImg" />
              <div className="nameBox">
                <img src={trophy} className="trophyImg" />
                <div>
                  <h5>Rutuja Hardas</h5>
                  <h6>Founder & German Teacher</h6>
                </div>
              </div>
            </div>
            <img src={aboutback} className="aboutback" />
          </motion.div>
        </div>
      </section>
      <TeamSlider />
      <section className="testimonialSec sectionPadding">
        <div className="container" id="testimonialSec">
          <motion.h3
            initial={{ translateY: -100 }}
            whileInView={{ translateY: 0 }}
            transition={{
              duration: 0.8,
            }}
          >
            Student Voices
          </motion.h3>
          <motion.h2
            initial={{ translateY: -100 }}
            whileInView={{ translateY: 0 }}
            transition={{
              duration: 0.8,
            }}
          >
            Testimonials and Insights from Our Community
          </motion.h2>
          <Testimonial />
        </div>
      </section>
      <section className="faqSec sectionPadding">
        <div className="container" id="faqSec">
          <div className="innerCont" id="faqInner">
            <motion.h3
              initial={{ translateY: -100 }}
              whileInView={{ translateY: 0 }}
              transition={{
                duration: 0.8,
              }}
            >
              FAQs
            </motion.h3>
            <motion.h2
              initial={{ translateY: -100 }}
              whileInView={{ translateY: 0 }}
              transition={{
                duration: 0.8,
              }}
            >
              Your Guide to Common Questions and Answers
            </motion.h2>
            <div className="row my-4" id="faqCont">
              <div className="col-xl-6 col-lg-12 col-md-12 col-sm-12">
                <motion.div
                  className="faq-card"
                  id="faq-card-1"
                  initial={{ translateX: -200 }}
                  whileInView={{ translateX: 0 }}
                  transition={{
                    duration: 0.8,
                  }}
                >
                  <div onClick={faqToggler} className="question">
                    <h4>What languages do you offer courses in?</h4>
                    <div className="toggle">
                      <span className="icon">+</span>
                    </div>
                  </div>
                  <div className="answer">
                    <p>
                      We offer courses in a variety of languages, including
                      Spanish, German, English & IELTS, French, Japanese,
                      Sanskrit. Please check our course catalog for specific
                      offerings.
                    </p>
                  </div>
                </motion.div>
              </div>
              <div className="col-xl-6 col-lg-12 col-md-12 col-sm-12">
                <motion.div
                  className="faq-card"
                  id="faq-card-2"
                  initial={{ x: 200 }}
                  whileInView={{ x: 0 }}
                  transition={{
                    duration: 1,
                  }}
                >
                  <div onClick={faqToggler} className="question">
                    <h4>Do you offer online classes?</h4>
                    <div className="toggle">
                      <span className="icon">+</span>
                    </div>
                  </div>
                  <div className="answer">
                    <p>
                      Yes, we offer both in-person and online classes to
                      accommodate different preferences and circumstances.
                    </p>
                  </div>
                </motion.div>
              </div>
              <div className="col-xl-6 col-lg-12 col-md-12 col-sm-12">
                <motion.div
                  className="faq-card"
                  id="faq-card-3"
                  initial={{ x: -200 }}
                  whileInView={{ x: 0 }}
                  transition={{
                    duration: 1,
                  }}
                >
                  <div onClick={faqToggler} className="question">
                    <h4>What levels of proficiency do you cater to?</h4>
                    <div className="toggle">
                      <span className="icon">+</span>
                    </div>
                  </div>
                  <div className="answer">
                    <p>
                      Our courses are designed for all levels of proficiency,
                      from beginners to advanced learners. We offer placement
                      tests to determine the right level for you.
                    </p>
                  </div>
                </motion.div>
              </div>
              <div className="col-xl-6 col-lg-12 col-md-12 col-sm-12">
                <motion.div
                  className="faq-card"
                  id="faq-card-4"
                  initial={{ x: 200 }}
                  whileInView={{ x: 0 }}
                  transition={{
                    duration: 1,
                  }}
                >
                  <div onClick={faqToggler} className="question">
                    <h4>How can I pay for my course?</h4>
                    <div className="toggle">
                      <span className="icon">+</span>
                    </div>
                  </div>
                  <div className="answer">
                    <p>
                      We accept payments through all the accepted payment
                      methods e.g., credit cards, PayPal, etc.
                    </p>
                  </div>
                </motion.div>
              </div>
              <div className="col-xl-6 col-lg-12 col-md-12 col-sm-12">
                <motion.div
                  className="faq-card"
                  id="faq-card-5"
                  initial={{ x: -200 }}
                  whileInView={{ x: 0 }}
                  transition={{
                    duration: 1,
                  }}
                >
                  <div onClick={faqToggler} className="question">
                    <h4>What qualifications do your instructors have?</h4>
                    <div className="toggle">
                      <span className="icon">+</span>
                    </div>
                  </div>
                  <div className="answer">
                    <p>
                      Our instructors are highly qualified and experienced in
                      teaching. They are native speakers or possess advanced
                      proficiency in the language.
                    </p>
                  </div>
                </motion.div>
              </div>
              <div className="col-xl-6 col-lg-12 col-md-12 col-sm-12">
                <motion.div
                  className="faq-card"
                  id="faq-card-6"
                  initial={{ x: 200 }}
                  whileInView={{ x: 0 }}
                  transition={{
                    duration: 1,
                  }}
                >
                  <div onClick={faqToggler} className="question">
                    <h4>What is your teaching methodology?</h4>
                    <div className="toggle">
                      <span className="icon">+</span>
                    </div>
                  </div>
                  <div className="answer">
                    <p>
                      We use a communicative and immersive teaching approach,
                      focusing on speaking, listening, reading, and writing
                      skills to ensure well-rounded language acquisition.
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="contactSec sectionPadding">
        <div className="container" id="contactSec">
          <div className="innerCont" id="contactInner">
            <motion.h3
              initial={{ translateY: -100 }}
              whileInView={{ translateY: 0 }}
              transition={{
                duration: 0.8,
              }}
            >
              Get in Touch
            </motion.h3>
            <motion.h2
              initial={{ translateY: -100 }}
              whileInView={{ translateY: 0 }}
              transition={{
                duration: 0.8,
              }}
            >
              Contact Us Today!
            </motion.h2>
            <motion.p
              initial={{ translateY: -100 }}
              whileInView={{ translateY: 0 }}
              transition={{
                duration: 1,
              }}
            >
              Have questions, inquiries, or just want to connect? Reach out to
              us through the contact information below. Our dedicated team is
              here to assist you and ensure you have the information you need.
              We look forward to hearing from you!
            </motion.p>
            <div className="contactCont">
              <motion.form
                initial={{ translateX: -200 }}
                whileInView={{ translateX: 0 }}
                transition={{
                  duration: 0.8,
                }}
                className="contactForm"
              >
                <label htmlFor="name">Name*</label>
                <input type="text" name="name" id="name" required />
                <label htmlFor="email">Email*</label>
                <input type="email" name="email" id="email" required />
                <label htmlFor="contact">Contact*</label>
                <input type="phone" name="phone" id="contact" required />
                <div className="checkCont">
                  <p>What are you looking for*</p>
                  <div className="checkBoxCont">
                    <div className="checkBox">
                      <input type="checkbox" className="check" name="spanish" />
                      <p>Spanish</p>
                    </div>
                    <div className="checkBox">
                      <input type="checkbox" className="check" name="spanish" />
                      <p>French</p>
                    </div>
                    <div className="checkBox">
                      <input type="checkbox" className="check" name="spanish" />
                      <p>Japanese</p>
                    </div>
                    <div className="checkBox">
                      <input type="checkbox" className="check" name="spanish" />
                      <p>German</p>
                    </div>
                    <div className="checkBox">
                      <input type="checkbox" className="check" name="spanish" />
                      <p>English&nbsp;&&nbsp;IELTS</p>
                    </div>
                    <div className="checkBox">
                      <input type="checkbox" className="check" name="spanish" />
                      <p>Sanskrit</p>
                    </div>
                  </div>
                </div>
                <label htmlFor="message">Message*</label>
                <textarea name="message" id="message"></textarea>
                <motion.button
                  initial={{ translateX: -100 }}
                  whileInView={{ translateX: 0 }}
                  transition={{
                    duration: 0.8,
                  }}
                  type="submit"
                  id="messageBtn"
                  className="btn2"
                >
                  Send Message
                </motion.button>
              </motion.form>
              <motion.div
                initial={{ translateX: 200 }}
                whileInView={{ translateX: 0 }}
                transition={{
                  duration: 0.8,
                }}
                className="contactTextCont"
              >
                <div className="addBox">
                  <h5>
                    <span>
                      <img src={address} alt="" />
                    </span>
                    Address:
                  </h5>
                  <p>
                    Block 3, Bhagyalaxmi Apartment Old D'Souza Colony, College{" "}
                    <br /> Rd, opp. Model Colony, Nashik, Maharashtra 422005
                  </p>
                </div>
                <div className="addBoxCont">
                  <div className="addBox">
                    <h5>
                      <span>
                        <img src={phone} alt="" />
                      </span>
                      Phone number:
                    </h5>
                    <p>+91 9922185551</p>
                  </div>
                  <div className="addBox">
                    <h5>
                      <span>
                        <img src={mail} alt="" />
                      </span>
                      Email:
                    </h5>
                    <p>
                      <span>Contact: </span>
                      info@hyfleex.com
                    </p>
                  </div>
                </div>
                <p>Find Our Office Easily</p>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3749.004200760728!2d73.75636659999999!3d20.0083384!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bddeb19b926a93d%3A0x135dec9d70a0dde6!2sHyfleex%20Education%20-%20Foreign%20Language%20Institute!5e0!3m2!1sen!2sin!4v1702795755707!5m2!1sen!2sin"
                  height="440"
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="contactMap"
                ></iframe>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}

export default Home;
