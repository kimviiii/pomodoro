import React from "react";
import styles from "./Button.module.css";

const Button = ({label, onclick}) => {
    return (
        <button className={styles.button} onClick={onclick}>
            {label}
        </button>
    );
};

export default Button;