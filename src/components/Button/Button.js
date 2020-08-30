import React from "react";

import styles from "./Button.module.css";

const Button = ({ text, type, handleClick }) => {
  const className = type === undefined ? styles.default : styles[type];
  return (
    <div onClick={handleClick} className={className}>
      {text}
    </div>
  );
};

export default Button;
