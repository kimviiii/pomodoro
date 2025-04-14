import React, { useState, useEffect } from "react";
import "./App.css";
import Button from "./components/Button/Button";
import Quote from "./components/Quote/Quote";

function App() {
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

  return (
    <div className="App">
      <h1>Pomodoro Timer</h1>
      <div>
        {minutes.toString().padStart(2, "0")}:
        {seconds.toString().padStart(2, "0")}
      </div>
      <div>
        <Button label="Start" onClick={startTimer} />
        <Button label="Pause" onClick={pauseTimer} />
        <Button label="Reset" onClick={resetTimer} />
      </div>
      <div>
        <Quote />
      </div>
    </div>
  );
}

export default App;
