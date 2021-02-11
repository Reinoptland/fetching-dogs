console.log("MAIN!");

async function whoLetTheDogsOut() {
  console.log("WOF", axios);
  const response = await axios.get(
    "https://dog.ceo/api/breed/schnauzer/images"
  );
  console.log("DOGS??", response.data.message); // what??
}

whoLetTheDogsOut();
