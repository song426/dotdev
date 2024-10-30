import React from "react";
import { testimonials } from "../../constants/data";

const Testmonial = () => {
  return (
    <div className="mt-20 tracking-wide">
      <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center my-10 lg:my-20">
        What People are Saying
      </h2>
      <div className="flex flex-wrap  justify-center">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="w-full sm:w-1/2 lg:w-1/3 px-4 py-2">
            <div className="dark:bg-neutral-900 light: bg-white rounded-md p-6 text-md border border-neutral-800 dark:font-thin  light: font-normal light: text-black dark:text-neutral-300">
              <p>{testimonial.text.substring(0, 130) + " ..."}</p>

              <div className="flex gap-8 mt-8">
                <img
                  src={testimonial.image}
                  alt=""
                  className="w-12 h-12 rounded-full border border-neutral-300"
                />
                <div>
                  <h6>{testimonial.user}</h6>
                  <span className="text-sm font-normal italic text-neutral-600">
                    {testimonial.company}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testmonial;
