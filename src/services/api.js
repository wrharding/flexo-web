

export const fetchData = (path, options) =>{
   return fetch(`/${path}`, options)
        .then(response => response.json())
        .then(data => {
            if(Array.isArray(data)){
            return data.map((item) => {
                return {value: item.ID, label: item.Name}
            })
            }
                console.log("GET Res: ", data);
                return data

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