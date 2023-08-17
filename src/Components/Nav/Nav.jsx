import React, { useState } from "react";
import "./nav.scss";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { motion } from "framer-motion";
import { Link, NavLink } from "react-router-dom";
import { useMyContext } from "../../context/MyContext";

const Nav = () => {
  const [open, setopen] = useState(false);
  const { lang, setlang, t, i18n } = useMyContext();
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1.5, ease: "backInOut", delay: 0 }}
        className="Nav cont"
        style={open ? { position: "fixed" } : {}}
      >
        <div className="left">
          <Link to='/main/home'>
            <div className="image">
              <img src="/images/Logo.png" alt="" />
            </div>
          </Link>
          <ul>
            <NavLink to="/main/home">
              <li>{t("nav.Home")}</li>
            </NavLink>
            <li>{t("nav.Plugins")}</li>
            <li>{t("nav.About us")}</li>
            <li>{t("nav.Contact us")}</li>
            <NavLink to="/main/packages">
              <li>{t("nav.Packages")}</li>
            </NavLink>
            <li
              onClick={() => {
                setlang(lang === "ar" ? "en" : "ar"),
                  i18n.changeLanguage(lang === "en" ? "ar" : "en");
              }}
            >
              {lang === "en" ? "ar" : "en"}
            </li>
          </ul>
        </div>
        <NavLink to="/login">
          <div className="right">
            <span className="gradient-text">{t("nav.startNow")}</span>
          </div>
        </NavLink>
        <div className="menu" onClick={() => setopen(!open)}>
          <HiOutlineMenuAlt3 />
        </div>
      </motion.div>
      <div
        className="slideDown"
        style={open ? { top: "0" } : { top: "-100vh" }}
      >
        <ul
          className="slideDown-nav"
          style={
            open
              ? {
                  display: "flex",
                  opacity: "1",
                  transition: "1s ease-in-out 1s",
                }
              : { transition: "none" }
          }
        >
          <NavLink to="/main/home">
            <li className="nav-item" onClick={() => setopen(false)}>
              <a href="" className="nav-link">
              {t("nav.Home")}
              </a>
            </li>
          </NavLink>
          <li className="nav-item" onClick={() => setopen(false)}>
            <a href="" className="nav-link">
            {t("nav.Plugins")}
            </a>
          </li>
          <li className="nav-item" onClick={() => setopen(false)}>
            <a href="" className="nav-link">
            {t("nav.About us")}
            </a>
          </li>
          <li className="nav-item" onClick={() => setopen(false)}>
            <a href="" className="nav-link">
            {t("nav.Contact us")}
            </a>
          </li>
          <NavLink to="/main/packages">
            <li className="nav-item" onClick={() => setopen(false)}>
              <a href="" className="nav-link">
              {t("nav.Packages")}
              </a>
            </li>
          </NavLink>
          <NavLink to="/login">
            <div className="right" onClick={() => setopen(false)}>
              <span className="gradient-text">{t("nav.startNow")}</span>
            </div>
          </NavLink>
        </ul>
      </div>
    </>
  );
};

export default Nav;
