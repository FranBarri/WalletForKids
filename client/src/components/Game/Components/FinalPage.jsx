import React from "react";
import Card from "./Card";


const FinalPage = ({
  score,
  setShowFinalPage,
  setShowStartingPage,
  topScore,
  setTopScore,
  setScore,
  username,
  setUsername,
}) => {
  const handleClick = () => {
    if (score > topScore) {
      setTopScore(score);
    }

    setShowFinalPage(false);
    setShowStartingPage(true);
    setScore(0);
    setUsername("");
  };

  return (
    <Card>
      <h1 className="m-8 font-bold ">You  the game, {username}!</h1>

      <h3 className="text-center">Your final score is:</h3>

      <h3 className="final_score">{score}</h3>

      <button className="block m-20 outline-0 cursor-pointer text-base font-bold p-[10px] bg-black text-white" onClick={handleClick}>
        Play Again
      </button>
    </Card>
  );
};

export default FinalPage;
