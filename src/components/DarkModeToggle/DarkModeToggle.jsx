import React, { useRef } from "react";
import styles from "./DarkModeToggle.module.css";

const DarkModeToggle = ({ isDarkMode, setIsDarkMode }) => {
  const handleToggle = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={styles.dark}>
      <button onClick={handleToggle}>
        {isDarkMode ? "Light Mode" : "Dark Mode"}
      </button>
    </div>
  );
};

export default DarkModeToggle;
