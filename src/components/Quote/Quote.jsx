import React, { useState, useEffect } from 'react';
import styles from "./Quote.module.css";

function Quote() {
    const [quote, setQuote] = useState("Loading quote...");
    const [error, setError] = useState(null);

    // Local quotes array
    const quotes = [
        { q: "The secret of getting ahead is getting started.", a: "Mark Twain" },
        { q: "Don't watch the clock; do what it does. Keep going.", a: "Sam Levenson" },
        { q: "The most effective way to do it, is to do it.", a: "Amelia Earhart" },
        { q: "You don't have to be great to start, but you have to start to be great.", a: "Zig Ziglar" },
        { q: "The best way to predict the future is to create it.", a: "Peter Drucker" },
        { q: "The only way to do great work is to love what you do.", a: "Steve Jobs" },
        { q: "Productivity is never an accident. It is always the result of a commitment to excellence, intelligent planning, and focused effort.", a: "Paul J. Meyer" },
        { q: "The key is not to prioritize what's on your schedule, but to schedule your priorities.", a: "Stephen Covey" },
        { q: "Focus on being productive instead of busy.", a: "Tim Ferriss" },
        { q: "Time is what we want most, but what we use worst.", a: "William Penn" },
        { q: "Your time is limited, don't waste it living someone else's life.", a: "Steve Jobs" },
        { q: "It's not knowing what to do, it's doing what you know.", a: "Tony Robbins" }
    ];

    const getQuote = () => {
        try {
            const randomIndex = Math.floor(Math.random() * quotes.length);
            const randomQuote = quotes[randomIndex];
            const quoteText = `"${randomQuote.q}" - ${randomQuote.a}`;
            setQuote(quoteText);
            setError(null);
        } catch (err) {
            console.error("Error selecting quote:", err);
            setQuote("No quote available at the moment.");
            setError(err.message);
        }
    };

    useEffect(() => {
        getQuote(); // initial quote
        const intervalId = setInterval(() => {
            getQuote(); // new quote every 10 minutes
        }, 600000); 
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