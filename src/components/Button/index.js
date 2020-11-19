import React from "react";

import styles from "./Button.module.css";

const Button = ({ text, type, handleClick }) => {
  const className = type === undefined ? styles.default : styles[type];
  return (
    <button className={className}>{text}</button>
  );
};

export default Button;
