import React, {useContext} from 'react'
import { ThemeContext } from "../../Context";

function BtnRemove() {
    const { theme } = useContext(ThemeContext);
  
  return (
    <button className={`border-[#545969] border-1 rounded-full py-1 px-3
       cursor-pointer font-medium hover:bg-[#f25c54] hover:text-white hover:border-[#f25c54] transition-colors
      ${theme === "dark"? "text-neutral-200" : "text-neutral-800"}`}>Remove</button>
  )
}

export default BtnRemove