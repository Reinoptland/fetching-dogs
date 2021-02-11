async function whoLetTheDogsOut() {
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
}

whoLetTheDogsOut();
