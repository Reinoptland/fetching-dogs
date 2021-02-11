async function whoLetTheDogsOut() {
  const spinner = document.getElementById("spinner");

  try {
    // display spinner here
    spinner.removeAttribute("class");

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
    if (error.message === "Network Error") {
      const message = "Je hebt geen internet, probeer een refresh!";
      const errorElement = document.createElement("h1");
      errorElement.textContent = message;
      const gallery = document.getElementById("dogGallery");
      gallery.appendChild(errorElement);
    } else {
      const message = "OOPS!";
      const errorElement = document.createElement("h1");
      errorElement.textContent = message;
      const gallery = document.getElementById("dogGallery");
      gallery.appendChild(errorElement);
    }
  }
  // remove spinner here
  spinner.setAttribute("class", "hideSpinner");
}

whoLetTheDogsOut();
