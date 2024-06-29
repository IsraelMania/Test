import React from "react";
import styles from "./talktous.module.scss";
import talkToUsImage from "../../../assets/talktous.png";

const TalkToUs = () => {
  return (
    <div className={styles.talkToUsContainer}>
      <img
        src={talkToUsImage}
        alt="Fale Conosco"
        className={styles.talkToUsImage}
      />
    </div>
  );
};

export default TalkToUs;
