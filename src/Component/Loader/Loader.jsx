import React from "react";
import "./Loader.scss";
const Loader = () => {
  return (
    <>
      <div className="loader_container">
        <div className="spinner">
          <span className="loader"></span>
        </div>
      </div>
    </>
  );
};

export default Loader;
