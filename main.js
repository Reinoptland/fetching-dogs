async function whoLetTheDogsOut() {
  try {
    const response = await axios.get(
      "https://dog.ceo/api/breed/schnauzer/images"
    );

    for (const imageUrl of response.data.message) {
      const dogImage = document.createElement("img");
      dogImage.setAttribute("src", imageUrl);
      dogImage.setAttribute("alt", "a cute schnauzer");
      const gallery = document.getElementById("dogGallery");
      gallery.appendChild(dogImage);
    }
  } catch (error) {
    console.log("ERROR:", error.message);
    console.log("ERROR RESPONSE:", error.response);
    if (error.message === "Network Error") {
      console.log("GEEN INTERNET?");
      const message = "Je hebt geen internet";
      const errorElement = document.createElement("h1");
      errorElement.textContent = message;
      console.log(errorElement);
    }
  }
}

whoLetTheDogsOut();
