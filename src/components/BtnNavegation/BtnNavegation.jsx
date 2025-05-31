import React, { useContext } from "react";
import { ThemeContext } from "../../Context";

function BtnNavegation({ name, isClicked, isActive, id }) {
  const { theme } = useContext(ThemeContext);

  return (
    <button
      onClick={() => isClicked(name)}
      id={id}
      className={`
  rounded-full px-3 py-1 cursor-pointer text-[16px] font-medium border-2  text-neutral-800
  ${theme === "dark" && !isActive ? "bg-[#2f364b] text-white border-[#545969]" : ""}
  ${!isActive && theme !== "dark" ? "bg-white border-neutral-200" : ""}
  ${isActive ? "bg-[#de473f] border-none text-neutral-900" : ""}
`}
    >
      {name}
    </button>
  );
}

export default BtnNavegation;
