import React from "react";
import Card from "./Card";



const Question = ({
  questionIndex,
  setQuestionIndex,
  questions,
  setShowQuestionsPage,
  setShowFinalPage,
  score,
  setScore,
}) => {
  const handleClick = (isCorrect) => {
    if (questionIndex < 9) {
      if (isCorrect) {
        setScore((score) => (score += 100));
      }

      setQuestionIndex((prevIndex) => prevIndex + 1);
    } else {
      if (isCorrect) {
        setScore((score) => (score += 100));
      }

      setShowQuestionsPage(false);
      setShowFinalPage(true);
    }
  };

  return (
    <Card>
      <h1 className="text-center m-8">{questions[questionIndex].questionText}</h1>

      <div className="flex flex-col justify-center items-center">
        {questions[questionIndex].answers.map((answer, i) => (
          <div
            key={i}
            className="p-[10px] bg-black text-white text-base font-bold cursor-pointer m-8 w-[50%] text-center rounded-md hover:bg-[#8ec5fc]"
            onClick={() => handleClick(answer.correctAnswer)}
          >
            <p>{answer.answerText}</p>
          </div>
        ))}
      </div>

      <p className="font-bold absolute bottom-4 left-4">
        Score: <span>{score}</span>
      </p>

      <p className="font-bold absolute bottom-4 right-4">
        Question <span>{questionIndex + 1}</span>/10
      </p>
    </Card>
  );
};

export default Question;
