import React from "react";
import Display from "../basic/Display";
import styles from "./topbar.module.scss";

const TopBar = () => {
  return (
    <div className={styles.wrapper}>
      <Display size="_16" color="colorwhite" text="Pague com" />
      <Display size="_16" color="colorwhite" text="PIX" weight="_700" />
      <Display
        size="_16"
        color="colorwhite"
        text="e ganhe mais de 5% de desconto. Aproveite!"
      />
    </div>
  );
};

export default TopBar;
