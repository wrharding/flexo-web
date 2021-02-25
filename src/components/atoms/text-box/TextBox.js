import React from 'react';
import PropTypes from 'prop-types';
import styles from './TextBox.module.scss';

const TextBox = ({ name, id, disabled }) => {
  return (
    <textarea disabled={disabled} required name={name} id={id} className={styles.test}>
      sample
    </textarea>
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
};

export default TextBox;
