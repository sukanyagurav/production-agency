import React from "react";

const Heading2 = ({ children,classes ='' }) => {
  return (
    <h3 className={`text-2xl font-semibold text-[#EF001C] uppercase px-16 mb-4  relative before:bg-[#EF001C] before:w-16 before:h-[1px] before:absolute before:-left-3 before:top-3  gap-6 ${classes}` }>
      {children}
    </h3>
  );
};

export default Heading2;
