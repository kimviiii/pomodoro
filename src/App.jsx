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
  const [totalStudyTime, setTotalStudyTime] = useState(() => {
    // Load saved study time from localStorage on initial load
    const savedTime = localStorage.getItem('totalStudyTime');
    return savedTime ? parseInt(savedTime, 10) : 0;
  });
  const [customBackground, setCustomBackground] = useState(() => {
    const images = [0, 1, 2, 3];
    const randomNumber = Math.floor(Math.random() * images.length);
    return `src/assets/images/background${randomNumber}.jpg`;
  });

  // Save total study time to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('totalStudyTime', totalStudyTime.toString());
  }, [totalStudyTime]);

  const handleStudyTimeUpdate = (seconds) => {
    setTotalStudyTime(prevTime => prevTime + seconds);
  };

  const handleBackgroundChange = (imageUrl) => {
    setCustomBackground(imageUrl);
  };

  // Helper function to format time in HH:MM:SS
  const formatTime = (seconds) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    
    return `${hours > 0 ? hours.toString().padStart(2, "0") + ":" : ""}${minutes.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };

  // Function to reset total study time
  const resetTotalStudyTime = () => {
    setTotalStudyTime(0);
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
        <div className="study-time">
          <span>Total Study Time: {formatTime(totalStudyTime)}</span>
          <button 
            className="reset-time-btn" 
            onClick={resetTotalStudyTime}
            title="Reset study time counter"
          >
            ↺
          </button>
        </div>
      </div>
      <div className="App">
        <PomodoroTimer isDarkMode={isDarkMode} onStudyTimeUpdate={handleStudyTimeUpdate} />
        <div>
          <Quote />
        </div>
      </div>
    </Wallpaper>
  );
}

export default App;