import React, { useState } from "react";
import Main from "../main/main";
import QuizzApp from "./quizzApp.tsx";
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
    display: "flex", // Corrected property name
    justifyContent: "center",
    alignItems: "center",
    border: "2px solid red",
    borderRadius: "10px",
  };

  const [todo, openTodo] = useState<any>(false);
  const [calculator, opencalculator] = useState<any>(false);
  const [quizApp, openquizApp] = useState<any>(false);
  const [weattherapp, setweattherapp] = useState<any>(false);

  const showGames = (game: string) => {
    openTodo(false);
    opencalculator(false);
    openquizApp(false);
    setweattherapp(false);
    if (game === "Todo Apps") {
      openTodo(true);
    }
    if (game === "Calculator") {
      opencalculator(true);
    }
    if (game === "Quizz Apps") {
      openquizApp(true);
    }
    if (game === "setweattherapp") {
      setweattherapp(true);
    }
  };

  return (
    <Main>
      <div className="border-2 grid gap-2 grid-cols-2">
        {sampleApps.map((a, i) => (
          <div style={ownStyle} key={i} onClick={() => showGames(a.title)}>
            {a.title}
          </div>
        ))}
      </div>
      {todo && <div>todo</div>}
      {calculator && <div>calcu</div>}
      {quizApp && (
        <div>
          <QuizzApp />
        </div>
      )}
      {weattherapp && <div>weatther</div>}
    </Main>
  );
};

export default Crud;
