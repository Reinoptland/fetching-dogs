console.log("MAIN!");

async function whoLetTheDogsOut() {
  console.log("WOF", axios);
  const response = await axios.get(
    "https://dog.ceo/api/breed/schnauzer/images"
  );
  console.log("DOGS??", response.data.message); // what??
  for (const imageUrl of response.data.message) {
    console.log("1 URL?", imageUrl); //
  }
}

whoLetTheDogsOut();
