import React from "react";
import styles from "./testimony.module.scss";
import testimonyImage from "../../../assets/testimony.png";

const Testimony = () => {
  return (
    <div className={styles.testimonyContainer}>
      <img
        src={testimonyImage}
        alt="Depoimento"
        className={styles.testimonyImage}
      />
    </div>
  );
};

export default Testimony;
