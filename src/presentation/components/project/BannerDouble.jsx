import React from "react";
import bannerDouble1Image from "../../../assets/bannerdouble1.png";
import bannerDouble2Image from "../../../assets/bannerdouble2.png";

const BannerDouble = () => {
  return (
    <div style={{ display: "flex" }}>
      <img
        src={bannerDouble1Image}
        alt="Banner Double 1"
        style={{
          width: "50%",
          height: "auto",
          marginRight: "10px",
        }}
      />
      <img
        src={bannerDouble2Image}
        alt="Banner Double 2"
        style={{
          width: "50%",
          height: "auto",
        }}
      />
    </div>
  );
};

export default BannerDouble;
