import React from 'react';
import PropTypes from 'prop-types';
// import styles from './Option.module.scss';

const Option = ({ rawOption: { displayName, value, id, disabled, label } }) => {
  return (
    <option value={value} id={id} disabled={disabled} label={label}>
      {displayName}
    </option>
  );
};

Option.defaultProps = {};

Option.propTypes = {
  rawOption: PropTypes.shape({
    displayName: PropTypes.string.isRequired,
    value: PropTypes.number.isRequired,
    id: PropTypes.string.isRequired,
    disabled: PropTypes.bool,
    label: PropTypes.string,
  }).isRequired,
};

export default Option;
