import React from "react";

const Feature_section = () => {
  return (
    <div>
      <div className="flex flex-col items-center m-6 text-center mt-20 border-b border-neutral-400">
        <h2 className=" text-4xl sm:text-5xl lg:text-6xl mt-10 lg:mt-20 tracking-wide ">
          Makes it
          <span className="bg-gradient-to-r from-indigo-300 to-indigo-800 text-transparent bg-clip-text">
            &nbsp;easier to write code
          </span>
        </h2>
        <p className=" m-10 text-lg text-center text-neutral-400 max-w-4xl ">
          Use of comments and whitespace effectively. An easy way to make your
          code more readable is to add descriptive comments throughout. Good
          commenting will ensure your code is decipherable by someone else. You
          should add comments to explain what each section of code is doing,
          especially any complex equations or functions. Another important
          aspect of making your code easy to understand for others is to use
          meaningful names for your variables, functions, classes, and modules.
          Meaningful names can convey the purpose, functionality, and scope of
          your code elements, and make them easier to find and use.
        </p>
      </div>
    </div>
  );
};

export default Feature_section;
