import { Link, NavLink } from "react-router-dom";
import "./navLogged.scss";
import React, { useState } from "react";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { useMyContext } from "../../context/MyContext";

const NavLogged = () => {
  const [open, setopen] = useState(false)
  const { lang, setlang, t, i18n } = useMyContext();
  return (
    <>
      <div className="NavLogged " style={open ? { display: 'none' } : {}}>
        <div className="left">
          <Link to='/'>
            <div className="image">
              <img src="/images/Logo.png" alt="" />
            </div>
          </Link>
          <ul>
            <NavLink to="/">
              <li>{t("navlogged.Home")}</li>
            </NavLink>
            <li>{t("navlogged.Integration")}</li>
            <li>{t("navlogged.Websites")}</li>
            <NavLink to="/main/packages">
              <li>{t("navlogged.Packages")}</li>
            </NavLink>
            <li onClick={() => {setlang(lang === "ar" ? "en" : "ar"),i18n.changeLanguage(lang === "en" ? "ar" : "en");}}>
              {lang === "en" ? "ar" : "en"}
            </li>
          </ul>
        </div>
        <div className="right">
          <div className="image">
            <img src="../../../public/images/avatar.png" alt="" />
          </div>
          <div className="menu" onClick={() => setopen(!open)}>
            <HiOutlineMenuAlt3 />
          </div>
        </div>
      </div>
      <div className="slideDown" style={open ? { top: '0' } : { top: '-100vh' }}>
        <ul className="slideDown-nav" style={open ? { display: 'flex', opacity: '1', transition: '1s ease-in-out 1s' } : { transition: 'none' }}>
          <div className="menu" onClick={() => setopen(!open)}>
            <HiOutlineMenuAlt3 />
          </div>
          <NavLink to="/">
            <li className="nav-item" onClick={() => setopen(false)}>
              <a href="" className="nav-link">{t("navlogged.Home")}</a>
            </li>
          </NavLink>
          <li className="nav-item" onClick={() => setopen(false)}>
            <a href="" className="nav-link">{t("navlogged.Integration")}</a>
          </li>
          <li className="nav-item" onClick={() => setopen(false)}>
            <a href="" className="nav-link">{t("navlogged.Websites")}</a>
          </li>
          <NavLink to="/main/packages">
            <li className="nav-item" onClick={() => setopen(false)}>
              <a href="" className="nav-link">{t("navlogged.Packages")}</a>
            </li>
          </NavLink>
        </ul>
      </div>
    </>
  );
};

export default NavLogged;
