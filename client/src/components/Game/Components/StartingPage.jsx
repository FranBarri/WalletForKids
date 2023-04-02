import React, { useContext, useState } from "react";
import Card from "./Card";

const StartingPage = ({
  
  setShowStartingPage,
  setShowQuestionsPage,
  topScore,
  username,
  setUsername,
}) => {
  const startGame = () => {
    if (username.trim().length > 0) {
      setShowStartingPage(false);
      setShowQuestionsPage(true);
    }
  };

  return (
    <Card>
      <h1 className="text-center m-8 ">Bienvenido al primer juego! </h1>
     

      <button className=" border-0 outline-0 w-[60%] p-4 rounded-3xl cursor-pointer bg-black text-white text-base font-bold block m-8 " onClick={startGame}>
        Let's play
      </button>

      <p className=" bottom-0 outline-0 w-[60%] rounded-3xl block m-8 text-3xl">
        Top score: <span>{topScore}</span>
        
      </p>
    </Card>
  );
};

export default StartingPage;
