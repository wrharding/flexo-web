import React from 'react';
import PropTypes from 'prop-types';
import styles from './Input.module.scss';

const Input = ({ type, handleInputChange, value, name }) => {
  const processInputChange = (e) => {
    e.preventDefault();
    const target = e.target;
    handleInputChange({ name: name, value: target.value });
  };
  return (
    <input
      type={type}
      className={styles.inputAtom}
      onChange={processInputChange}
      value={value}
      name={name}
    ></input>
  );
};

Input.defaultProps = {};

Input.propTypes = {
  type: PropTypes.string.isRequired,
  value: PropTypes.string,
  handleInputChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
};

export default Input;
