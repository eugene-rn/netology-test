import React from "react";
import "./styles.css";

const Button = ({ onClick, children, ...rest }) => (
  <button className="btn" onClick={onClick} {...rest}>
    {children}
  </button>
);

export default Button;
