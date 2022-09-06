/*
    fatch send async request to server,
    the first arg is.
    when we pass only url it will send get request
*/
fetch("https://jsonplaceholder.typicode.com/posts")
  .then((response) => response.json()) //fetch convert the data from server from json to real array of objects
  .then((data) => {
    //real array of objects stored in data
    // console.log(data);
    for (let item of data) {
      console.log(item);
    }
  });

const postData = async (url = "", data = {}) => {
  try {
    // Default options are marked with *
    let response = await fetch(url, {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      mode: "cors", // no-cors, *cors, same-origin
      cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      credentials: "same-origin", // include, *same-origin, omit
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      redirect: "follow", // manual, *follow, error
      referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      body: JSON.stringify(data), // body data type must match "Content-Type" header
    });
    return response.json(); // parses JSON response into native JavaScript objects
  } catch (err) {
    return null;
  }
};

let user = {};

postData("url", user);
