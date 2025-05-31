import { useState } from "react";

function BtnActive({ isActive, handleToggle, idBtn }) {
  return (
    <label className="relative inline-block w-10 h-5">
      <input
        type="checkbox"
        checked={isActive}
        onChange={handleToggle}
        id={idBtn}
        className="peer sr-only"
      />
      <span
        className={`cursor-pointer
          absolute top-0 left-0 right-0 bottom-0  rounded-full peer-checked:bg-[#f25c54]  transition-colors 
          ${isActive ? "" :"bg-gray-600"} 
          
          
        `}
      ></span>
      <span
        className={`
          absolute left-1 top-1 
          h-3 w-3 bg-white rounded-full 
          transition-transform 
          peer-checked:translate-x-5 cursor-pointer
        `}
      ></span>
    </label>
  );
}

export default BtnActive;
