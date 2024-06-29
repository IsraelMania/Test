import React from "react";
import PropTypes from "prop-types";
import styles from "./display.module.scss";

const Display = (props) => {
  const { text, color = "colorblack", weight = "_400", size = "_14" } = props;

  return (
    <p
      className={`${styles.family} ${styles[color]} ${styles[weight]} ${styles[size]}`}
    >
      {text}
    </p>
  );
};

Display.propTypes = {
  text: PropTypes.string.isRequired,
  color: PropTypes.string,
  weight: PropTypes.number,
  size: PropTypes.number,
};

export default Display;
