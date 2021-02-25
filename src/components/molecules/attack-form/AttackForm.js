import React from 'react';
// import PropTypes from 'prop-types'
import styles from './AttackForm.module.scss';
import Dropdown from '../../atoms/dropdown/Dropdown';
import TextBox from '../../atoms/text-box/TextBox';

// eslint-disable-next-line react/prop-types
const AttackForm = ({ targetOptions, categoryOptions }) => {
  return (
    <form className={styles.test}>
      <Dropdown name="Target" rawOptions={targetOptions} />
      <Dropdown name="Category" rawOptions={categoryOptions} />
      <TextBox name="Details" />
    </form>
  );
};

AttackForm.defaultProps = {};

// AttackForm.propTypes = {};

export default AttackForm;
