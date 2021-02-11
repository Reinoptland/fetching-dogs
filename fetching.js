const axios = require("axios");

const url = "https://api.kanye.rest?format=text";

// parameter (urlToRequest)
async function letKanyeSpeakWisdom(urlToRequest) {
  //   console.log("HI!", urlToRequest);
  const response = await axios.get(urlToRequest);
  //   console.log("STATUS:", response.status, "DATA:", response.data);
  console.log(`KANYE SAYS: ${response.data}`);
}

// argument
letKanyeSpeakWisdom(url);
