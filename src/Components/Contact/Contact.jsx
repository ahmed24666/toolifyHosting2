import React from "react";
import "./contact.scss";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import { useState } from "react";
import { motion } from "framer-motion";
import { useMyContext } from "../../context/MyContext";

const Contact = ({ aboutRef }) => {
  const [value, setValue] = useState();
  const { t ,lang} = useMyContext();

  return (
    <motion.div
      ref={aboutRef}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, ease: "backInOut", delay: 0 }}
      className="Contact"
    >
      <div className="left">
        <h1 className="gradient-text">
        {t("contact.h1")}
        </h1>
        <p>
        {t("contact.p")}{" "}
        </p>
      </div>
      <div className="right">
        <div className="two">
          <motion.div
          ref={aboutRef}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "backInOut", delay: 0 }}
          className="one">
            <input type="text" placeholder={t("contact.fn")} />
          </motion.div>
          <motion.div
          ref={aboutRef}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: "backInOut", delay: 0 }}
          className="one">
            <input type="text" placeholder= {t("contact.ln")} />
          </motion.div>
        </div>
        <motion.div
        ref={aboutRef}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.7, ease: "backInOut", delay: 0 }}
        className="one">
          <input type="text" placeholder= {t("contact.email")} />
        </motion.div>
        <motion.div
        ref={aboutRef}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.8, ease: "backInOut", delay: 0 }}
        className="one phone"

        >
          <PhoneInput
          style={lang==='en'?{direction:'ltr'}:{direction:'rtl'}}
            international
            countryCallingCodeEditable={false}
            defaultCountry="EG"
            value={value}
            onChange={setValue}
          />
        </motion.div>
        <motion.div
        ref={aboutRef}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.9, ease: "backInOut", delay: 0 }}
        className="one">
          <textarea placeholder= {t("contact.msg")} ></textarea>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Contact;
