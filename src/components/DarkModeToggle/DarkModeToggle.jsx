import React, { useRef } from "react";
import styles from "./DarkModeToggle.module.css";
import { FiSun, FiMoon } from "react-icons/fi";

const DarkModeToggle = ({ isDarkMode, setIsDarkMode }) => {
  const handleToggle = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={styles.toggleContainer}>
      <button
        className={styles.toggleButton}
        onClick={handleToggle}
        aria-label={isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
      >
        <FiSun
          className={`${styles.icon} ${styles.sun} ${
            !isDarkMode ? styles.active : ""
          }`}
        />
        <FiMoon
          className={`${styles.icon} ${styles.moon} ${
            isDarkMode ? styles.active : ""
          }`}
        />
      </button>
    </div>
  );
};

export default DarkModeToggle;
