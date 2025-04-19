import React  from "react";
import styles from "./Wallpaper.module.css";

const images = [0, 1, 2, 3];
const randomNumber = Math.floor(Math.random() * images.length);
const randomImage = `src/assets/images/background${randomNumber}.jpg`;
console.log(randomImage);

const wallaperStyle = {
    backgroundImage: `url(${randomImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
};

function Wallpaper({children}) {
    return (
        <div className={styles.wallpaper} style={wallaperStyle}>
            {children}
        </div>
    );
}

export default Wallpaper;