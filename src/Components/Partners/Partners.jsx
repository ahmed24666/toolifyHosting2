import React from "react";
import { motion } from "framer-motion";
import "./partner.scss";
import { useMyContext } from "../../context/MyContext";

const Partners = ({ aboutRef }) => {
  const { t } = useMyContext();

  return (
    <motion.dev
      ref={aboutRef}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, ease: "backInOut", delay: 0 }}
      className="Partners"
    >
      <div className="text">
        <p>
        {t("partners.p")}
        </p>
      </div>
      <div className="images">
        {[...Array(50)].map((_,i) => {
          return (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5, ease: "backInOut", delay: (i + 1 ) / 10 }}
              className="image"
            >
              <img src="../../../public/images/bigLogo.png" alt="" />
            </motion.div>
          );
        })}
      </div>
    </motion.dev>
  );
};

export default Partners;
