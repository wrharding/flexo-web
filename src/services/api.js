

export const fetchData = (path) =>{
   return fetch(`/${path}`)
        .then(response => response.json())
        .then(data => {
            return data.map((item) => {
                return {value: item.ID, label: item.Name}
            })
        });
}

export const postData = async (path, options) => {
    console.log("Post Options: ", options);
    return await fetch(`/${path}`, options)
        .then(response => response.json())
        .then(data => {
           console.log("Post res: ", data);
            });
        };