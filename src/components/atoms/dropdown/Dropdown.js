import React from 'react';
import PropTypes from 'prop-types';
// import styles from './Dropdown.module.scss';
// import Option from '../option/Option';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';

const Dropdown = ({ name, options, handleInputChange, multiple }) => {
  const animatedComponents = makeAnimated();

  const processOutput = (value) => {
    const isArray = Array.isArray(value);
    if (isArray) {
      const processedArr = value.map((item) => item.value);
      handleInputChange({
        name: name,
        value: processedArr,
      });
    } else {
      console.log('Category: ', parseInt(value.value));
      handleInputChange({ name: name, value: value.value });
    }
  };

  return (
    <Select
      closeMenuOnSelect={false}
      components={animatedComponents}
      isMulti={multiple}
      onChange={processOutput}
      options={options}
    />
  );
};

Dropdown.defaultProps = {
  multiple: false,
};

Dropdown.propTypes = {
  options: PropTypes.arrayOf(PropTypes.object).isRequired,
  handleInputChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  multiple: PropTypes.bool,
};

export default Dropdown;
