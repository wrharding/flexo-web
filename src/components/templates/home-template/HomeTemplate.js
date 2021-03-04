import React from 'react';
import PropTypes from 'prop-types';
import styles from './HomeTemplate.module.scss';
import AttackForm from '../../molecules/attack-form/AttackForm';
import DisplayEvents from "../../molecules/display-events/DisplayEvents";

const HomeTemplate = ({events, teamOptions, categoryOptions, targetOptions, handleSubmit}) => {
  return <div className={styles.mainContainer}>
      <AttackForm  teamOptions={teamOptions} categoryOptions={categoryOptions} targetOptions={targetOptions} handleSubmit={handleSubmit} />
      <DisplayEvents events={events} />
  </div>;
};

HomeTemplate.defaultProps = {};

HomeTemplate.propTypes = {events: PropTypes.arrayOf(PropTypes.object).isRequired,teamOptions: PropTypes.arrayOf(PropTypes.object), categoryOptions: PropTypes.arrayOf(PropTypes.object).isRequired, targetOptions:PropTypes.arrayOf(PropTypes.object).isRequired, handleSubmit:PropTypes.func.isRequired};

export default HomeTemplate;
