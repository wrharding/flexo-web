export const fetchData = (path, options) => {
  return fetch(`${process.env.BACKEND_URL}/${path}`, options)
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
  return await fetch(`${process.env.BACKEND_URL}/${path}`, options)
    .then((response) => response.json())
    .then((data) => {
      console.log('Post res: ', data);
      return data;
    });
};
