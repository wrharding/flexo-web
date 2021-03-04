import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './AttackForm.module.scss';
import Dropdown from '../../atoms/dropdown/Dropdown';
import TextBox from '../../atoms/text-box/TextBox';

// eslint-disable-next-line react/prop-types
const AttackForm = ({ targetOptions, categoryOptions, teamOptions, handleSubmit }) => {
  const [formData, setFormData] = useState({
    teams: null,
    targets: null,
    category: null,
    description: '',
  });

  const handleInputChange = (value) => {
    setFormData({ ...formData, [value.name]: value.value });
  };
  const processSubmit = (e, formData) => {
    e.preventDefault();
    handleSubmit(formData);
  };

  return (
    <form className={styles.form}>
      <label>
        <h4>Team(s)</h4>
        <Dropdown
          name={'teams'}
          multiple={true}
          handleInputChange={handleInputChange}
          options={teamOptions}
        />
      </label>
      <label>
        <h4>Target</h4>
        <Dropdown
          name="targets"
          multiple={true}
          handleInputChange={handleInputChange}
          options={targetOptions}
        />
      </label>
      <label>
        <h4>Category</h4>
        <Dropdown
          name={'category'}
          handleInputChange={handleInputChange}
          options={categoryOptions}
        />
      </label>
      <label>
        <h4>Comments</h4>
        <TextBox
          handleInputChange={handleInputChange}
          className={styles.textbox}
          name="description"
        />
      </label>
      <button className={styles.submit} type={'submit'} onClick={(e) => processSubmit(e, formData)}>
        Submit
      </button>
    </form>
  );
};

AttackForm.defaultProps = {};

AttackForm.propTypes = { teamOptions: PropTypes.arrayOf(PropTypes.object).isRequired };

export default AttackForm;
