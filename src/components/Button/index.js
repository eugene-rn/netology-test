import React from "react";
import "./styles.css";

const Button = ({ onClick, children, className, ...rest }) => (
  <button className={`btn ${className ? className : ""}`} onClick={onClick} {...rest}>
    {children}
  </button>
);

export default Button;
