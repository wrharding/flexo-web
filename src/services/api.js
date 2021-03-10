export const teamData = (path, options) => {
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

export const categoryData = (path, options) => {
  return fetch(`https://scoreboard-api.fraq.io/${path}`, options)
    .then((response) => response.json())
    .then((data) => {
      if (Array.isArray(data)) {
        return data.map((item) => {
          return { value: item.ID, label: item.Name };
        });
      }
    });
};

export const targetData = (path, options) => {
  return fetch(`https://scoreboard-api.fraq.io/${path}`, options)
    .then((response) => response.json())
    .then((data) => {
      if (Array.isArray(data)) {
        return data.map((item) => {
          return { value: item.ID, label: item.Name };
        });
      }
    });
};

export const eventData = (path, options) => {
  return fetch(`https://scoreboard-api.fraq.io/${path}`, options)
    .then((response) => response.json())
    .then((data) => {
      if (Array.isArray(data)) {
        return data.map((item) => {
          return { value: item.ID, label: item.Name };
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
