import React from "react";
import styles from "./AdjustButton.module.css";
import classNames from 'classnames';

const AdjustButton = ({label, type, onClick, disabled }) => {

    const buttonClass = classNames(
        styles.button,
        {
            [styles.increase]: type === 'increase',
            [styles.decrease]: type === 'decrease',
        }
    );
    
    const icon = type === 'increase' ? '➕' : '➖';
    // const icon = type === 'increase' ? '↑' : '↓';

    return (
        <button className={buttonClass} onClick={onClick} disabled={disabled}>
            {icon}
        </button>
    );
};

export default AdjustButton;