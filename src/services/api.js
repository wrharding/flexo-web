export const fetchData = (path, options) => {
  return fetch(`https://scoreboard-api.fraq.io/${path}`, options)
    .then((response) => response.json())
    .then((data) => {
      console.log('data[0]: ', data[0]);
      return data;
    });
};

export const postData = async (path, options) => {
  console.log('options: ', options);
  try {
    return await fetch(`https://scoreboard-api.fraq.io/${path}`, options)
      .then((response) => response)
      .then((data) => {
        console.log('Data: ', data);
        return data;
      });
  } catch (err) {
    err && console.error(err);
  }
};
