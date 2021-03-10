export const fetchData = (path, options) => {
  return fetch(`https://scoreboard-api.fraq.io/${path}`, options)
    .then((response) => response.json())
    .then((data) => {
      if (Array.isArray(data)) {
        return data.map((item) => {
          return { value: item.team_id, label: item.abbrev };
        });
      }
    });
};

export const postData = async (path, options) => {
  return await fetch(`https://scoreboard-api.fraq.io/${path}`, options)
    .then((response) => response.json())
    .then((data) => {
      return data;
    });
};
