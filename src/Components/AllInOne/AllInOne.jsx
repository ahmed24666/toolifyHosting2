import React from "react";
import "./allInOne.scss";
import { motion } from "framer-motion";
import { useMyContext } from "../../context/MyContext";
import lottie from "lottie-web";
import { defineElement } from "lord-icon-element";
import "lord-icon-element";
const AllInOne = ({ aboutRef }) => {
  const { t } = useMyContext();
  // define "lord-icon" custom element with default properties
  defineElement(lottie.loadAnimation);
  return (
    <motion.dev
      ref={aboutRef}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, ease: "backInOut", delay: 0 }}
      className="AllInOne"
    >
      <div className="text">
        <p>{t("all.p")}</p>
      </div>
      <div className="cards">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7, ease: "circInOut", delay: 0 }}
          className="card"
        >
          <div className="icon">
            <lord-icon
              src="https://cdn.lordicon.com/ybfcwnqv.json"
              trigger="loop"
              delay="1000"
              colors="primary:#0e5f74,secondary:#961062"
              stroke="60"
              style={{ width: "100px", height: "100px" }}
            ></lord-icon>
          </div>
          <h1 className="gradient-text">{t("all.h11")}</h1>
          <p>{t("all.p11")}</p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.9, ease: "anticipate", delay: 0 }}
          className="card"
        >
          <div className="icon">
            <lord-icon
              src="https://cdn.lordicon.com/rgyftmhc.json"
              trigger="loop"
              delay="1000"
              colors="primary:#961062,secondary:#0e5f74"
              stroke="55"
              style={{ width: "100px", height: "100px" }}
            ></lord-icon>
          </div>
          <h1 className="gradient-text">{t("all.h12")}</h1>
          <p>{t("all.p12")}</p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.1, ease: "anticipate", delay: 0 }}
          className="card"
        >
          <div className="icon">
            <lord-icon
              src="https://cdn.lordicon.com/rwotyanb.json"
              trigger="loop"
              delay="1000"
              stroke="60"
              colors="primary:#0e5f74,secondary:#961062"
              style={{ width: "100px", height: "100px" }}
            ></lord-icon>
          </div>
          <h1 className="gradient-text">{t("all.h13")}</h1>
          <p style={{marginBottom:'0'}}>{t("all.p13")}</p>
        </motion.div>
      </div>
    </motion.dev>
  );
};

export default AllInOne;
