import React from "react";
import categoriasImage from "../../../assets/categorias.png";
import styles from "./deals.module.scss";

const Deals = () => {
  return (
    <div className={styles["deals-container"]}>
      <img
        src={categoriasImage}
        alt="Categorias"
        className={styles["categorias-img"]}
      />
    </div>
  );
};

export default Deals;
