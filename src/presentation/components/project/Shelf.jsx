import React from "react";
import shelfImage from "../../../assets/shelf.png";

const Shelf = () => {
  return (
    <div>
      <img
        src={shelfImage}
        alt="Prateleira"
        style={{
          width: "100%",
          height: "auto",
          marginBottom: "20px",
        }}
      />
    </div>
  );
};

export default Shelf;
