import React, { useState, useEffect } from 'react';
import styles from "./Quote.module.css";

function Quote() {
    const [quote, setQuote] = useState("Loading quote...");
    const [error, setError] = useState(null);

    const getQuote = async () => {
        const quoteURL = "/api/random";
        try {
            const response = await fetch(quoteURL);
            if (!response.ok) {
                if(response.status === 429) {
                    console.log("Rate limit exceeded. Please try again later.");
                }
                throw new Error("Network response was not ok");
            }
            const data = await response.json();
            const quoteText = `"${data[0].q}" - ${data[0].a}`;
            setQuote(quoteText);
            setError(null);
        } catch (err) {
            console.error("Error fetching quote:", err);
            setQuote("No quote available at the moment.");
            setError(err.message);
        }
    };

    useEffect(() => {
        getQuote(); // initial fetch
        const intervalId = setInterval(() => {
            getQuote(); // call getQuote every 10 seconds
        }, 600000); // 10 minutes
        return () => {clearInterval(intervalId); // cleanup on unmount
        };
    }, []);

    return (
        <div className={styles.quote}>
            <p>{quote}</p>
            {error && <p style={{ color: 'red' }}>Error: {error}</p>}
        </div>
    );
}

export default Quote;