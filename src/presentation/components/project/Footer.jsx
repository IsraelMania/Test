import React from "react";
import styles from "./footer.module.scss";
import footerImage from "../../../assets/footer.png";

const Footer = () => {
  return (
    <div className={styles.footerContainer}>
      <img src={footerImage} alt="Rodapé" className={styles.footerImage} />
    </div>
  );
};

export default Footer;
