import React, { useState } from "react";
import { FiEye } from "react-icons/fi";
import { FiEyeOff } from "react-icons/fi";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useMyContext } from "../../context/MyContext";
import "./login.scss";
const Login = () => {
  const [show1, setshow1] = useState(false);
  const { t ,lang} = useMyContext();

  return (
    <div className="Login" style={lang==='en'?{direction:'ltr'}:{direction:'rtl'}}>
      <div className="top">
        <img src="/images/bigLogo.png" alt="" />
      </div>
      <div className="left" style={lang==='en'?{padding:'70px 0px 70px 70px'}:{padding:'70px 70px 70px 0'}}>
        <div className="head">
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "backInOut", delay: 0 }}
            className="gradient-text"
          >
            {t("login.h1")}
            <span>{t("login.span")}</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1, ease: "backInOut", delay: 0 }}
          >
            {t("login.p")}
          </motion.p>
        </div>
        <div className="form">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2, ease: "backInOut", delay: 0 }}
            className="item"
          >
            <label>{t("login.username")}</label>
            <input type="text" placeholder={t("login.username h")} />
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.4, ease: "backInOut", delay: 0 }}
            className="item"
          >
            <label>{t("login.password")}</label>
            <div className="input">
              <input
                type={show1 ? "text" : "password"}
                placeholder={t("login.password h")}
              />
              {show1 ? (
                <div className="icon" onClick={() => setshow1(!show1)}>
                  <FiEyeOff />
                </div>
              ) : (
                <div className="icon" onClick={() => setshow1(!show1)}>
                  <FiEye />
                </div>
              )}
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.6, ease: "backInOut", delay: 0 }}
            className="btn"
          >
            {t("login.login")}
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.8, ease: "backInOut", delay: 0 }}
            className="text"
          >
            {t("login.don't")}
            <Link to="/signup">
              <span className="gradient-text">{t("login.signup")}</span>
            </Link>
          </motion.div>
        </div>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1, ease: "backInOut", delay: 0 }}
        className="right"
      >
        <div className="image">
          <img src={lang==='en'?'/images/signup.png':'/images/signupar.png'} alt="" />
        </div>
      </motion.div>
    </div>
  );
};

export default Login;
