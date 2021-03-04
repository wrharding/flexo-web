import React from 'react';
import PropTypes from 'prop-types';

const TextBox = ({ name, id, disabled, className, handleInputChange }) => {
  const processInput = (e) => {
    e.preventDefault();
    const target = e.target;
    console.log('e.target.value: ', target.value);
    handleInputChange({ name: name, value: target.value });
  };
  return (
    <textarea
      onChange={processInput}
      disabled={disabled}
      required
      name={name}
      id={id}
      className={className}
    ></textarea>
  );
};

TextBox.defaultProps = {
  disabled: false,
  id: 'textbox',
};

TextBox.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.string,
  disabled: PropTypes.bool,
  className: PropTypes.string,
  handleInputChange: PropTypes.func.isRequired,
};

export default TextBox;
