import React  from "react";
import styles from "./Wallpaper.module.css";

function Wallpaper({children}) {
    return (
        <div className={styles.wallpaper}>
            {children}
        </div>
    );
}

export default Wallpaper;