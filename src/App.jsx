import React, { useState, useEffect } from "react";
import "./App.css";
import PomodoroTimer from "./components/PomodoroTimer/PomodoroTimer";
import Quote from "./components/Quote/Quote";
import Wallpaper from "./components/Wallpaper/Wallpaper";
import FireSoundPlayer from "./components/FireSoundPlayer/FireSoundPlayer";
import CustomWallpaper from "./components/CustomWallpaper/CustomWallpaper";
import Button from "./components/Button/Button";
import DarkModeToggle from "./components/DarkModeToggle/DarkModeToggle";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [customBackground, setCustomBackground] = useState(() => {
    const images = [0, 1, 2, 3];
    const randomNumber = Math.floor(Math.random() * images.length);
    return `src/assets/images/background${randomNumber}.jpg`;
  });

  const handleBackgroundChange = (imageUrl) => {
    setCustomBackground(imageUrl);
  };

  return (
    <Wallpaper customBackground={customBackground}>
      <div className="header">
        <div className="button-container">
          <div className="dark-mode-toggle">
            <DarkModeToggle isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
          </div>
          <div className="background-changer">
            <CustomWallpaper onBackgroundChange={handleBackgroundChange} />
          </div>
          <FireSoundPlayer />
        </div>
      </div>
      <div className="App">
        <PomodoroTimer isDarkMode={isDarkMode} />
        <div>
          <Quote />
        </div>
      </div>
    </Wallpaper>
  );
}

export default App;