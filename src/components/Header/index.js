import React from "react";
import PropTypes from 'prop-types';
import './styles.css';

const Header = ({ title }) => <header className="title">{title}</header>;

Header.propTypes = {
  title: PropTypes.string.isRequired,
}

export default Header;
