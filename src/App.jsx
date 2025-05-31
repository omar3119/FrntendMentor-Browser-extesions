import "./App.css";
import Card from "./components/Card/Card";
import BtnNavegation from "./components/BtnNavegation/BtnNavegation";
import Header from "./components/Header/Header";
import data from "./data.json";
import { useState, useContext } from "react";
import { ThemeContext } from "./Context";

function App() {
  const { theme } = useContext(ThemeContext);

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
  };

  const handleToggle = (e) => {
    const id = parseInt(e.target.id);
    const updatedData = filteredData.map(
      (card) => {
        if (card.id === id) {
          return { ...card, isActive: !card.isActive };
        }
        return card;
      }
    );
    setFilteredData(updatedData);
  };
  return (
    <div className={`w-full h-full flex flex-col items-center gap-6 p-4`}>
      <Header />
      <div className="w-full flex flex-col items-center">
        <h1
          className={`text-[32px] font-bold tracking-[2%] mb-4 ${
            theme === "dark" ? "text-[#ffffff] " : "text-[#040918]"
          }`}
        >
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
      <section className="w-full flex justify-center flex-wrap gap-3 border-amber-600">
        {filteredData.map((extesion, index) => (
          <Card
            key={index}
            name={extesion.name}
            description={extesion.description}
            logo={extesion.logo}
            idBtn={extesion.id}
            handleToggle={handleToggle}
            isActive={extesion.isActive}
          />
        ))}
      </section>
    </div>
  );
}

export default App;
