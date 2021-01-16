import React from "react";

import styles from "./Button.module.css";

const Button = ({ text, btnStyle, handleClick, type }) => {
  const className = btnStyle === undefined ? styles.default : styles[btnStyle];
  return (
    <button type={type} onClick={handleClick} className={className}>{text}</button>
  );
};

export default Button;
