import React from "react";
import Main from "../main/main";
import QuizzApp from './quizzApp.tsx'
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

  const showGames = (game: string) => {
    alert(game);
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

      <div>
        <QuizzApp />
      </div>
    </Main>
  );
};

export default Crud;
