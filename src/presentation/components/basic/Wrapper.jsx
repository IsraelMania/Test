import React from "react";
import PropTypes from "prop-types";
import styles from "./wrapper.module.scss";

const Wrapper = (props) => {
  const { children } = props;
  return <div className={styles.wrapper}>{children}</div>;
};

Wrapper.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Wrapper;
