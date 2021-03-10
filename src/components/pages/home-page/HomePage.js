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
      teams && setTeamOptions(processTeams(teams));
      categories && setCategoryOptions(processData(categories));
      targets && setTargetOptions(processData(targets));
      events && setEvents(events);
    };
    asyncFetch();
  }, []);

  const processTeams = (data) => {
    return data.map((item) => {
      return { value: item.team_id, label: item.abbrev };
    });
  };
  const processData = (data) => {
    return data.map((item) => {
      return { value: item.ID, label: item.Name };
    });
  };
  const convertToObjectLiteral = async (object) => {
    const str = await JSON.stringify(object);
    return str.slice(0, str.length);
  };

  const handleSubmit = (data) => {
    const asyncPost = async () => {
      const objectLiteral = await convertToObjectLiteral(data);
      const postRes = await postData('event', {
        method: 'POST',
        body: objectLiteral,
        headers: {
          Authorization: `Bearer ${secret}`,
        },
        'cache-control': 'no-store',
        pragma: 'no-cache',
      });
      if (postRes.status === 200) {
        alert('Form has been submitted successfully');
      }
      if (postRes.status !== 200) {
        alert('Form did not submit');
      }
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
