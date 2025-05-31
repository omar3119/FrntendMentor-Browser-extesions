import React, { useContext, useState } from "react";
import BtnRemove from "./BtnRemove";
import BtnActive from "./BtnActive";
import { ThemeContext } from "../../Context";

const Card = ({ name, description, logo, isActive, handleToggle, idBtn}) => {

  const { theme } = useContext(ThemeContext);
  return (
    <div
      className={`w-full  p-5 rounded-[20px] flex flex-col gap-6 max-w-[382px] ${
        theme === "dark" ? "bg-[#212636]" : "bg-white"
      }`}
    >
      <div className="w-full flex gap-4">
        <figure>
          <img src={logo} alt="Logo" />
        </figure>
        <div>
          <h1
            className={`text-[18px] font-bold ${
              theme === "dark" ? "text-[#c7c7c7]" : "text-neutral-900"
            } `}
          >
            {name}
          </h1>
          <p
            className={`text-[16px] font-normal  ${
              theme === "dark" ? "text-[#c7c7c7]" : "text-neutral-600"
            }`}
          >
            {description}
          </p>
        </div>
      </div>
      <div className="w-full flex justify-between items-center">
        <BtnRemove />
        <BtnActive isActive={isActive} handleToggle={handleToggle} idBtn={idBtn}/>
      </div>
    </div>
  );
};

export default Card;
