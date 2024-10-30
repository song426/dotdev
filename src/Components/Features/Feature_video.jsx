import React from "react";
import video1 from "../../assets/video1.mp4";

const Feature_video = () => {
  return (
    <div>
      <div className="video-wrapper flex  md:flex-row mt-10 justify-center">
        <video
          autoPlay
          loop
          muted
          className="rounded-lg w-full md:w-4/5 border border-indigo-700 shadow-sm shadow-indigo-400 my-auto mx-auto md:my-4 md:mx-2"
        >
          <source src={video1} type="video/mp4" />
          현재 브라우저는 영상 재생을 지원하지 않습니다.
        </video>
      </div>
    </div>
  );
};

export default Feature_video;
