import React, { useState, useEffect } from "react";
import "./App.css";
import PomodoroTimer from "./components/PomodoroTimer/PomodoroTimer";
import Quote from "./components/Quote/Quote";
import Wallpaper from "./components/Wallpaper/Wallpaper";
import FireSoundPlayer from "./components/FireSoundPlayer/FireSoundPlayer";
import CustomWallpaper from "./components/CustomWallpaper/CustomWallpaper";
import Button from "./components/Button/Button";

function App() {
  const [customBackground, setCustomBackground] = useState(null);

  const handleBackgroundChange = (imageUrl) => {
    setCustomBackground(imageUrl);
  };

  return (
    <Wallpaper customBackground={customBackground}>
      <div className="header">
      <div className="button-container">
        <div className="dark-mode-toggle">
          <Button label="Toggle Dark Mode" onClick={() => {}} />
        </div>
        <div className="background-changer">
          <CustomWallpaper onBackgroundChange={handleBackgroundChange} />
        </div>
          <FireSoundPlayer />
        </div>
      </div>
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
