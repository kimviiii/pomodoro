import React from "react";
import styles from "./Quote.module.css";

const quote = "The only limit to our realirow is our doubts of today.";
const name = "Franklin D. Roosevelt";

const q = "${https://zenquotes.io/api/random}";

const Quote = () => {
    return (
        <>
            <p className={styles.quote}>{quote}</p>
            <button className={styles.button}>Get Inspired</button>
        </>
    );
};

export default Quote;