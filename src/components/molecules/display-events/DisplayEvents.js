import React from 'react';
import PropTypes from 'prop-types';
import styles from './DisplayEvents.module.scss';

const DisplayEvents = ({ events }) => {
  console.log(events);
  return <section className={styles.container}>DisplayEvents</section>;
};

DisplayEvents.defaultProps = {};

DisplayEvents.propTypes = { events: PropTypes.arrayOf(PropTypes.object).isRequired };

export default DisplayEvents;
