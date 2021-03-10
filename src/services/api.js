export const fetchData = (path, options) => {
  return fetch(`https://scoreboard-api.fraq.io/${path}`, options)
    .then((response) => response.json())
    .then((data) => {
      if (Array.isArray(data)) {
        return data.map((item) => {
          return { value: item.ID, label: item.Name };
        });
      }
      return data;
    });
};

export const postData = async (path, options) => {
  return await fetch(`https://scoreboard.fraq.io/${path}`, options)
    .then((response) => response.json())
    .then((data) => {
      return data;
    });
};
