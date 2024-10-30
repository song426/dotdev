import React from "react";
import { features } from "../../constants/data";

const Feature_text = () => {
  return (
    <div>
      <div className="flex flex-wrap mt-10 lg:mt-20">
        {features.map((feature, index) => (
          <div key={index} className="w-full ">
            <div className="flex">
              <div className="flex justify-center items-center w-10 h-10 dark:bg-neutral-900 text-indigo-700 rounded-full p-2 mx-6 dark:border-0 light: bg-white light: border light: border-neutral-500">
                <div className="w-full h-full">{feature.icon}</div>
              </div>
              <div>
                <h5 className="mt-1 mb-6 text-xl">{feature.text}</h5>
                <p className="text-md p-2 mb-20 text-neutral-500">
                  {feature.description} {feature.description}
                  {feature.description} {feature.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <button
        className=" absolute left-2/4 translate-x-1/2 font-medium uppercase  border border-indigo-500 rounded-lg p-3
      text-center my-8 tracking-wide"
      >
        Get Start
      </button>
    </div>
  );
};

export default Feature_text;
