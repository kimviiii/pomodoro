import React, { useRef, useState } from "react";
import styles from "./FireSoundPlayer.module.css"; // Assuming you have a CSS module for styling

const FireSoundPlayer = () => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const toggleAudio = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
    //   audioRef.current.volume = 0.6;
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className={styles.fire}>
      <audio ref={audioRef} loop>
        <source src="public/audio/fireplace-crackle.mp3" type="audio/mp3" />
        Your browser does not support the audio element.
      </audio>
      <button onClick={toggleAudio}>
        {isPlaying ? "Pause Fire Sound" : "Play Fire Sound"}
      </button>
      {/* Attribution if required, e.g., for Zapsplat or Freesoundslibrary */}

    </div>
  );
};

export default FireSoundPlayer;
