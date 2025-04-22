import React from "react";
import styles from "./CustomWallaper.module.css";
import classNames from "classnames";

const AdjustButton = ({ label, type, onClick, disabled }) => {
  return (
    <>
      <form>
        <input type="file" accept="image/*" onChange={onClick} />
        <button className={buttonClass} onClick={onClick} disabled={disabled}>
          {icon}
        </button>
      </form>
    </>
  );
};

export default CustomWallaper;
