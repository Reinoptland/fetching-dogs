console.log("MAIN!");

async function whoLetTheDogsOut() {
  console.log("WOF", axios);
  const response = axios.get("https://dog.ceo/api/breed/schnauzer/images");
  console.log("DOGS??", response); // what??
}

whoLetTheDogsOut();
