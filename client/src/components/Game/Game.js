import { useEffect, useState } from "react";
import "./Game.css";
import FinalPage from "./Components/FinalPage";
import QuestionsPage from "./Components/QuestionsPage";
import StartingPage from "./Components/StartingPage";

export const Game=()=> {
  const [username, setUsername] = useState("");

  const [score, setScore] = useState(0);
  const [topScore, setTopScore] = useState(0);

  const [showStartingPage, setShowStartingPage] = useState(true);
  const [showQuestionsPage, setShowQuestionsPage] = useState(false);
  const [showFinalPage, setShowFinalPage] = useState(false);

  return (
    <>
      {showStartingPage && (
        <StartingPage
          setShowStartingPage={setShowStartingPage}
          setShowQuestionsPage={setShowQuestionsPage}
          topScore={topScore}
          username={username}
          setUsername={setUsername}
        />
      )}
      {showQuestionsPage && (
        <QuestionsPage
          score={score}
          setScore={setScore}
          setShowQuestionsPage={setShowQuestionsPage}
          setShowFinalPage={setShowFinalPage}
        />
      )}
      {showFinalPage && (
        <FinalPage
          score={score}
          topScore={topScore}
          setTopScore={setTopScore}
          setShowStartingPage={setShowStartingPage}
          setShowFinalPage={setShowFinalPage}
          setScore={setScore}
          username={username}
          setUsername={setUsername}
        />
      )}
    </>
  );
}

