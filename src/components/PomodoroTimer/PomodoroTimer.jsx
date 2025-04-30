import React, { useState, useEffect } from "react";
import Button from "../Button/Button";
import styles from "./PomodoroTimer.module.css";
import AdjustButton from "../AdjustButton/AdjustButton";

function PomodoroTimer({ isDarkMode }) {
  const [minutes, setMinutes] = useState(25);
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let interval = null;
    if (isActive && (minutes > 0 || seconds > 0)) {
      interval = setInterval(() => {
        if (seconds === 0) {
          if (minutes === 0) {
            clearInterval(interval);
          } else {
            setMinutes(minutes - 1);
            setSeconds(59);
          }
        } else {
          setSeconds(seconds - 1);
        }
      }, 1000);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, minutes, seconds]);

  useEffect(() => {
    if (isActive) {
      document.title = `${minutes.toString().padStart(2, "0")}:${seconds
        .toString()
        .padStart(2, "0")}`;
    } else {
      document.title = "Pomodoro Timer";
    }
  }, [isActive, minutes, seconds]);

  const startTimer = () => {
    setIsActive(true);
  };

  const pauseTimer = () => {
    setIsActive(false);
  };

  const resetTimer = () => {
    setIsActive(false);
    setMinutes(25);
    setSeconds(0);
  };

  const increaseTime = () => {
    if (!isActive && seconds === 0) {
      setMinutes((prevMinutes) => Math.min(prevMinutes + 5, 60)); // Limit to 60 minutes
    }
  };

  const decreaseTime = () => {
    if (!isActive && seconds === 0) {
      setMinutes((prevMinutes) => Math.max(prevMinutes - 5, 5)); // Limit to 1 minute
    }
  };

  return (
    <div className={`${styles.PomodoroTimer} ${isDarkMode ? styles.dark : ""}`}>
      <h1>Pomodoro Timer</h1>
      <div className={styles.timer}>
        {minutes.toString().padStart(2, "0")}:
        {seconds.toString().padStart(2, "0")}
      </div>
      <div className={styles.adjustButtons}>
        <AdjustButton
          label="Increase"
          type="increase"
          onClick={increaseTime}
          disabled={isActive || seconds !== 0}
        />
        <AdjustButton
          label="Decrease"
          type="decrease"
          onClick={decreaseTime}
          disabled={isActive || seconds !== 0}
        />
      </div>
      <div>
        <Button label="Start" onClick={startTimer} />
        <Button label="Pause" onClick={pauseTimer} />
        <Button label="Reset" onClick={resetTimer} />
      </div>
    </div>
  );
}

export default PomodoroTimer;
