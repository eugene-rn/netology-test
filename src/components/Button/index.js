import React from "react";
import PropTypes from 'prop-types';
import "./styles.css";

const Button = ({ onClick, children, className, ...rest }) => (
  <button className={`btn ${className}`} onClick={onClick} {...rest}>
    {children}
  </button>
);

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  children: PropTypes.string.isRequired,
  className: PropTypes.string,
}

Button.defaultProps = {
  className: "",
}

export default Button;
