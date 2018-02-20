import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

const Button = ({ text, onClick }) =>
  <div className="button" onClick={ onClick }>
    <p> { text } </p>
  </div>;

Button.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Button;
