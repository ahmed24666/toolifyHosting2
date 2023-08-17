import React, { useState } from "react";
import "./about.scss";
import { motion } from "framer-motion";
import { useMyContext } from "../../context/MyContext";
const About = ({ aboutRef }) => {
  const { t } = useMyContext();
  return (
    <motion.div
      ref={aboutRef}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, ease: "backInOut", delay: 0 }}
      className="About"
    >
      <div className="image">
        <img src="/images/logoV.png" alt="" />
      </div>
      <div className="text">
        <h1>{t("about.h1")}</h1>
        <p>
          {t("about.p1")}
          <br />
          {t("about.p2")}
        </p>
      </div>
    </motion.div>
  );
};

export default About;
