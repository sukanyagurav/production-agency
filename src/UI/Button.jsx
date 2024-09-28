import React from "react";

const Button = ({ text, icon,classes }) => {
  return (
    <button className={`bg-[#EF001C] shadow-lg flex items-center gap-3 transition-all duration-300 text-[0.7rem] text-white p-1.5 px-4 rounded-full uppercase border-2 border-transparent hover:border-[#EF001C] hover:bg-white hover:text-[#EF001C] ${classes} `}>
      {text && <span cla>{text}</span>}
      {icon && icon}
    </button>
  );
};

export default Button;
