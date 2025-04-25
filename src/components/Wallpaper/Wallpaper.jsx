import React from "react";
import styles from "./Wallpaper.module.css";

function Wallpaper({children, customBackground}) {
    const images = [0, 1, 2, 3];
    const randomNumber = Math.floor(Math.random() * images.length);
    const randomImage = `src/assets/images/background${randomNumber}.jpg`;
    
    const wallpaperStyle = {
        backgroundImage: customBackground ? `url(${customBackground})` : `url(${randomImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
    };

    return (
        <div className={styles.wallpaper} style={wallpaperStyle}>
            {children}
        </div>
    );
}

export default Wallpaper;