const currentBackground = document.querySelector(".text-display");
const color1 = document.querySelector(".color1");
const color2 = document.querySelector(".color2");

color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);

function setGradient() {
  const gradientValue = "linear-gradient(to right, " + color1.value + "," + color2.value + ")";
  document.body.style.background = gradientValue;
  currentBackground.textContent = gradientValue;
}
