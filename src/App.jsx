import React, { useState, useEffect } from "react";
import "./App.css";
import PomodoroTimer from "./components/PomodoroTimer/PomodoroTimer";
import Quote from "./components/Quote/Quote";
import Wallpaper from "./components/Wallpaper/Wallpaper";
import FireSoundPlayer from "./components/FireSoundPlayer/FireSoundPlayer";
import CustomWallpaper from "./components/CustomWallpaper/CustomWallpaper";
import Button from "./components/Button/Button";
import DarkModeToggle from "./components/DarkModeToggle/DarkModeToggle";

// Import background images
import background0 from "./assets/images/background0.jpg";
import background1 from "./assets/images/background1.jpg";
import background2 from "./assets/images/background2.jpg";
import background3 from "./assets/images/background3.jpg";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [totalStudyTime, setTotalStudyTime] = useState(() => {
    // Load saved study time from localStorage on initial load
    const savedTime = localStorage.getItem('totalStudyTime');
    return savedTime ? parseInt(savedTime, 10) : 0;
  });
  const [customBackground, setCustomBackground] = useState(() => {
    const images = [background0, background1, background2, background3];
    const randomNumber = Math.floor(Math.random() * images.length);
    return images[randomNumber];
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

  const studyTimeInHours = (seconds) => {
    const hours = seconds / 3600;
    if (Number.isInteger(hours)) {
        return hours.toString(); // Return whole number as string (e.g., "2")
    }
    return hours.toFixed(1);
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
          {/* <span>Total Study Time: {formatTime(totalStudyTime)}</span> */}
          <span>Total Study Time: {studyTimeInHours(totalStudyTime)} hours</span>
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