import React from "react";
import styles from "./Wallpaper.module.css";

function Wallpaper({ children, customBackground }) {
  const wallpaperStyle = {
    backgroundImage: `url(${customBackground})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  };

  return (
    <div className={styles.wallpaper} style={wallpaperStyle}>
      {children}
    </div>
  );
}

export default Wallpaper;