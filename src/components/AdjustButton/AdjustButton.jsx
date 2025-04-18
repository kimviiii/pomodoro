import React from "react";
import styles from "./AdjustButton.module.css";
import classNames from 'classnames';

const AdjustButton = ({label, type , onClick }) => {

    const buttonClass = classNames(
        styles.button,
        {
            [styles.increase]: type === 'increase',
            [styles.decrease]: type === 'decrease',
        }
    );

    return (
        <button className={buttonClass} onClick={onClick}>
            {label}
        </button>
    );
};

export default AdjustButton;