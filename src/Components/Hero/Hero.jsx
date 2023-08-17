import React from "react";
import "./hero.scss";
import { BsArrowRight } from "react-icons/bs";
import { motion } from "framer-motion";
import { SlSocialGoogle } from "react-icons/sl";
import { SlSocialFacebook } from "react-icons/sl";
import { BsWhatsapp} from "react-icons/bs";
import { SlSocialLinkedin } from "react-icons/sl";
import { useMyContext } from '../../context/MyContext'
const Hero = ({ aboutRef ,handleClick}) => {
  const { t , lang} = useMyContext()
  const AllFeatures = document.getElementById("scrollto");

  return (
    <div className="Hero cont">
      <div className="left">
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1, ease: "backInOut", delay: 0 }}
        >
          ALL IN ONE
        </motion.h1>
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5, ease: "backInOut", delay: 0 }}
        >
          <span>plugins</span>
          upsell sales
        </motion.h2>
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 2, ease: "backInOut", delay: 0 }}
        >
          we develop
          <span>plugins</span>
        </motion.h2>
        <div className="icons">
          <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 2, ease: "backInOut", delay: 0 }}
          className="icon"><SlSocialGoogle/></motion.div>
          <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 2, ease: "backInOut", delay: 0 }}
          className="icon"><SlSocialFacebook/></motion.div>
          <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 2, ease: "backInOut", delay: 0 }}
          className="icon"><BsWhatsapp/></motion.div>
          <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 2, ease: "backInOut", delay: 0 }}
          className="icon"><SlSocialLinkedin/></motion.div>
        </div>
        <motion.div
          whileTap={{ opacity: "0.7" }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 2.6, ease: "backInOut", delay: 0 }}
          className="btn"
        >
          <span className="gradient-text">
            START NOW
            <div className="arrow ">
              <BsArrowRight />
            </div>
          </span>
        </motion.div>
      </div>
      <div className="image">
        <img src="/images/labtop.png" alt="" />
      </div>
      <div className="scroll">
        {/* <div className="bounce mouse" onClick={() => handleClick()}>
          <BsMouse />
        </div> */}
        <div class="mouse" onClick={() => handleClick()}></div>
        <p>Explore More</p>
      </div>
    </div>
  );
};

export default Hero;
