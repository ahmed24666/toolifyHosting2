import React, { useEffect, useState } from "react";
import "./signup.scss";
import { FiEye } from "react-icons/fi";
import { FiEyeOff } from "react-icons/fi";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useMyContext } from "../../context/MyContext";

const Signup = () => {
  const [show1, setshow1] = useState(false);
  const [show2, setshow2] = useState(false);
  const [fName, setfName] = useState("");
  const [lName, setlName] = useState("");
  const [username, setusername] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [password, setpassword] = useState("");
  // email validation
  const [email, setemail] = useState("");
  const [isValid, setIsValid] = useState("");
  const emailRegex = /\S+@\S+\.\S+/;
  const { t, lang } = useMyContext();
  const handleChange = (event) => {
    const value = event.target.value;
    setemail(value);
    setIsValid(emailRegex.test(value));
  };
  const handleClick = (e) => {
    e.preventDefault();
    fetch("https://c866-156-207-219-4.ngrok-free.app/auth/users/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: {
        fName,
        lName,
        email,
        username,
        password,
      },
    }).then((response) => console.log(response));
  };

  // .then(data => {localStorage.setItem('login',JSON.stringify(data));setPost(data)})
  // .then(e => JSON.parse(localStorage.getItem('login')).value=== "email or password is wrong." ? ifloged='wrong' : ifloged='logedin')
  // .then(e => ifloged==='logedin' ? navigate("/") : navigate("/login"))
  // .catch(err => console.error(err));

  return (
    <div
      className="Signup "
      style={lang === "en" ? { direction: "ltr" } : { direction: "rtl" }}
    >
      <div className="top">
        <img src="/images/bigLogo.png" alt="" />
      </div>
      <div
        className="left"
        style={
          lang === "en"
            ? { padding: "70px 0px 70px 70px" }
            : { padding: "70px 70px 70px 0" }
        }
      >
        <div className="head">
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1, ease: "backInOut", delay: 0 }}
            className="gradient-text"
          >
            {t("login.h1")}
            <span>{t("login.span")}</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2, ease: "backInOut", delay: 0 }}
          >
            {t("login.p")}
          </motion.p>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.4, ease: "backInOut", delay: 0 }}
          className="form"
        >
          <div className="item">
            <label>{t("login.first name")}</label>
            <input
              type="text"
              placeholder={t("login.first name h")}
              onChange={(e) => setfName(e.target.value)}
            />
          </div>
          <div className="item">
            <label>{t("login.last name")}</label>
            <input
              type="text"
              placeholder={t("login.last name h")}
              onChange={(e) => setlName(e.target.value)}
            />
          </div>
          <div className="item">
            <label>{t("login.email")}</label>
            <input
              type="text"
              value={email}
              onChange={handleChange}
              placeholder={t("login.email h")}
            />
            {email.length !== 0 && (
              <p
                style={
                  isValid
                    ? { marginBottom: "0", color: "green" }
                    : { marginBottom: "0", color: "red" }
                }
              >
                {isValid ? "Valid email" : "Invalid email"}
              </p>
            )}
          </div>
          <div className="item">
            <label>{t("login.username")}</label>
            <input
              type="text"
              placeholder={t("login.username h")}
              onChange={(e) => setusername(e.target.value)}
            />
          </div>
          <div className="item">
            <label>{t("login.password")}</label>
            <div className="input">
              <input
                type={show1 ? "text" : "password"}
                placeholder={t("login.password h")}
                onChange={(e) => {
                  setpassword(e.target.value);
                }}
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
            
          </div>
          <div className="item">
            <label>{t("login.confirm password")}</label>
            <div className="input">
              <input
                type={show2 ? "text" : "password"}
                placeholder={t("login.password h")}
                onChange={(e) => {
                  setpassword(e.target.value);
                }}
              />
              {show2 ? (
                <div className="icon" onClick={() => setshow2(!show2)}>
                  <FiEyeOff />
                </div>
              ) : (
                <div className="icon" onClick={() => setshow2(!show2)}>
                  <FiEye />
                </div>
              )}
            </div>
          </div>
          <div className="btn" onClick={handleClick}>
            Sign Up
          </div>
          <div className="text">
            Don’t have an account?
            <Link to="/login">
              <span className="gradient-text">Sign In</span>
            </Link>
          </div>
        </motion.div>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1, ease: "backInOut", delay: 0 }}
        className="right"
      >
        <div className="image">
          <img
            src={lang === "en" ? "/images/signup.png" : "/images/signupar.png"}
            alt=""
          />
        </div>
      </motion.div>
    </div>
  );
};

export default Signup;
