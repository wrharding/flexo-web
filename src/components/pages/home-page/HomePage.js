import React, {useEffect, useState} from 'react';
// import PropTypes from 'prop-types';
import HomeTemplate from '../../templates/home-template/HomeTemplate';
import {fetchData, postData} from "../../../services/api"

const HomePage = () => {
    const [teamOptions, setTeamOptions] =useState(null);
    const [categoryOptions, setCategoryOptions] =useState([]);
    const [targetOptions, setTargetOptions] =useState([]);
    const [events, setEvents] = useState([]);

    useEffect(()=>{
        const asyncFetch = async () =>{
            const teams = await fetchData("teams");
            const categories = await fetchData("categories");
            const targets = await fetchData("targets");
            const events = await fetchData("events");
            teams && setTeamOptions(teams);
            categories && setCategoryOptions(categories);
            targets && setTargetOptions(targets);
            events && setEvents(events);
        }
        asyncFetch()
    },[])

const convertToObjectLiteral = (object) =>{
        const str = JSON.stringify(object);
    return str.slice(0, str.length)
}

  const handleSubmit = (data) =>{
      const asyncPost = async () => {
          const objectLiteral = await convertToObjectLiteral(data);
          await postData("event", {
              method:'POST',
              body: objectLiteral,
              "cache-control": "no-store",
              pragma: "no-cache"
          });
      }
      asyncPost();
  }

  const processedEvents = () =>{
        events.map((event) =>{
            const newEvent = {event}
            return newEvent
        })
      return []
  }

  console.log("Events: ", events)
  return  teamOptions && <HomeTemplate events={processedEvents} handleSubmit={handleSubmit} teamOptions={teamOptions} targetOptions={targetOptions} categoryOptions={categoryOptions} />;
};

HomePage.defaultProps = {};

// HomePage.propTypes = {};

export default HomePage;
