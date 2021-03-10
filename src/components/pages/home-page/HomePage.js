import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import HomeTemplate from '../../templates/home-template/HomeTemplate';
import { fetchData, postData } from '../../../services/api';

const HomePage = ({ secret }) => {
  const [teamOptions, setTeamOptions] = useState(null);
  const [categoryOptions, setCategoryOptions] = useState([]);
  const [targetOptions, setTargetOptions] = useState([]);
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const asyncFetch = async () => {
      const getOptions = {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${secret}`,
        },
      };
      const teams = await fetchData('teams', getOptions);
      const categories = await fetchData('categories', getOptions);
      const targets = await fetchData('targets', getOptions);
      const events = await fetchData('events', getOptions);
      teams && setTeamOptions(teams);
      categories && setCategoryOptions(categories);
      targets && setTargetOptions(targets);
      events && setEvents(events);
    };
    asyncFetch();
  }, []);

  const convertToObjectLiteral = (object) => {
    const str = JSON.stringify(object);
    return str.slice(0, str.length);
  };

  const handleSubmit = (data) => {
    const asyncPost = async () => {
      const auth = data.auth;
      delete data.auth;
      const objectLiteral = await convertToObjectLiteral(data);
      await postData('event', {
        method: 'POST',
        body: objectLiteral,
        headers: {
          Bearer: auth,
        },
        'cache-control': 'no-store',
        pragma: 'no-cache',
      });
    };
    asyncPost();
  };

  const processedEvents = () => {
    return events.map((event) => {
      const newEvent = { event };
      return newEvent;
    });
  };
  return (
    teamOptions && (
      <HomeTemplate
        events={processedEvents}
        handleSubmit={handleSubmit}
        teamOptions={teamOptions}
        targetOptions={targetOptions}
        categoryOptions={categoryOptions}
      />
    )
  );
};

HomePage.defaultProps = {};

HomePage.propTypes = { secret: PropTypes.string.isRequired };

export default HomePage;
