import React, { useState, useEffect } from "react";
import "./App.css";
import PomodoroTimer from "./components/PomodoroTimer/PomodoroTimer";
import Quote from "./components/Quote/Quote";
import Wallpaper from "./components/Wallpaper/Wallpaper";
import AdjustButton from "./components/AdjustButton/AdjustButton";

function App() {
  return (
    <Wallpaper>
      <div className="App">
        <PomodoroTimer />
        <div>
          <Quote />
        </div>
      </div>
    </Wallpaper>
  );
}

export default App;
