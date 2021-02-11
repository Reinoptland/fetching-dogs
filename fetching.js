const axios = require("axios");

const url = "https://api.kanye.rest?format=text";

// parameter (urlToRequest)
async function letKanyeSpeakWisdom(urlToRequest) {
  console.log("HI!", urlToRequest);
}

// argument
letKanyeSpeakWisdom(url);
