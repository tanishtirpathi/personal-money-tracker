const images = document.getElementById("logo");
const profile = document.getElementById("pro");

// Function to handle the click event and toggle classes
images.addEventListener("click", () => {
  if (profile.classList.contains("iv")) {
    profile.classList.remove("iv");
    profile.classList.add("div");
  } else {
    profile.classList.remove("div");
    profile.classList.add("iv");
  }
});
