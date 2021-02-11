const axios = require("axios");

const url = "https://api.kanye.rest?format=text";

// parameter (urlToRequest)
async function letKanyeSpeakWisdom(urlToRequest) {
  //   console.log("HI!", urlToRequest);
  try {
    const response = await axios.get(urlToRequest);
    // console.log("STATUS:", response.status, "DATA:", response.data);
    console.log(`KANYE SAYS: ${response.data}`);
  } catch (error) {
    console.log(error); // HEEL BASIC
    console.log("RESPONSE:", error.response.status, error.response.statusText);
  }
}

async function waitForKanye() {
  // argument
  await letKanyeSpeakWisdom(url); // we halen de data op, ga maar verder!
  console.log("KANYE HAS SPOKEN!");
}

waitForKanye();
// try {
//   const kanye = "West";
//   // local scope
//   console.log(kanye);
// } catch (error) {
//   // local scope
// }
