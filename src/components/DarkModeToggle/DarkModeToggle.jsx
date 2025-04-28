import React, { useRef, useState} from "react";
import styles from "./DarkModeToggle.module.css"; // Assuming you have a CSS module for styling

const DarkModeToggle = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);
    const audioRef = useRef(null);
    
    const toggleAudio = () => {
        if (audioRef.current) {
        audioRef.current.volume = 0.6;
        audioRef.current.play();
        }
    };
    
    const handleToggle = () => {
        setIsDarkMode(!isDarkMode);
        toggleAudio();
    };
    
    return (
        <div className={styles.dark}>
        <audio ref={audioRef} loop>
            <source src="public/audio/fireplace-crackle.mp3" type="audio/mp3" />
            Your browser does not support the audio element.
        </audio>
        <button onClick={handleToggle}>
            {isDarkMode ? "Light Mode" : "Dark Mode"}
        </button>
        </div>
    );
    };

export default DarkModeToggle;