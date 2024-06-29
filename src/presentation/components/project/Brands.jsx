import React from "react";
import styles from "./brands.module.scss";
import brandsImage from "../../../assets/brands.png";

const Brands = () => {
  return (
    <div className={styles.brandsContainer}>
      <img src={brandsImage} alt="Marcas" className={styles.brandsImage} />
    </div>
  );
};

export default Brands;
