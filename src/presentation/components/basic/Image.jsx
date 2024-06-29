import React from "react";
import PropTypes from "prop-types";

const Image = (props) => {
  const { imagenode } = props;
  return <img src={imagenode} />;
};

Image.propTypes = {
  imagenode: PropTypes.node.isRequired,
};

export default Image;
