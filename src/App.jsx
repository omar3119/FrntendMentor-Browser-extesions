import "./App.css";
import Card from "./components/Card/Card";
import BtnNavegation from "./components/BtnNavegation/BtnNavegation";
import Header from "./components/Header/Header";
import data from "./data.json";
import { useState, useReducer } from "react";
import Counter from "./components/Counter/Counter";
import CounterContext from "./Context/index";

const ThemeContext = createContext();

function App() {
  const [isActiveBtn, setIsActiveBtn] = useState("All");
  const [filteredData, setFilteredData] = useState(data);
  const btns = [
    { id: 1, name: "All" },
    { id: 2, name: "Active" },
    { id: 3, name: "Inactive" },
  ];
  const handleClic = (name) => {
    setIsActiveBtn(name);
    if (name === "All") {
      setFilteredData(data);
    } else if (name === "Active") {
      setFilteredData(data.filter((ext) => ext.isActive));
    } else if (name === "Inactive") {
      setFilteredData(data.filter((ext) => !ext.isActive));
    }
    console.log(filteredData)
  };

  function ThemeProvider({children}){
    const [theme, setTheme] = useState("light");

    const toggleTheme = () => {
      setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
    };

    return(
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
          {children}
      </ThemeContext.Provider>
    )
  }
  return (
    <ThemeProvider>
      <div className="full flex flex-col gap-6 p-4">
        <Header />
        <div className="w-full flex flex-col items-center">
          <h1 className="text-[32px] font-bold tracking-[2%]">
            Extesions List
          </h1>
          <div className="w-full flex justify-center gap-3">
            {btns.map((btn) => (
              <BtnNavegation
                key={btn.id}
                id={btn.id}
                name={btn.name}
                isActive={isActiveBtn === btn.name}
                isClicked={handleClic}
              />
            ))}
          </div>
        </div>
        <section className="w-full flex justify-center flex-wrap gap-3">
          {filteredData.map((extesion, index) => (
            <Card
              key={index}
              name={extesion.name}
              description={extesion.description}
              logo={extesion.logo}
            />
          ))}
        </section>
      </div>
    </ThemeProvider>
  );
}

export default App;
