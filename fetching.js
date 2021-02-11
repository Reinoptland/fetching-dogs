const axios = require("axios");

const url = "https://api.kanye.rest?format=text";

// parameter (urlToRequest)
async function letKanyeSpeakWisdom(urlToRequest) {
  console.log("HI!", urlToRequest);
  const response = axios.get(urlToRequest);
  console.log(response);
}

// argument
letKanyeSpeakWisdom(url);
