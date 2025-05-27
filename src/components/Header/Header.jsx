import { useState, useEffect } from "react";

function Header() {
  // const [theme, setTheme] = useState("light");

  // useEffect(() => {
  //   if (theme === "dark") {
  //     document.documentElement.classList.add("dark");
  //   } else {
  //     document.documentElement.classList.remove("dark");
  //   }
  // }, [theme]);

  // const handleChangeTheme = () => {
  //   {
  //     setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  //   }
    return (
      <header className="w-full flex  justify-between bg-[#212636] py-2 px-4 rounded-[10px]">
        <div>
          <img src="/images/logo.svg" alt="" />
        </div>
        <div
          className="bg-[#2f364b] rounded-[10px] p-2 cursor-pointer"
          // onClick={handleChangeTheme}
        >
          <img className="text-white" src="/images/icon-sun.svg" alt="" />
        </div>
      </header>
    );
  };

export default Header;
