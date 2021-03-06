import { useState, useRef, useEffect } from "react";

const QuizLogic = (startingTime = 360) => {
  const [userAnswers, setUserAnswers] = useState([]);
  const [timeRemaining, setTimeRemaining] = useState(startingTime);
  const [isTimeRunning, setIsTimeRunning] = useState(false);
  const textBoxRef = useRef(null);

  const startGame = () => {
    setUserAnswers([]);
    setIsTimeRunning(true);
    setTimeRemaining(startingTime);
    textBoxRef.current.disabled = false;
    textBoxRef.current.focus();
  };

  const endGame = () => {
    setIsTimeRunning(false);
  };

  useEffect(() => {
    if (userAnswers.length < 50 && isTimeRunning && timeRemaining > 0) {
      setTimeout(() => {
        setTimeRemaining(time => time - 1);
      }, 1000);
    } else {
      endGame();
    }
  }, [timeRemaining, isTimeRunning]);

  return {
    userAnswers,
    setUserAnswers,
    timeRemaining,
    isTimeRunning,
    startGame,
    textBoxRef,
    startingTime,
  };
};

export default QuizLogic;
