import React from "react";
import styles from "./banner.module.scss";
import bannerImage from "../../../assets/banner.png";

const Banner = () => {
  return (
    <div className={styles.bannerContainer}>
      <img src={bannerImage} alt="Banner" className={styles.bannerImage} />
    </div>
  );
};

export default Banner;
