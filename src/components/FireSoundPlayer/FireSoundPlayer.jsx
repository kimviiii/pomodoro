import React, { useRef, useState } from "react";
import styles from "./FireSoundPlayer.module.css";
import fireplaceCrackle from "/public/audio/fireplace-crackle.mp3";
import { AiFillFire, AiOutlineFire } from "react-icons/ai";

const FireSoundPlayer = () => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const toggleAudio = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className={styles.fire}>
      <audio ref={audioRef} loop>
        <source src={fireplaceCrackle} type="audio/mp3" />
        Your browser does not support the audio element.
      </audio>
      <button 
        onClick={toggleAudio} 
        className={styles.fireButton}
        aria-label={isPlaying ? "Pause fire sound" : "Play fire sound"}
      >
        {isPlaying ? (
          <AiFillFire className={`${styles.fireIcon} ${styles.active}`} />
        ) : (
          <AiOutlineFire className={styles.fireIcon} />
        )}
      </button>
    </div>
  );
};

export default FireSoundPlayer;
