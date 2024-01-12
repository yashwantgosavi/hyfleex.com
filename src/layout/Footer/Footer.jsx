import React from "react";
import { HashLink } from "react-router-hash-link";
import { motion, useScroll } from "framer-motion";
import facebook from "../../assets/svg/facebook.svg";
import twitter from "../../assets/svg/twitter.svg";
import insta from "../../assets/svg/instagram.svg";
import logo from "../../assets/jpg/hyflex-logo.jpg";

function Footer() {
  return (
    <React.Fragment>
      <footer>
        <div className="container" id="footer">
          <div className="footerTextCont">
            <div className="innerCont" id="footerInner">
              <div className="addressBox">
                <motion.h2
                  initial={{ translateY: -50 }}
                  whileInView={{ translateY: 0 }}
                  transition={{
                    duration: 0.8,
                  }}
                >
              <img src={logo} alt="hyfleex logo" />
                </motion.h2>
                <motion.p
                  initial={{ translateY: -50 }}
                  whileInView={{ translateY: 0 }}
                  transition={{
                    duration: 0.8,
                  }}
                >
                  Block 3, Bhagyalaxmi Apartment <br /> Old D'Souza Colony,
                  College Rd,
                  <br />
                  opp. Model Colony, Nashik, Maharashtra
                </motion.p>
              </div>
              <motion.ul
                initial={{ translateY: -50 }}
                whileInView={{ translateY: 0 }}
                transition={{
                  duration: 0.8,
                }}
                className="footerLinkBox"
              >
                <li>
                  <HashLink>Careers</HashLink>
                </li>
                <li>
                  <HashLink to="#teamCont">Teachers</HashLink>
                </li>
                <li>
                  <HashLink>Support</HashLink>
                </li>
                <li>
                  <HashLink to="#contactSec">Contact</HashLink>
                </li>
              </motion.ul>
              <motion.div
                initial={{ translateY: -50 }}
                whileInView={{ translateY: 0 }}
                transition={{
                  duration: 0.8,
                }}
                className="socialBox"
              >
                <a href="">
                  <img src={facebook} alt="facebook logo" />
                </a>
                <a href="">
                  <img src={twitter} alt="facebook logo" />
                </a>
                <a href="">
                  <img src={insta} alt="facebook logo" />
                </a>
              </motion.div>
            </div>
          </div>
          <div className="footerCopyCont">
            <div className="innerCont" id="footerCopy">
              <motion.a
                initial={{ translateX: 100 }}
                whileInView={{ translateX: 0 }}
                transition={{
                  duration: 0.8,
                }}
                href=""
              >
                www.hyfleex.com
              </motion.a>
              <motion.h2
                initial={{ translateX: -100 }}
                whileInView={{ translateX: 0 }}
                transition={{
                  duration: 0.8,
                }}
              >
                Designed By: <a href="https://yashwebdesign.com/">yashwebdesign.com</a>
              </motion.h2>
            </div>
          </div>
        </div>
      </footer>
    </React.Fragment>
  );
}

export default Footer;
