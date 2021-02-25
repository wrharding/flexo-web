import React from 'react';
import PropTypes from 'prop-types';
// import styles from './Dropdown.module.scss';
import Option from '../option/Option';

const Dropdown = ({ rawOptions, name }) => {
  const options = rawOptions.map((item, index) => {
    const newItem = item;
    newItem.id = index;
    return <Option rawOption={newItem} />;
  });
  return (
    <select multiple name={name} required>
      {options}
    </select>
  );
};

// Dropdown.defaultProps = {};

Dropdown.propTypes = {
  rawOptions: PropTypes.arrayOf(PropTypes.object).isRequired,
  name: PropTypes.string.isRequired,
};

export default Dropdown;
