import React from 'react';
import PropTypes from 'prop-types';
import ReactDropdown from 'react-dropdown';

const Dropdown = ({ options, onChange, placeholder, value }) =>
  <ReactDropdown
    options={ options }
    onChange={ onChange }
    value={ value }
    placeholder={ placeholder }
  />

Dropdown.propTypes = {
  options: PropTypes.array.isRequired,
  onChange: PropTypes.func.isRequired,
  date: PropTypes.number.isRequired,
  placeholder: PropTypes.string.isRequired,
};

export default Dropdown;
