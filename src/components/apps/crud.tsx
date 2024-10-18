import React, { useState } from "react";
import Main from "../main/main";
import { QuizzApp, TodoApss, Calcu, WeatherApp } from "./quizzApp.tsx";
const Crud = () => {
  const sampleApps = [
    { title: "Todo Apps" },
    { title: "Calculator" },
    { title: "Quizz Apps" },
    { title: "Weather Apps" },
  ];
  const ownStyle = {
    height: "5rem",
    width: "6rem",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    border: "1px solid black",
    borderRadius: "10px",
  };

  const [todo, openTodo] = useState<boolean>(false);
  const [calculator, opencalculator] = useState<boolean>(false);
  const [quizApp, openquizApp] = useState<boolean>(false);
  const [weattherapp, setweattherapp] = useState<boolean>(true);
  const [selected, setSelected] = useState<String>("");

  const showGames = (game: string) => {
    openTodo(false);
    opencalculator(false);
    openquizApp(false);
    setweattherapp(false);
    setSelected(game);
    if (game === "Todo Apps") {
      openTodo(true);
    }
    if (game === "Calculator") {
      opencalculator(true);
    }
    if (game === "Quizz Apps") {
      openquizApp(true);
    }
    if (game === "Weather Apps") {
      setweattherapp(true);
    }
  };

  return (
    <Main>
      <div className="border-2 flex gap-2 flex-wrap">
        {sampleApps.map((a, i) => (
          <div
            style={ownStyle}
            key={i}
            onClick={() => showGames(a.title)}
            className={selected === a.title ? "bg-[#e0dfdf]" : ""}
          >
            {a.title}
          </div>
        ))}
      </div>
      {todo && (
        <div>
          <div>
            <input type="text" />
          </div>

          <TodoApss />
        </div>
      )}
      {calculator && (
        <div>
          <Calcu />
        </div>
      )}
      {quizApp && (
        <div>
          <QuizzApp />
        </div>
      )}
      {weattherapp && (
        <div>
          <WeatherApp/>
        </div>
      )}
    </Main>
  );
};

export default Crud;
