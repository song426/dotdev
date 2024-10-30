import React from "react";
import Feature_video from "./Feature_video";
import Feature_section from "./Feature_section";
import Feature_text from "./Feature_text";

const index = () => {
  return (
    <div className="featueres">
      <div className="container">
        <Feature_video />
        <Feature_section />
        <Feature_text />
      </div>
    </div>
  );
};

export default index;
